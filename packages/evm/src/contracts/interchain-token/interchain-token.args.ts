/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.cjs
 *
 * Original abi file:
 * - @axelar-network/interchain-token-service/dist/interchain-token/InterchainToken.sol/InterchainToken.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import ABI_FILE from "./interchain-token.abi";

export type InterchainTokenApproveArgs = {
  spender: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for InterchainToken.approve function args
 */
export const encodeInterchainTokenApproveArgs = ({
  spender,
  amount,
}: InterchainTokenApproveArgs) => [spender, amount] as const;

/**
 * Encoder function for InterchainToken.approve function data
 */
export const encodeInterchainTokenApproveData = ({
  spender,
  amount,
}: InterchainTokenApproveArgs) =>
  encodeFunctionData({
    functionName: "approve",
    abi: ABI_FILE.abi,
    args: [spender, amount],
  });

export type InterchainTokenDecreaseAllowanceArgs = {
  spender: `0x${string}`;
  subtractedValue: bigint;
};

/**
 * Factory function for InterchainToken.decreaseAllowance function args
 */
export const encodeInterchainTokenDecreaseAllowanceArgs = ({
  spender,
  subtractedValue,
}: InterchainTokenDecreaseAllowanceArgs) => [spender, subtractedValue] as const;

/**
 * Encoder function for InterchainToken.decreaseAllowance function data
 */
export const encodeInterchainTokenDecreaseAllowanceData = ({
  spender,
  subtractedValue,
}: InterchainTokenDecreaseAllowanceArgs) =>
  encodeFunctionData({
    functionName: "decreaseAllowance",
    abi: ABI_FILE.abi,
    args: [spender, subtractedValue],
  });

export type InterchainTokenIncreaseAllowanceArgs = {
  spender: `0x${string}`;
  addedValue: bigint;
};

/**
 * Factory function for InterchainToken.increaseAllowance function args
 */
export const encodeInterchainTokenIncreaseAllowanceArgs = ({
  spender,
  addedValue,
}: InterchainTokenIncreaseAllowanceArgs) => [spender, addedValue] as const;

/**
 * Encoder function for InterchainToken.increaseAllowance function data
 */
export const encodeInterchainTokenIncreaseAllowanceData = ({
  spender,
  addedValue,
}: InterchainTokenIncreaseAllowanceArgs) =>
  encodeFunctionData({
    functionName: "increaseAllowance",
    abi: ABI_FILE.abi,
    args: [spender, addedValue],
  });

export type InterchainTokenInterchainTransferArgs = {
  destinationChain: string;
  recipient: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for InterchainToken.interchainTransfer function args
 */
export const encodeInterchainTokenInterchainTransferArgs = ({
  destinationChain,
  recipient,
  amount,
  metadata,
}: InterchainTokenInterchainTransferArgs) =>
  [destinationChain, recipient, amount, metadata] as const;

/**
 * Encoder function for InterchainToken.interchainTransfer function data
 */
export const encodeInterchainTokenInterchainTransferData = ({
  destinationChain,
  recipient,
  amount,
  metadata,
}: InterchainTokenInterchainTransferArgs) =>
  encodeFunctionData({
    functionName: "interchainTransfer",
    abi: ABI_FILE.abi,
    args: [destinationChain, recipient, amount, metadata],
  });

export type InterchainTokenInterchainTransferFromArgs = {
  sender: `0x${string}`;
  destinationChain: string;
  recipient: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for InterchainToken.interchainTransferFrom function args
 */
export const encodeInterchainTokenInterchainTransferFromArgs = ({
  sender,
  destinationChain,
  recipient,
  amount,
  metadata,
}: InterchainTokenInterchainTransferFromArgs) =>
  [sender, destinationChain, recipient, amount, metadata] as const;

/**
 * Encoder function for InterchainToken.interchainTransferFrom function data
 */
export const encodeInterchainTokenInterchainTransferFromData = ({
  sender,
  destinationChain,
  recipient,
  amount,
  metadata,
}: InterchainTokenInterchainTransferFromArgs) =>
  encodeFunctionData({
    functionName: "interchainTransferFrom",
    abi: ABI_FILE.abi,
    args: [sender, destinationChain, recipient, amount, metadata],
  });

export type InterchainTokenTransferArgs = {
  recipient: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for InterchainToken.transfer function args
 */
export const encodeInterchainTokenTransferArgs = ({
  recipient,
  amount,
}: InterchainTokenTransferArgs) => [recipient, amount] as const;

/**
 * Encoder function for InterchainToken.transfer function data
 */
export const encodeInterchainTokenTransferData = ({
  recipient,
  amount,
}: InterchainTokenTransferArgs) =>
  encodeFunctionData({
    functionName: "transfer",
    abi: ABI_FILE.abi,
    args: [recipient, amount],
  });

export type InterchainTokenTransferFromArgs = {
  sender: `0x${string}`;
  recipient: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for InterchainToken.transferFrom function args
 */
export const encodeInterchainTokenTransferFromArgs = ({
  sender,
  recipient,
  amount,
}: InterchainTokenTransferFromArgs) => [sender, recipient, amount] as const;

/**
 * Encoder function for InterchainToken.transferFrom function data
 */
export const encodeInterchainTokenTransferFromData = ({
  sender,
  recipient,
  amount,
}: InterchainTokenTransferFromArgs) =>
  encodeFunctionData({
    functionName: "transferFrom",
    abi: ABI_FILE.abi,
    args: [sender, recipient, amount],
  });
