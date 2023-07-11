import { INTERCHAIN_TOKEN_SERVICE_ABI } from "@axelarjs/evm";
import { toast } from "@axelarjs/ui";
import { hexlify, hexZeroPad, throttle } from "@axelarjs/utils";
import { useMemo, useRef } from "react";

import { encodeFunctionData, TransactionExecutionError } from "viem";
import {
  useAccount,
  useMutation,
  useNetwork,
  useWaitForTransaction,
} from "wagmi";

import { watchInterchainTokenServiceEvent } from "~/lib/contracts/InterchainTokenService.actions";
import {
  useInterchainTokenServiceGetCustomTokenId,
  useInterchainTokenServiceGetStandardizedTokenAddress,
  useInterchainTokenServiceMulticall,
} from "~/lib/contracts/InterchainTokenService.hooks";
import { logger } from "~/lib/logger";
import { trpc } from "~/lib/trpc";
import { isValidEVMAddress } from "~/lib/utils/validation";
import type { DeployAndRegisterTransactionState } from "../AddErc20.state";

export type UseDeployAndRegisterInterchainTokenInput = {
  sourceChainId: string;
  tokenName: string;
  tokenSymbol: string;
  decimals: number;
  destinationChainIds: string[];
  gasFees: bigint[];
  cap?: bigint;
  mintTo?: `0x${string}`;
};

export function useDeployInterchainTokenMutation(config: {
  value: bigint;
  onStatusUpdate?: (message: DeployAndRegisterTransactionState) => void;
  onFinished?: () => void;
}) {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const salt = useMemo(
    () =>
      hexZeroPad(
        hexlify(Math.floor(Math.random() * 1_000_000_000)),
        32
      ) as `0x${string}`,
    []
  );

  const { data: tokenId } = useInterchainTokenServiceGetCustomTokenId({
    args: [address as `0x${string}`, salt],
    enabled: address && isValidEVMAddress(address),
  });

  const { data: tokenAddress } =
    useInterchainTokenServiceGetStandardizedTokenAddress({
      args: [tokenId as `0x${string}`],
      enabled: Boolean(tokenId),
    });

  const { writeAsync: multicallAsync, data: multicallResult } =
    useInterchainTokenServiceMulticall();

  let currentInput: UseDeployAndRegisterInterchainTokenInput = {
    sourceChainId: "",
    tokenName: "",
    tokenSymbol: "",
    decimals: 0,
    destinationChainIds: [],
    gasFees: [],
    cap: BigInt(0),
    mintTo: `0x000`,
  };

  const { mutateAsync: recordDeploymentAsync } =
    trpc.interchainToken.recordInterchainTokenDeployment.useMutation();

  const onStatusUpdate = throttle(config.onStatusUpdate ?? (() => {}), 150);

  const txHashRef = useRef<string>("");

  const unwatch = watchInterchainTokenServiceEvent(
    {
      eventName: "StandardizedTokenDeployed",
    },
    async (logs) => {
      const log = logs.find(
        (log) =>
          Boolean(log.args?.tokenId) &&
          log?.args.decimals === currentInput.decimals &&
          log?.args.name === currentInput.tokenName &&
          log?.args.symbol === currentInput.tokenSymbol &&
          log?.args.mintTo === address
      );

      if (!log || !chain) {
        return;
      }

      unwatch();

      const details = {
        name: currentInput.tokenName,
        symbol: currentInput.tokenSymbol,
        decimals: currentInput.decimals,
        tokenId: tokenId as `0x${string}`,
        address: tokenAddress as `0x${string}`,
        originChainId: chain.id,
        axelarChainId: currentInput.sourceChainId,
        deployerAddress: address as `0x${string}`,
        salt,
        deploymentTxHash: txHashRef.current as `0x${string}`,
        remoteTokens: currentInput.destinationChainIds.map((chainId) => ({
          axelarChainId: chainId,
          address: tokenAddress as `0x${string}`,
        })),
      };

      await recordDeploymentAsync(details);

      onStatusUpdate({
        type: "deployed",
        tokenAddress: tokenAddress as `0x${string}`,
        txHash: txHashRef.current as `0x${string}`,
      });
    }
  );

  useWaitForTransaction({
    hash: multicallResult?.hash,
    confirmations: 8,
    onSuccess() {
      if (!multicallResult) {
        return;
      }
      config.onFinished?.();
    },
  });

  return useMutation(
    async (input: UseDeployAndRegisterInterchainTokenInput) => {
      if (!address) {
        return;
      }

      currentInput = input;

      onStatusUpdate({
        type: "pending_approval",
      });
      try {
        const deployTxData = encodeFunctionData({
          functionName: "deployAndRegisterStandardizedToken",
          args: [
            salt,
            input.tokenName,
            input.tokenSymbol,
            input.decimals,
            input.cap ?? BigInt(0),
            input.mintTo ?? address,
          ],
          abi: INTERCHAIN_TOKEN_SERVICE_ABI,
        });

        const totalGasFee = input.gasFees.reduce(
          (acc, gasFee) => acc + gasFee,
          BigInt(0)
        );

        const registerTxData = input.destinationChainIds.map((chainId, i) => {
          const gasFee = input.gasFees[i];
          const args = [
            salt,
            input.tokenName,
            input.tokenSymbol,
            input.decimals,
            "0x",
            input.mintTo ?? address,
            chainId,
            gasFee,
          ] as const;

          return encodeFunctionData({
            functionName: "deployAndRegisterRemoteStandardizedToken",
            args: args,
            abi: INTERCHAIN_TOKEN_SERVICE_ABI,
          });
        });

        const tx = await multicallAsync({
          value: totalGasFee,
          args: [[deployTxData, ...registerTxData]],
        });

        if (tx?.hash) {
          onStatusUpdate({
            type: "deploying",
            txHash: tx.hash,
          });

          txHashRef.current = tx.hash;
        }
      } catch (error) {
        onStatusUpdate({
          type: "idle",
        });
        if (error instanceof TransactionExecutionError) {
          toast.error(`Transaction failed: ${error.cause.shortMessage}`);

          logger.error("Failed to deploy interchain token", error.cause);
        }

        console.error({ error });
      }
    }
  );
}
