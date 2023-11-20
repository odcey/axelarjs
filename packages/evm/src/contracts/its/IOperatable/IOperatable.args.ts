/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IOperatable.sol/IOperatable.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import type { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./IOperatable.abi";

export type IOperatableAcceptOperatorshipArgs = { fromOperator: `0x${string}` };

/**
 * Factory function for IOperatable.acceptOperatorship function args
 */
export const encodeIOperatableAcceptOperatorshipArgs = ({
  fromOperator,
}: IOperatableAcceptOperatorshipArgs) => [fromOperator] as const;

/**
 * Encoder function for IOperatable.acceptOperatorship function data
 */
export const encodeIOperatableAcceptOperatorshipData = ({
  fromOperator,
}: IOperatableAcceptOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "acceptOperatorship",
    abi: ABI_FILE.abi,
    args: [fromOperator],
  });

export type IOperatableHasRoleArgs = { account: `0x${string}`; role: number };

/**
 * Factory function for IOperatable.hasRole function args
 */
export const encodeIOperatableHasRoleArgs = ({
  account,
  role,
}: IOperatableHasRoleArgs) => [account, role] as const;

/**
 * Encoder function for IOperatable.hasRole function data
 */
export const encodeIOperatableHasRoleData = ({
  account,
  role,
}: IOperatableHasRoleArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "hasRole",
    abi: ABI_FILE.abi,
    args: [account, role],
  });

export type IOperatableIsOperatorArgs = { addr: `0x${string}` };

/**
 * Factory function for IOperatable.isOperator function args
 */
export const encodeIOperatableIsOperatorArgs = ({
  addr,
}: IOperatableIsOperatorArgs) => [addr] as const;

/**
 * Encoder function for IOperatable.isOperator function data
 */
export const encodeIOperatableIsOperatorData = ({
  addr,
}: IOperatableIsOperatorArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "isOperator",
    abi: ABI_FILE.abi,
    args: [addr],
  });

export type IOperatableProposeOperatorshipArgs = { operator_: `0x${string}` };

/**
 * Factory function for IOperatable.proposeOperatorship function args
 */
export const encodeIOperatableProposeOperatorshipArgs = ({
  operator_,
}: IOperatableProposeOperatorshipArgs) => [operator_] as const;

/**
 * Encoder function for IOperatable.proposeOperatorship function data
 */
export const encodeIOperatableProposeOperatorshipData = ({
  operator_,
}: IOperatableProposeOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "proposeOperatorship",
    abi: ABI_FILE.abi,
    args: [operator_],
  });

export type IOperatableTransferOperatorshipArgs = { operator_: `0x${string}` };

/**
 * Factory function for IOperatable.transferOperatorship function args
 */
export const encodeIOperatableTransferOperatorshipArgs = ({
  operator_,
}: IOperatableTransferOperatorshipArgs) => [operator_] as const;

/**
 * Encoder function for IOperatable.transferOperatorship function data
 */
export const encodeIOperatableTransferOperatorshipData = ({
  operator_,
}: IOperatableTransferOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferOperatorship",
    abi: ABI_FILE.abi,
    args: [operator_],
  });

export const IOPERATABLE_ENCODERS = {
  acceptOperatorship: {
    args: encodeIOperatableAcceptOperatorshipArgs,
    data: encodeIOperatableAcceptOperatorshipData,
  },
  hasRole: {
    args: encodeIOperatableHasRoleArgs,
    data: encodeIOperatableHasRoleData,
  },
  isOperator: {
    args: encodeIOperatableIsOperatorArgs,
    data: encodeIOperatableIsOperatorData,
  },
  proposeOperatorship: {
    args: encodeIOperatableProposeOperatorshipArgs,
    data: encodeIOperatableProposeOperatorshipData,
  },
  transferOperatorship: {
    args: encodeIOperatableTransferOperatorshipArgs,
    data: encodeIOperatableTransferOperatorshipData,
  },
};

export function createIOperatableReadClient(
  publicClient: PublicContractClient<typeof ABI_FILE.abi>
) {
  return {
    hasRole(hasRoleArgs: IOperatableHasRoleArgs) {
      const encoder = IOPERATABLE_ENCODERS["hasRole"];
      const encodedArgs = encoder.args(hasRoleArgs);

      return publicClient.read("hasRole", { args: encodedArgs });
    },
    isOperator(isOperatorArgs: IOperatableIsOperatorArgs) {
      const encoder = IOPERATABLE_ENCODERS["isOperator"];
      const encodedArgs = encoder.args(isOperatorArgs);

      return publicClient.read("isOperator", { args: encodedArgs });
    },
  };
}
