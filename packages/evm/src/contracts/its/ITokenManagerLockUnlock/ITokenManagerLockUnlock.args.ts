/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/ITokenManagerLockUnlock.sol/ITokenManagerLockUnlock.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import type { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./ITokenManagerLockUnlock.abi";

export type ITokenManagerLockUnlockAcceptOperatorshipArgs = {
  fromOperator: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLockUnlock.acceptOperatorship function args
 */
export const encodeITokenManagerLockUnlockAcceptOperatorshipArgs = ({
  fromOperator,
}: ITokenManagerLockUnlockAcceptOperatorshipArgs) => [fromOperator] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.acceptOperatorship function data
 */
export const encodeITokenManagerLockUnlockAcceptOperatorshipData = ({
  fromOperator,
}: ITokenManagerLockUnlockAcceptOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "acceptOperatorship",
    abi: ABI_FILE.abi,
    args: [fromOperator],
  });

export type ITokenManagerLockUnlockAddFlowLimiterArgs = {
  flowLimiter: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLockUnlock.addFlowLimiter function args
 */
export const encodeITokenManagerLockUnlockAddFlowLimiterArgs = ({
  flowLimiter,
}: ITokenManagerLockUnlockAddFlowLimiterArgs) => [flowLimiter] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.addFlowLimiter function data
 */
export const encodeITokenManagerLockUnlockAddFlowLimiterData = ({
  flowLimiter,
}: ITokenManagerLockUnlockAddFlowLimiterArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "addFlowLimiter",
    abi: ABI_FILE.abi,
    args: [flowLimiter],
  });

export type ITokenManagerLockUnlockCallContractWithInterchainTokenArgs = {
  destinationChain: string;
  destinationAddress: `0x${string}`;
  amount: bigint;
  data: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLockUnlock.callContractWithInterchainToken function args
 */
export const encodeITokenManagerLockUnlockCallContractWithInterchainTokenArgs =
  ({
    destinationChain,
    destinationAddress,
    amount,
    data,
  }: ITokenManagerLockUnlockCallContractWithInterchainTokenArgs) =>
    [destinationChain, destinationAddress, amount, data] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.callContractWithInterchainToken function data
 */
export const encodeITokenManagerLockUnlockCallContractWithInterchainTokenData =
  ({
    destinationChain,
    destinationAddress,
    amount,
    data,
  }: ITokenManagerLockUnlockCallContractWithInterchainTokenArgs): `0x${string}` =>
    encodeFunctionData({
      functionName: "callContractWithInterchainToken",
      abi: ABI_FILE.abi,
      args: [destinationChain, destinationAddress, amount, data],
    });

export type ITokenManagerLockUnlockGiveTokenArgs = {
  destinationAddress: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for ITokenManagerLockUnlock.giveToken function args
 */
export const encodeITokenManagerLockUnlockGiveTokenArgs = ({
  destinationAddress,
  amount,
}: ITokenManagerLockUnlockGiveTokenArgs) =>
  [destinationAddress, amount] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.giveToken function data
 */
export const encodeITokenManagerLockUnlockGiveTokenData = ({
  destinationAddress,
  amount,
}: ITokenManagerLockUnlockGiveTokenArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "giveToken",
    abi: ABI_FILE.abi,
    args: [destinationAddress, amount],
  });

export type ITokenManagerLockUnlockHasRoleArgs = {
  account: `0x${string}`;
  role: number;
};

/**
 * Factory function for ITokenManagerLockUnlock.hasRole function args
 */
export const encodeITokenManagerLockUnlockHasRoleArgs = ({
  account,
  role,
}: ITokenManagerLockUnlockHasRoleArgs) => [account, role] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.hasRole function data
 */
export const encodeITokenManagerLockUnlockHasRoleData = ({
  account,
  role,
}: ITokenManagerLockUnlockHasRoleArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "hasRole",
    abi: ABI_FILE.abi,
    args: [account, role],
  });

export type ITokenManagerLockUnlockInterchainTransferArgs = {
  destinationChain: string;
  destinationAddress: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLockUnlock.interchainTransfer function args
 */
export const encodeITokenManagerLockUnlockInterchainTransferArgs = ({
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: ITokenManagerLockUnlockInterchainTransferArgs) =>
  [destinationChain, destinationAddress, amount, metadata] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.interchainTransfer function data
 */
export const encodeITokenManagerLockUnlockInterchainTransferData = ({
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: ITokenManagerLockUnlockInterchainTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "interchainTransfer",
    abi: ABI_FILE.abi,
    args: [destinationChain, destinationAddress, amount, metadata],
  });

export type ITokenManagerLockUnlockIsOperatorArgs = { addr: `0x${string}` };

/**
 * Factory function for ITokenManagerLockUnlock.isOperator function args
 */
export const encodeITokenManagerLockUnlockIsOperatorArgs = ({
  addr,
}: ITokenManagerLockUnlockIsOperatorArgs) => [addr] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.isOperator function data
 */
export const encodeITokenManagerLockUnlockIsOperatorData = ({
  addr,
}: ITokenManagerLockUnlockIsOperatorArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "isOperator",
    abi: ABI_FILE.abi,
    args: [addr],
  });

export type ITokenManagerLockUnlockParamsArgs = {
  operator_: `0x${string}`;
  tokenAddress_: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLockUnlock.params function args
 */
export const encodeITokenManagerLockUnlockParamsArgs = ({
  operator_,
  tokenAddress_,
}: ITokenManagerLockUnlockParamsArgs) => [operator_, tokenAddress_] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.params function data
 */
export const encodeITokenManagerLockUnlockParamsData = ({
  operator_,
  tokenAddress_,
}: ITokenManagerLockUnlockParamsArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "params",
    abi: ABI_FILE.abi,
    args: [operator_, tokenAddress_],
  });

export type ITokenManagerLockUnlockProposeOperatorshipArgs = {
  operator_: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLockUnlock.proposeOperatorship function args
 */
export const encodeITokenManagerLockUnlockProposeOperatorshipArgs = ({
  operator_,
}: ITokenManagerLockUnlockProposeOperatorshipArgs) => [operator_] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.proposeOperatorship function data
 */
export const encodeITokenManagerLockUnlockProposeOperatorshipData = ({
  operator_,
}: ITokenManagerLockUnlockProposeOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "proposeOperatorship",
    abi: ABI_FILE.abi,
    args: [operator_],
  });

export type ITokenManagerLockUnlockRemoveFlowLimiterArgs = {
  flowLimiter: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLockUnlock.removeFlowLimiter function args
 */
export const encodeITokenManagerLockUnlockRemoveFlowLimiterArgs = ({
  flowLimiter,
}: ITokenManagerLockUnlockRemoveFlowLimiterArgs) => [flowLimiter] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.removeFlowLimiter function data
 */
export const encodeITokenManagerLockUnlockRemoveFlowLimiterData = ({
  flowLimiter,
}: ITokenManagerLockUnlockRemoveFlowLimiterArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "removeFlowLimiter",
    abi: ABI_FILE.abi,
    args: [flowLimiter],
  });

export type ITokenManagerLockUnlockSetFlowLimitArgs = { flowLimit_: bigint };

/**
 * Factory function for ITokenManagerLockUnlock.setFlowLimit function args
 */
export const encodeITokenManagerLockUnlockSetFlowLimitArgs = ({
  flowLimit_,
}: ITokenManagerLockUnlockSetFlowLimitArgs) => [flowLimit_] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.setFlowLimit function data
 */
export const encodeITokenManagerLockUnlockSetFlowLimitData = ({
  flowLimit_,
}: ITokenManagerLockUnlockSetFlowLimitArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setFlowLimit",
    abi: ABI_FILE.abi,
    args: [flowLimit_],
  });

export type ITokenManagerLockUnlockSetupArgs = { data: `0x${string}` };

/**
 * Factory function for ITokenManagerLockUnlock.setup function args
 */
export const encodeITokenManagerLockUnlockSetupArgs = ({
  data,
}: ITokenManagerLockUnlockSetupArgs) => [data] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.setup function data
 */
export const encodeITokenManagerLockUnlockSetupData = ({
  data,
}: ITokenManagerLockUnlockSetupArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setup",
    abi: ABI_FILE.abi,
    args: [data],
  });

