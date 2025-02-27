import { INTERCHAIN_TOKEN_FACTORY_ENCODERS } from "@axelarjs/evm";
import { Maybe, throttle } from "@axelarjs/utils";
import { useCallback, useEffect, useMemo, useState } from "react";

import { reduce } from "rambda";
import { parseUnits } from "viem";
import {
  useAccount,
  useChainId,
  useFeeData,
  useWaitForTransaction,
} from "wagmi";

import { NEXT_PUBLIC_INTERCHAIN_TRANSFER_GAS_LIMIT } from "~/config/env";
import {
  useInterchainTokenFactoryInterchainTokenAddress,
  useInterchainTokenFactoryInterchainTokenId,
  useInterchainTokenFactoryMulticall,
  usePrepareInterchainTokenFactoryMulticall,
} from "~/lib/contracts/InterchainTokenFactory.hooks";
import {
  decodeDeploymentMessageId,
  type DeploymentMessageId,
} from "~/lib/drizzle/schema";
import { trpc } from "~/lib/trpc";
import { isValidEVMAddress } from "~/lib/utils/validation";
import { RecordInterchainTokenDeploymentInput } from "~/server/routers/interchainToken/recordInterchainTokenDeployment";
import { useEVMChainConfigsQuery } from "~/services/axelarscan/hooks";
import type { DeployAndRegisterTransactionState } from "../InterchainTokenDeployment.state";

export interface UseDeployAndRegisterInterchainTokenInput {
  sourceChainId: string;
  tokenName: string;
  tokenSymbol: string;
  decimals: number;
  destinationChainIds: string[];
  remoteDeploymentGasFees: bigint[];
  remoteTransferGasFees: bigint[];
  originInitialSupply?: bigint;
  remoteInitialSupply?: bigint;
  salt: `0x${string}`;
  distributorAddress?: `0x${string}`;
}

export interface UseDeployAndRegisterRemoteInterchainTokenConfig {
  onStatusUpdate?: (message: DeployAndRegisterTransactionState) => void;
  onFinished?: () => void;
}

