/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IERC20Named.sol/IERC20Named.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import ABI_FILE from "./IERC20Named.abi";

export type IERC20NamedAllowanceArgs = {
  owner: `0x${string}`;
  spender: `0x${string}`;
};

/**
 * Factory function for IERC20Named.allowance function args
 */
export const encodeIERC20NamedAllowanceArgs = ({
  owner,
  spender,
}: IERC20NamedAllowanceArgs) => [owner, spender] as const;

/**
 * Encoder function for IERC20Named.allowance function data
 */
export const encodeIERC20NamedAllowanceData = ({
  owner,
  spender,
}: IERC20NamedAllowanceArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "allowance",
    abi: ABI_FILE.abi,
    args: [owner, spender],
  });

export type IERC20NamedApproveArgs = { spender: `0x${string}`; amount: bigint };

/**
 * Factory function for IERC20Named.approve function args
 */
export const encodeIERC20NamedApproveArgs = ({
  spender,
  amount,
}: IERC20NamedApproveArgs) => [spender, amount] as const;

/**
 * Encoder function for IERC20Named.approve function data
 */
export const encodeIERC20NamedApproveData = ({
  spender,
  amount,
}: IERC20NamedApproveArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "approve",
    abi: ABI_FILE.abi,
    args: [spender, amount],
  });

export type IERC20NamedBalanceOfArgs = { account: `0x${string}` };

/**
 * Factory function for IERC20Named.balanceOf function args
 */
export const encodeIERC20NamedBalanceOfArgs = ({
  account,
}: IERC20NamedBalanceOfArgs) => [account] as const;

/**
 * Encoder function for IERC20Named.balanceOf function data
 */
export const encodeIERC20NamedBalanceOfData = ({
  account,
}: IERC20NamedBalanceOfArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "balanceOf",
    abi: ABI_FILE.abi,
    args: [account],
  });

export type IERC20NamedTransferArgs = {
  recipient: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IERC20Named.transfer function args
 */
export const encodeIERC20NamedTransferArgs = ({
  recipient,
  amount,
}: IERC20NamedTransferArgs) => [recipient, amount] as const;

/**
 * Encoder function for IERC20Named.transfer function data
 */
export const encodeIERC20NamedTransferData = ({
  recipient,
  amount,
}: IERC20NamedTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transfer",
    abi: ABI_FILE.abi,
    args: [recipient, amount],
  });

export type IERC20NamedTransferFromArgs = {
  sender: `0x${string}`;
  recipient: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IERC20Named.transferFrom function args
 */
export const encodeIERC20NamedTransferFromArgs = ({
  sender,
  recipient,
  amount,
}: IERC20NamedTransferFromArgs) => [sender, recipient, amount] as const;

/**
 * Encoder function for IERC20Named.transferFrom function data
 */
export const encodeIERC20NamedTransferFromData = ({
  sender,
  recipient,
  amount,
}: IERC20NamedTransferFromArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferFrom",
    abi: ABI_FILE.abi,
    args: [sender, recipient, amount],
  });

export const IERC20_NAMED_ENCODERS = {
  allowance: encodeIERC20NamedAllowanceArgs,
  approve: encodeIERC20NamedApproveArgs,
  balanceOf: encodeIERC20NamedBalanceOfArgs,
  transfer: encodeIERC20NamedTransferArgs,
  transferFrom: encodeIERC20NamedTransferFromArgs,
};