export type ITokenManagerLockUnlockTakeTokenArgs = {
  sourceAddress: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for ITokenManagerLockUnlock.takeToken function args
 */
export const encodeITokenManagerLockUnlockTakeTokenArgs = ({
  sourceAddress,
  amount,
}: ITokenManagerLockUnlockTakeTokenArgs) => [sourceAddress, amount] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.takeToken function data
 */
export const encodeITokenManagerLockUnlockTakeTokenData = ({
  sourceAddress,
  amount,
}: ITokenManagerLockUnlockTakeTokenArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "takeToken",
    abi: ABI_FILE.abi,
    args: [sourceAddress, amount],
  });

export type ITokenManagerLockUnlockTransferOperatorshipArgs = {
  operator_: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLockUnlock.transferOperatorship function args
 */
export const encodeITokenManagerLockUnlockTransferOperatorshipArgs = ({
  operator_,
}: ITokenManagerLockUnlockTransferOperatorshipArgs) => [operator_] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.transferOperatorship function data
 */
export const encodeITokenManagerLockUnlockTransferOperatorshipData = ({
  operator_,
}: ITokenManagerLockUnlockTransferOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferOperatorship",
    abi: ABI_FILE.abi,
    args: [operator_],
  });

export type ITokenManagerLockUnlockTransmitInterchainTransferArgs = {
  sender: `0x${string}`;
  destinationChain: string;
  destinationAddress: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLockUnlock.transmitInterchainTransfer function args
 */
export const encodeITokenManagerLockUnlockTransmitInterchainTransferArgs = ({
  sender,
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: ITokenManagerLockUnlockTransmitInterchainTransferArgs) =>
  [sender, destinationChain, destinationAddress, amount, metadata] as const;

/**
 * Encoder function for ITokenManagerLockUnlock.transmitInterchainTransfer function data
 */
export const encodeITokenManagerLockUnlockTransmitInterchainTransferData = ({
  sender,
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: ITokenManagerLockUnlockTransmitInterchainTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transmitInterchainTransfer",
    abi: ABI_FILE.abi,
    args: [sender, destinationChain, destinationAddress, amount, metadata],
  });

export const ITOKEN_MANAGER_LOCK_UNLOCK_ENCODERS = {
  acceptOperatorship: {
    args: encodeITokenManagerLockUnlockAcceptOperatorshipArgs,
    data: encodeITokenManagerLockUnlockAcceptOperatorshipData,
  },
  addFlowLimiter: {
    args: encodeITokenManagerLockUnlockAddFlowLimiterArgs,
    data: encodeITokenManagerLockUnlockAddFlowLimiterData,
  },
  callContractWithInterchainToken: {
    args: encodeITokenManagerLockUnlockCallContractWithInterchainTokenArgs,
    data: encodeITokenManagerLockUnlockCallContractWithInterchainTokenData,
  },
  giveToken: {
    args: encodeITokenManagerLockUnlockGiveTokenArgs,
    data: encodeITokenManagerLockUnlockGiveTokenData,
  },
  hasRole: {
    args: encodeITokenManagerLockUnlockHasRoleArgs,
    data: encodeITokenManagerLockUnlockHasRoleData,
  },
  interchainTransfer: {
    args: encodeITokenManagerLockUnlockInterchainTransferArgs,
    data: encodeITokenManagerLockUnlockInterchainTransferData,
  },
  isOperator: {
    args: encodeITokenManagerLockUnlockIsOperatorArgs,
    data: encodeITokenManagerLockUnlockIsOperatorData,
  },
  params: {
    args: encodeITokenManagerLockUnlockParamsArgs,
    data: encodeITokenManagerLockUnlockParamsData,
  },
  proposeOperatorship: {
    args: encodeITokenManagerLockUnlockProposeOperatorshipArgs,
    data: encodeITokenManagerLockUnlockProposeOperatorshipData,
  },
  removeFlowLimiter: {
    args: encodeITokenManagerLockUnlockRemoveFlowLimiterArgs,
    data: encodeITokenManagerLockUnlockRemoveFlowLimiterData,
  },
  setFlowLimit: {
    args: encodeITokenManagerLockUnlockSetFlowLimitArgs,
    data: encodeITokenManagerLockUnlockSetFlowLimitData,
  },
  setup: {
    args: encodeITokenManagerLockUnlockSetupArgs,
    data: encodeITokenManagerLockUnlockSetupData,
  },
  takeToken: {
    args: encodeITokenManagerLockUnlockTakeTokenArgs,
    data: encodeITokenManagerLockUnlockTakeTokenData,
  },
  transferOperatorship: {
    args: encodeITokenManagerLockUnlockTransferOperatorshipArgs,
    data: encodeITokenManagerLockUnlockTransferOperatorshipData,
  },
  transmitInterchainTransfer: {
    args: encodeITokenManagerLockUnlockTransmitInterchainTransferArgs,
    data: encodeITokenManagerLockUnlockTransmitInterchainTransferData,
  },
};

export function createITokenManagerLockUnlockReadClient(
  publicClient: PublicContractClient<typeof ABI_FILE.abi>
) {
  return {
    hasRole(hasRoleArgs: ITokenManagerLockUnlockHasRoleArgs) {
      const encoder = ITOKEN_MANAGER_LOCK_UNLOCK_ENCODERS["hasRole"];
      const encodedArgs = encoder.args(hasRoleArgs);

      return publicClient.read("hasRole", { args: encodedArgs });
    },
    isOperator(isOperatorArgs: ITokenManagerLockUnlockIsOperatorArgs) {
      const encoder = ITOKEN_MANAGER_LOCK_UNLOCK_ENCODERS["isOperator"];
      const encodedArgs = encoder.args(isOperatorArgs);

      return publicClient.read("isOperator", { args: encodedArgs });
    },
    params(paramsArgs: ITokenManagerLockUnlockParamsArgs) {
      const encoder = ITOKEN_MANAGER_LOCK_UNLOCK_ENCODERS["params"];
      const encodedArgs = encoder.args(paramsArgs);

      return publicClient.read("params", { args: encodedArgs });
    },
  };
}