export function useDeployAndRegisterRemoteInterchainTokenMutation(
  config: UseDeployAndRegisterRemoteInterchainTokenConfig,
  input?: UseDeployAndRegisterInterchainTokenInput
) {
  const { address: deployerAddress } = useAccount();
  const chainId = useChainId();

  const { computed } = useEVMChainConfigsQuery();

  const { mutateAsync: recordDeploymentAsync } =
    trpc.interchainToken.recordInterchainTokenDeployment.useMutation();

  const onStatusUpdate = throttle(config.onStatusUpdate ?? (() => {}), 150);

  const [recordDeploymentArgs, setRecordDeploymentArgs] =
    useState<RecordInterchainTokenDeploymentInput>();

  const { data: tokenId } = useInterchainTokenFactoryInterchainTokenId({
    args: INTERCHAIN_TOKEN_FACTORY_ENCODERS.interchainTokenId.args({
      salt: input?.salt as `0x${string}`,
      deployer: deployerAddress as `0x${string}`,
    }),
    enabled:
      input?.salt && deployerAddress && isValidEVMAddress(deployerAddress),
  });

  const { data: tokenAddress } =
    useInterchainTokenFactoryInterchainTokenAddress({
      args: INTERCHAIN_TOKEN_FACTORY_ENCODERS.interchainTokenAddress.args({
        salt: input?.salt as `0x${string}`,
        deployer: deployerAddress as `0x${string}`,
      }),
      enabled: Boolean(tokenId && input?.salt && deployerAddress),
    });

  const { data: gasEstimate } = useFeeData();

  const { originalChainName, destinationChainNames } = useMemo(() => {
    const index = computed.indexedById;
    const originalChainName =
      index[input?.sourceChainId ?? chainId]?.chain_name ?? "Unknown";

    return {
      originalChainName,
      destinationChainNames:
        input?.destinationChainIds.map(
          (destinationChainId) =>
            index[destinationChainId]?.chain_name ?? "Unknown"
        ) ?? [],
    };
  }, [
    chainId,
    computed.indexedById,
    input?.destinationChainIds,
    input?.sourceChainId,
  ]);

  const withDecimals = useCallback(
    (value: bigint) => parseUnits(String(value), input?.decimals ?? 0),
    [input?.decimals]
  );

  const originTransferGas = input?.originInitialSupply
    ? (gasEstimate?.gasPrice ?? 0n) *
      BigInt(NEXT_PUBLIC_INTERCHAIN_TRANSFER_GAS_LIMIT)
    : 0n;

  const multicallArgs = useMemo(() => {
    const distributor = input?.distributorAddress ?? deployerAddress;

    if (!input || !distributor || !tokenId) {
      return [];
    }

    const parsedOriginInitialSupply = Maybe.of(input.originInitialSupply).mapOr(
      0n,
      withDecimals
    );

    const parsedRemoteInitialSupply = Maybe.of(input.remoteInitialSupply).mapOr(
      0n,
      withDecimals
    );

    const totalRemoteSupply =
      parsedRemoteInitialSupply * BigInt(input.destinationChainIds.length);

    const totalInitialSupply = parsedOriginInitialSupply + totalRemoteSupply;

    const baseArgs = {
      salt: input.salt,
      name: input.tokenName,
      symbol: input.tokenSymbol,
      decimals: input.decimals,
    };

    const deployTxData =
      INTERCHAIN_TOKEN_FACTORY_ENCODERS.deployInterchainToken.data({
        ...baseArgs,
        mintAmount: totalInitialSupply,
        distributor: distributor,
      });

    const transferTxData: `0x${string}`[] = !input.originInitialSupply
      ? []
      : [
          INTERCHAIN_TOKEN_FACTORY_ENCODERS.interchainTransfer.data({
            tokenId,
            amount: parsedOriginInitialSupply,
            destinationAddress: distributor,
            destinationChain: "",
            gasValue: originTransferGas,
          }),
        ];

    if (!input.destinationChainIds.length) {
      // early return case, no remote chains
      return [deployTxData, ...transferTxData];
    }

    const registerTxData = destinationChainNames.map((destinationChain, i) =>
      INTERCHAIN_TOKEN_FACTORY_ENCODERS.deployRemoteInterchainToken.data({
        originalChainName,
        destinationChain,
        gasValue: input.remoteDeploymentGasFees[i] ?? 0n,
        distributor: distributor,
        salt: input.salt,
      })
    );

    if (input.remoteInitialSupply) {
      transferTxData.push(
        ...destinationChainNames.map((destinationChain, i) =>
          INTERCHAIN_TOKEN_FACTORY_ENCODERS.interchainTransfer.data({
            amount: parsedRemoteInitialSupply,
            destinationAddress: distributor,
            destinationChain,
            tokenId: tokenId,
            gasValue: input.remoteTransferGasFees[i] ?? 0n,
          })
        )
      );
    }

    return [deployTxData, ...registerTxData, ...transferTxData];
  }, [
    input,
    deployerAddress,
    tokenId,
    withDecimals,
    originTransferGas,
    destinationChainNames,
    originalChainName,
  ]);

  const totalGasFee = useMemo(() => {
    const remoteDeploymentsGas = Maybe.of(input?.remoteDeploymentGasFees).mapOr(
      0n,
      reduce((a, b) => a + b, 0n)
    );

    const remoteTransfersGas = Maybe.of(input?.remoteTransferGasFees).mapOr(
      0n,
      reduce((a, b) => a + b, 0n)
    );

    // the total gas fee is the sum of the remote deployments gas fee,
    // the remote transfers gas fee and the origin transfer gas fee
    return remoteDeploymentsGas + remoteTransfersGas + originTransferGas;
  }, [
    input?.remoteDeploymentGasFees,
    input?.remoteTransferGasFees,
    originTransferGas,
  ]);

  const prepareMulticall = usePrepareInterchainTokenFactoryMulticall({
    chainId,
    value: totalGasFee,
    args: [multicallArgs],
  });

  const multicall = useInterchainTokenFactoryMulticall(prepareMulticall.config);

  useWaitForTransaction({
    hash: multicall?.data?.hash,
    confirmations: 8,
    onSuccess: () => {
      const txHash = multicall?.data?.hash;

      if (!txHash || !tokenAddress || !tokenId || !deployerAddress || !input) {
        return;
      }

      setRecordDeploymentArgs({
        kind: "interchain",
        salt: input.salt,
        tokenId,
        tokenAddress,
        deployerAddress,
        deploymentMessageId: `${txHash}-0`,
        tokenName: input.tokenName,
        tokenSymbol: input.tokenSymbol,
        tokenDecimals: input.decimals,
        axelarChainId: input.sourceChainId,
        originalDistributorAddress: deployerAddress,
        destinationAxelarChainIds: input.destinationChainIds,
      });
    },
  });

  useEffect(
    () => {
      if (recordDeploymentArgs) {
        recordDeploymentAsync(recordDeploymentArgs)
          .then(() => {
            const tx = decodeDeploymentMessageId(
              recordDeploymentArgs.deploymentMessageId as DeploymentMessageId
            );
            onStatusUpdate({
              type: "deployed",
              tokenAddress: recordDeploymentArgs.tokenAddress as `0x${string}`,
              txHash: tx.hash,
            });
          })
          .catch(() => {
            onStatusUpdate({
              type: "idle",
            });
          });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [recordDeploymentArgs]
  );

  return multicall;
}
