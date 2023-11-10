/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/InterchainTokenService.sol/InterchainTokenService.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import ABI_FILE from "./InterchainTokenService.abi";

export type InterchainTokenServiceAcceptOperatorshipArgs = {
  fromOperator: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.acceptOperatorship function args
 */
export const encodeInterchainTokenServiceAcceptOperatorshipArgs = ({
  fromOperator,
}: InterchainTokenServiceAcceptOperatorshipArgs) => [fromOperator] as const;

/**
 * Encoder function for InterchainTokenService.acceptOperatorship function data
 */
export const encodeInterchainTokenServiceAcceptOperatorshipData = ({
  fromOperator,
}: InterchainTokenServiceAcceptOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "acceptOperatorship",
    abi: ABI_FILE.abi,
    args: [fromOperator],
  });

export type InterchainTokenServiceCallContractWithInterchainTokenArgs = {
  tokenId: `0x${string}`;
  destinationChain: string;
  destinationAddress: `0x${string}`;
  amount: bigint;
  data: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.callContractWithInterchainToken function args
 */
export const encodeInterchainTokenServiceCallContractWithInterchainTokenArgs =
  ({
    tokenId,
    destinationChain,
    destinationAddress,
    amount,
    data,
  }: InterchainTokenServiceCallContractWithInterchainTokenArgs) =>
    [tokenId, destinationChain, destinationAddress, amount, data] as const;

/**
 * Encoder function for InterchainTokenService.callContractWithInterchainToken function data
 */
export const encodeInterchainTokenServiceCallContractWithInterchainTokenData =
  ({
    tokenId,
    destinationChain,
    destinationAddress,
    amount,
    data,
  }: InterchainTokenServiceCallContractWithInterchainTokenArgs): `0x${string}` =>
    encodeFunctionData({
      functionName: "callContractWithInterchainToken",
      abi: ABI_FILE.abi,
      args: [tokenId, destinationChain, destinationAddress, amount, data],
    });

export type InterchainTokenServiceContractCallValueArgs = {
  sourceChain: string;
  sourceAddress: string;
  payload: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.contractCallValue function args
 */
export const encodeInterchainTokenServiceContractCallValueArgs = ({
  sourceChain,
  sourceAddress,
  payload,
}: InterchainTokenServiceContractCallValueArgs) =>
  [sourceChain, sourceAddress, payload] as const;

/**
 * Encoder function for InterchainTokenService.contractCallValue function data
 */
export const encodeInterchainTokenServiceContractCallValueData = ({
  sourceChain,
  sourceAddress,
  payload,
}: InterchainTokenServiceContractCallValueArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "contractCallValue",
    abi: ABI_FILE.abi,
    args: [sourceChain, sourceAddress, payload],
  });

export type InterchainTokenServiceDeployInterchainTokenArgs = {
  salt: `0x${string}`;
  destinationChain: string;
  name: string;
  symbol: string;
  decimals: number;
  distributor: `0x${string}`;
  gasValue: bigint;
};

/**
 * Factory function for InterchainTokenService.deployInterchainToken function args
 */
export const encodeInterchainTokenServiceDeployInterchainTokenArgs = ({
  salt,
  destinationChain,
  name,
  symbol,
  decimals,
  distributor,
  gasValue,
}: InterchainTokenServiceDeployInterchainTokenArgs) =>
  [
    salt,
    destinationChain,
    name,
    symbol,
    decimals,
    distributor,
    gasValue,
  ] as const;

/**
 * Encoder function for InterchainTokenService.deployInterchainToken function data
 */
export const encodeInterchainTokenServiceDeployInterchainTokenData = ({
  salt,
  destinationChain,
  name,
  symbol,
  decimals,
  distributor,
  gasValue,
}: InterchainTokenServiceDeployInterchainTokenArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "deployInterchainToken",
    abi: ABI_FILE.abi,
    args: [
      salt,
      destinationChain,
      name,
      symbol,
      decimals,
      distributor,
      gasValue,
    ],
  });

export type InterchainTokenServiceDeployTokenManagerArgs = {
  salt: `0x${string}`;
  destinationChain: string;
  tokenManagerType: number;
  params: `0x${string}`;
  gasValue: bigint;
};

/**
 * Factory function for InterchainTokenService.deployTokenManager function args
 */
export const encodeInterchainTokenServiceDeployTokenManagerArgs = ({
  salt,
  destinationChain,
  tokenManagerType,
  params,
  gasValue,
}: InterchainTokenServiceDeployTokenManagerArgs) =>
  [salt, destinationChain, tokenManagerType, params, gasValue] as const;

/**
 * Encoder function for InterchainTokenService.deployTokenManager function data
 */
export const encodeInterchainTokenServiceDeployTokenManagerData = ({
  salt,
  destinationChain,
  tokenManagerType,
  params,
  gasValue,
}: InterchainTokenServiceDeployTokenManagerArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "deployTokenManager",
    abi: ABI_FILE.abi,
    args: [salt, destinationChain, tokenManagerType, params, gasValue],
  });

export type InterchainTokenServiceExecuteArgs = {
  commandId: `0x${string}`;
  sourceChain: string;
  sourceAddress: string;
  payload: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.execute function args
 */
export const encodeInterchainTokenServiceExecuteArgs = ({
  commandId,
  sourceChain,
  sourceAddress,
  payload,
}: InterchainTokenServiceExecuteArgs) =>
  [commandId, sourceChain, sourceAddress, payload] as const;

/**
 * Encoder function for InterchainTokenService.execute function data
 */
export const encodeInterchainTokenServiceExecuteData = ({
  commandId,
  sourceChain,
  sourceAddress,
  payload,
}: InterchainTokenServiceExecuteArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "execute",
    abi: ABI_FILE.abi,
    args: [commandId, sourceChain, sourceAddress, payload],
  });

export type InterchainTokenServiceExpressExecuteArgs = {
  commandId: `0x${string}`;
  sourceChain: string;
  sourceAddress: string;
  payload: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.expressExecute function args
 */
export const encodeInterchainTokenServiceExpressExecuteArgs = ({
  commandId,
  sourceChain,
  sourceAddress,
  payload,
}: InterchainTokenServiceExpressExecuteArgs) =>
  [commandId, sourceChain, sourceAddress, payload] as const;

/**
 * Encoder function for InterchainTokenService.expressExecute function data
 */
export const encodeInterchainTokenServiceExpressExecuteData = ({
  commandId,
  sourceChain,
  sourceAddress,
  payload,
}: InterchainTokenServiceExpressExecuteArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "expressExecute",
    abi: ABI_FILE.abi,
    args: [commandId, sourceChain, sourceAddress, payload],
  });

export type InterchainTokenServiceFlowInAmountArgs = { tokenId: `0x${string}` };

/**
 * Factory function for InterchainTokenService.flowInAmount function args
 */
export const encodeInterchainTokenServiceFlowInAmountArgs = ({
  tokenId,
}: InterchainTokenServiceFlowInAmountArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.flowInAmount function data
 */
export const encodeInterchainTokenServiceFlowInAmountData = ({
  tokenId,
}: InterchainTokenServiceFlowInAmountArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "flowInAmount",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export type InterchainTokenServiceFlowLimitArgs = { tokenId: `0x${string}` };

/**
 * Factory function for InterchainTokenService.flowLimit function args
 */
export const encodeInterchainTokenServiceFlowLimitArgs = ({
  tokenId,
}: InterchainTokenServiceFlowLimitArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.flowLimit function data
 */
export const encodeInterchainTokenServiceFlowLimitData = ({
  tokenId,
}: InterchainTokenServiceFlowLimitArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "flowLimit",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export type InterchainTokenServiceFlowOutAmountArgs = {
  tokenId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.flowOutAmount function args
 */
export const encodeInterchainTokenServiceFlowOutAmountArgs = ({
  tokenId,
}: InterchainTokenServiceFlowOutAmountArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.flowOutAmount function data
 */
export const encodeInterchainTokenServiceFlowOutAmountData = ({
  tokenId,
}: InterchainTokenServiceFlowOutAmountArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "flowOutAmount",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export type InterchainTokenServiceGetExpressExecutorArgs = {
  commandId: `0x${string}`;
  sourceChain: string;
  sourceAddress: string;
  payloadHash: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getExpressExecutor function args
 */
export const encodeInterchainTokenServiceGetExpressExecutorArgs = ({
  commandId,
  sourceChain,
  sourceAddress,
  payloadHash,
}: InterchainTokenServiceGetExpressExecutorArgs) =>
  [commandId, sourceChain, sourceAddress, payloadHash] as const;

/**
 * Encoder function for InterchainTokenService.getExpressExecutor function data
 */
export const encodeInterchainTokenServiceGetExpressExecutorData = ({
  commandId,
  sourceChain,
  sourceAddress,
  payloadHash,
}: InterchainTokenServiceGetExpressExecutorArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "getExpressExecutor",
    abi: ABI_FILE.abi,
    args: [commandId, sourceChain, sourceAddress, payloadHash],
  });

export type InterchainTokenServiceGetExpressExecutorWithTokenArgs = {
  commandId: `0x${string}`;
  sourceChain: string;
  sourceAddress: string;
  payloadHash: `0x${string}`;
  symbol: string;
  amount: bigint;
};

/**
 * Factory function for InterchainTokenService.getExpressExecutorWithToken function args
 */
export const encodeInterchainTokenServiceGetExpressExecutorWithTokenArgs = ({
  commandId,
  sourceChain,
  sourceAddress,
  payloadHash,
  symbol,
  amount,
}: InterchainTokenServiceGetExpressExecutorWithTokenArgs) =>
  [commandId, sourceChain, sourceAddress, payloadHash, symbol, amount] as const;

/**
 * Encoder function for InterchainTokenService.getExpressExecutorWithToken function data
 */
export const encodeInterchainTokenServiceGetExpressExecutorWithTokenData = ({
  commandId,
  sourceChain,
  sourceAddress,
  payloadHash,
  symbol,
  amount,
}: InterchainTokenServiceGetExpressExecutorWithTokenArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "getExpressExecutorWithToken",
    abi: ABI_FILE.abi,
    args: [commandId, sourceChain, sourceAddress, payloadHash, symbol, amount],
  });

export type InterchainTokenServiceHasRoleArgs = {
  account: `0x${string}`;
  role: number;
};

/**
 * Factory function for InterchainTokenService.hasRole function args
 */
export const encodeInterchainTokenServiceHasRoleArgs = ({
  account,
  role,
}: InterchainTokenServiceHasRoleArgs) => [account, role] as const;

/**
 * Encoder function for InterchainTokenService.hasRole function data
 */
export const encodeInterchainTokenServiceHasRoleData = ({
  account,
  role,
}: InterchainTokenServiceHasRoleArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "hasRole",
    abi: ABI_FILE.abi,
    args: [account, role],
  });

export type InterchainTokenServiceInterchainTokenAddressArgs = {
  tokenId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.interchainTokenAddress function args
 */
export const encodeInterchainTokenServiceInterchainTokenAddressArgs = ({
  tokenId,
}: InterchainTokenServiceInterchainTokenAddressArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.interchainTokenAddress function data
 */
export const encodeInterchainTokenServiceInterchainTokenAddressData = ({
  tokenId,
}: InterchainTokenServiceInterchainTokenAddressArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "interchainTokenAddress",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export type InterchainTokenServiceInterchainTokenIdArgs = {
  sender: `0x${string}`;
  salt: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.interchainTokenId function args
 */
export const encodeInterchainTokenServiceInterchainTokenIdArgs = ({
  sender,
  salt,
}: InterchainTokenServiceInterchainTokenIdArgs) => [sender, salt] as const;

/**
 * Encoder function for InterchainTokenService.interchainTokenId function data
 */
export const encodeInterchainTokenServiceInterchainTokenIdData = ({
  sender,
  salt,
}: InterchainTokenServiceInterchainTokenIdArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "interchainTokenId",
    abi: ABI_FILE.abi,
    args: [sender, salt],
  });

export type InterchainTokenServiceInterchainTransferArgs = {
  tokenId: `0x${string}`;
  destinationChain: string;
  destinationAddress: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.interchainTransfer function args
 */
export const encodeInterchainTokenServiceInterchainTransferArgs = ({
  tokenId,
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: InterchainTokenServiceInterchainTransferArgs) =>
  [tokenId, destinationChain, destinationAddress, amount, metadata] as const;

/**
 * Encoder function for InterchainTokenService.interchainTransfer function data
 */
export const encodeInterchainTokenServiceInterchainTransferData = ({
  tokenId,
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: InterchainTokenServiceInterchainTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "interchainTransfer",
    abi: ABI_FILE.abi,
    args: [tokenId, destinationChain, destinationAddress, amount, metadata],
  });

export type InterchainTokenServiceIsOperatorArgs = { addr: `0x${string}` };

/**
 * Factory function for InterchainTokenService.isOperator function args
 */
export const encodeInterchainTokenServiceIsOperatorArgs = ({
  addr,
}: InterchainTokenServiceIsOperatorArgs) => [addr] as const;

/**
 * Encoder function for InterchainTokenService.isOperator function data
 */
export const encodeInterchainTokenServiceIsOperatorData = ({
  addr,
}: InterchainTokenServiceIsOperatorArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "isOperator",
    abi: ABI_FILE.abi,
    args: [addr],
  });

export type InterchainTokenServiceIsTrustedAddressArgs = {
  chain: string;
  address_: string;
};

/**
 * Factory function for InterchainTokenService.isTrustedAddress function args
 */
export const encodeInterchainTokenServiceIsTrustedAddressArgs = ({
  chain,
  address_,
}: InterchainTokenServiceIsTrustedAddressArgs) => [chain, address_] as const;

/**
 * Encoder function for InterchainTokenService.isTrustedAddress function data
 */
export const encodeInterchainTokenServiceIsTrustedAddressData = ({
  chain,
  address_,
}: InterchainTokenServiceIsTrustedAddressArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "isTrustedAddress",
    abi: ABI_FILE.abi,
    args: [chain, address_],
  });

export type InterchainTokenServiceMulticallArgs = { data: any };

/**
 * Factory function for InterchainTokenService.multicall function args
 */
export const encodeInterchainTokenServiceMulticallArgs = ({
  data,
}: InterchainTokenServiceMulticallArgs) => [data] as const;

/**
 * Encoder function for InterchainTokenService.multicall function data
 */
export const encodeInterchainTokenServiceMulticallData = ({
  data,
}: InterchainTokenServiceMulticallArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "multicall",
    abi: ABI_FILE.abi,
    args: [data],
  });

export type InterchainTokenServiceProposeOperatorshipArgs = {
  operator: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.proposeOperatorship function args
 */
export const encodeInterchainTokenServiceProposeOperatorshipArgs = ({
  operator,
}: InterchainTokenServiceProposeOperatorshipArgs) => [operator] as const;

/**
 * Encoder function for InterchainTokenService.proposeOperatorship function data
 */
export const encodeInterchainTokenServiceProposeOperatorshipData = ({
  operator,
}: InterchainTokenServiceProposeOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "proposeOperatorship",
    abi: ABI_FILE.abi,
    args: [operator],
  });

export type InterchainTokenServiceProposeOwnershipArgs = {
  newOwner: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.proposeOwnership function args
 */
export const encodeInterchainTokenServiceProposeOwnershipArgs = ({
  newOwner,
}: InterchainTokenServiceProposeOwnershipArgs) => [newOwner] as const;

/**
 * Encoder function for InterchainTokenService.proposeOwnership function data
 */
export const encodeInterchainTokenServiceProposeOwnershipData = ({
  newOwner,
}: InterchainTokenServiceProposeOwnershipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "proposeOwnership",
    abi: ABI_FILE.abi,
    args: [newOwner],
  });

export type InterchainTokenServiceRemoveTrustedAddressArgs = { chain: string };

/**
 * Factory function for InterchainTokenService.removeTrustedAddress function args
 */
export const encodeInterchainTokenServiceRemoveTrustedAddressArgs = ({
  chain,
}: InterchainTokenServiceRemoveTrustedAddressArgs) => [chain] as const;

/**
 * Encoder function for InterchainTokenService.removeTrustedAddress function data
 */
export const encodeInterchainTokenServiceRemoveTrustedAddressData = ({
  chain,
}: InterchainTokenServiceRemoveTrustedAddressArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "removeTrustedAddress",
    abi: ABI_FILE.abi,
    args: [chain],
  });

export type InterchainTokenServiceSetFlowLimitsArgs = {
  tokenIds: any;
  flowLimits: any;
};

/**
 * Factory function for InterchainTokenService.setFlowLimits function args
 */
export const encodeInterchainTokenServiceSetFlowLimitsArgs = ({
  tokenIds,
  flowLimits,
}: InterchainTokenServiceSetFlowLimitsArgs) => [tokenIds, flowLimits] as const;

/**
 * Encoder function for InterchainTokenService.setFlowLimits function data
 */
export const encodeInterchainTokenServiceSetFlowLimitsData = ({
  tokenIds,
  flowLimits,
}: InterchainTokenServiceSetFlowLimitsArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setFlowLimits",
    abi: ABI_FILE.abi,
    args: [tokenIds, flowLimits],
  });

export type InterchainTokenServiceSetPauseStatusArgs = { paused: boolean };

/**
 * Factory function for InterchainTokenService.setPauseStatus function args
 */
export const encodeInterchainTokenServiceSetPauseStatusArgs = ({
  paused,
}: InterchainTokenServiceSetPauseStatusArgs) => [paused] as const;

/**
 * Encoder function for InterchainTokenService.setPauseStatus function data
 */
export const encodeInterchainTokenServiceSetPauseStatusData = ({
  paused,
}: InterchainTokenServiceSetPauseStatusArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setPauseStatus",
    abi: ABI_FILE.abi,
    args: [paused],
  });

export type InterchainTokenServiceSetTrustedAddressArgs = {
  chain: string;
  address_: string;
};

/**
 * Factory function for InterchainTokenService.setTrustedAddress function args
 */
export const encodeInterchainTokenServiceSetTrustedAddressArgs = ({
  chain,
  address_,
}: InterchainTokenServiceSetTrustedAddressArgs) => [chain, address_] as const;

/**
 * Encoder function for InterchainTokenService.setTrustedAddress function data
 */
export const encodeInterchainTokenServiceSetTrustedAddressData = ({
  chain,
  address_,
}: InterchainTokenServiceSetTrustedAddressArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setTrustedAddress",
    abi: ABI_FILE.abi,
    args: [chain, address_],
  });

export type InterchainTokenServiceSetupArgs = { data: `0x${string}` };

/**
 * Factory function for InterchainTokenService.setup function args
 */
export const encodeInterchainTokenServiceSetupArgs = ({
  data,
}: InterchainTokenServiceSetupArgs) => [data] as const;

/**
 * Encoder function for InterchainTokenService.setup function data
 */
export const encodeInterchainTokenServiceSetupData = ({
  data,
}: InterchainTokenServiceSetupArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setup",
    abi: ABI_FILE.abi,
    args: [data],
  });

export type InterchainTokenServiceTokenManagerAddressArgs = {
  tokenId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.tokenManagerAddress function args
 */
export const encodeInterchainTokenServiceTokenManagerAddressArgs = ({
  tokenId,
}: InterchainTokenServiceTokenManagerAddressArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.tokenManagerAddress function data
 */
export const encodeInterchainTokenServiceTokenManagerAddressData = ({
  tokenId,
}: InterchainTokenServiceTokenManagerAddressArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "tokenManagerAddress",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export type InterchainTokenServiceTokenManagerImplementationArgs = {
  tokenManagerType: bigint;
};

/**
 * Factory function for InterchainTokenService.tokenManagerImplementation function args
 */
export const encodeInterchainTokenServiceTokenManagerImplementationArgs = ({
  tokenManagerType,
}: InterchainTokenServiceTokenManagerImplementationArgs) =>
  [tokenManagerType] as const;

/**
 * Encoder function for InterchainTokenService.tokenManagerImplementation function data
 */
export const encodeInterchainTokenServiceTokenManagerImplementationData = ({
  tokenManagerType,
}: InterchainTokenServiceTokenManagerImplementationArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "tokenManagerImplementation",
    abi: ABI_FILE.abi,
    args: [tokenManagerType],
  });

export type InterchainTokenServiceTransferOperatorshipArgs = {
  operator: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.transferOperatorship function args
 */
export const encodeInterchainTokenServiceTransferOperatorshipArgs = ({
  operator,
}: InterchainTokenServiceTransferOperatorshipArgs) => [operator] as const;

/**
 * Encoder function for InterchainTokenService.transferOperatorship function data
 */
export const encodeInterchainTokenServiceTransferOperatorshipData = ({
  operator,
}: InterchainTokenServiceTransferOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferOperatorship",
    abi: ABI_FILE.abi,
    args: [operator],
  });

export type InterchainTokenServiceTransferOwnershipArgs = {
  newOwner: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.transferOwnership function args
 */
export const encodeInterchainTokenServiceTransferOwnershipArgs = ({
  newOwner,
}: InterchainTokenServiceTransferOwnershipArgs) => [newOwner] as const;

/**
 * Encoder function for InterchainTokenService.transferOwnership function data
 */
export const encodeInterchainTokenServiceTransferOwnershipData = ({
  newOwner,
}: InterchainTokenServiceTransferOwnershipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferOwnership",
    abi: ABI_FILE.abi,
    args: [newOwner],
  });

export type InterchainTokenServiceTransmitInterchainTransferArgs = {
  tokenId: `0x${string}`;
  sourceAddress: `0x${string}`;
  destinationChain: string;
  destinationAddress: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.transmitInterchainTransfer function args
 */
export const encodeInterchainTokenServiceTransmitInterchainTransferArgs = ({
  tokenId,
  sourceAddress,
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: InterchainTokenServiceTransmitInterchainTransferArgs) =>
  [
    tokenId,
    sourceAddress,
    destinationChain,
    destinationAddress,
    amount,
    metadata,
  ] as const;

/**
 * Encoder function for InterchainTokenService.transmitInterchainTransfer function data
 */
export const encodeInterchainTokenServiceTransmitInterchainTransferData = ({
  tokenId,
  sourceAddress,
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: InterchainTokenServiceTransmitInterchainTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transmitInterchainTransfer",
    abi: ABI_FILE.abi,
    args: [
      tokenId,
      sourceAddress,
      destinationChain,
      destinationAddress,
      amount,
      metadata,
    ],
  });

export type InterchainTokenServiceTrustedAddressArgs = { chain: string };

/**
 * Factory function for InterchainTokenService.trustedAddress function args
 */
export const encodeInterchainTokenServiceTrustedAddressArgs = ({
  chain,
}: InterchainTokenServiceTrustedAddressArgs) => [chain] as const;

/**
 * Encoder function for InterchainTokenService.trustedAddress function data
 */
export const encodeInterchainTokenServiceTrustedAddressData = ({
  chain,
}: InterchainTokenServiceTrustedAddressArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "trustedAddress",
    abi: ABI_FILE.abi,
    args: [chain],
  });

export type InterchainTokenServiceTrustedAddressHashArgs = { chain: string };

/**
 * Factory function for InterchainTokenService.trustedAddressHash function args
 */
export const encodeInterchainTokenServiceTrustedAddressHashArgs = ({
  chain,
}: InterchainTokenServiceTrustedAddressHashArgs) => [chain] as const;

/**
 * Encoder function for InterchainTokenService.trustedAddressHash function data
 */
export const encodeInterchainTokenServiceTrustedAddressHashData = ({
  chain,
}: InterchainTokenServiceTrustedAddressHashArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "trustedAddressHash",
    abi: ABI_FILE.abi,
    args: [chain],
  });

export type InterchainTokenServiceUpgradeArgs = {
  newImplementation: `0x${string}`;
  newImplementationCodeHash: `0x${string}`;
  params: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.upgrade function args
 */
export const encodeInterchainTokenServiceUpgradeArgs = ({
  newImplementation,
  newImplementationCodeHash,
  params,
}: InterchainTokenServiceUpgradeArgs) =>
  [newImplementation, newImplementationCodeHash, params] as const;

/**
 * Encoder function for InterchainTokenService.upgrade function data
 */
export const encodeInterchainTokenServiceUpgradeData = ({
  newImplementation,
  newImplementationCodeHash,
  params,
}: InterchainTokenServiceUpgradeArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "upgrade",
    abi: ABI_FILE.abi,
    args: [newImplementation, newImplementationCodeHash, params],
  });

export type InterchainTokenServiceValidTokenAddressArgs = {
  tokenId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.validTokenAddress function args
 */
export const encodeInterchainTokenServiceValidTokenAddressArgs = ({
  tokenId,
}: InterchainTokenServiceValidTokenAddressArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.validTokenAddress function data
 */
export const encodeInterchainTokenServiceValidTokenAddressData = ({
  tokenId,
}: InterchainTokenServiceValidTokenAddressArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "validTokenAddress",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export type InterchainTokenServiceValidTokenManagerAddressArgs = {
  tokenId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.validTokenManagerAddress function args
 */
export const encodeInterchainTokenServiceValidTokenManagerAddressArgs = ({
  tokenId,
}: InterchainTokenServiceValidTokenManagerAddressArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.validTokenManagerAddress function data
 */
export const encodeInterchainTokenServiceValidTokenManagerAddressData = ({
  tokenId,
}: InterchainTokenServiceValidTokenManagerAddressArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "validTokenManagerAddress",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export const INTERCHAIN_TOKEN_SERVICE_ENCODERS = {
  acceptOperatorship: encodeInterchainTokenServiceAcceptOperatorshipArgs,
  callContractWithInterchainToken:
    encodeInterchainTokenServiceCallContractWithInterchainTokenArgs,
  contractCallValue: encodeInterchainTokenServiceContractCallValueArgs,
  deployInterchainToken: encodeInterchainTokenServiceDeployInterchainTokenArgs,
  deployTokenManager: encodeInterchainTokenServiceDeployTokenManagerArgs,
  execute: encodeInterchainTokenServiceExecuteArgs,
  expressExecute: encodeInterchainTokenServiceExpressExecuteArgs,
  flowInAmount: encodeInterchainTokenServiceFlowInAmountArgs,
  flowLimit: encodeInterchainTokenServiceFlowLimitArgs,
  flowOutAmount: encodeInterchainTokenServiceFlowOutAmountArgs,
  getExpressExecutor: encodeInterchainTokenServiceGetExpressExecutorArgs,
  getExpressExecutorWithToken:
    encodeInterchainTokenServiceGetExpressExecutorWithTokenArgs,
  hasRole: encodeInterchainTokenServiceHasRoleArgs,
  interchainTokenAddress:
    encodeInterchainTokenServiceInterchainTokenAddressArgs,
  interchainTokenId: encodeInterchainTokenServiceInterchainTokenIdArgs,
  interchainTransfer: encodeInterchainTokenServiceInterchainTransferArgs,
  isOperator: encodeInterchainTokenServiceIsOperatorArgs,
  isTrustedAddress: encodeInterchainTokenServiceIsTrustedAddressArgs,
  multicall: encodeInterchainTokenServiceMulticallArgs,
  proposeOperatorship: encodeInterchainTokenServiceProposeOperatorshipArgs,
  proposeOwnership: encodeInterchainTokenServiceProposeOwnershipArgs,
  removeTrustedAddress: encodeInterchainTokenServiceRemoveTrustedAddressArgs,
  setFlowLimits: encodeInterchainTokenServiceSetFlowLimitsArgs,
  setPauseStatus: encodeInterchainTokenServiceSetPauseStatusArgs,
  setTrustedAddress: encodeInterchainTokenServiceSetTrustedAddressArgs,
  setup: encodeInterchainTokenServiceSetupArgs,
  tokenManagerAddress: encodeInterchainTokenServiceTokenManagerAddressArgs,
  tokenManagerImplementation:
    encodeInterchainTokenServiceTokenManagerImplementationArgs,
  transferOperatorship: encodeInterchainTokenServiceTransferOperatorshipArgs,
  transferOwnership: encodeInterchainTokenServiceTransferOwnershipArgs,
  transmitInterchainTransfer:
    encodeInterchainTokenServiceTransmitInterchainTransferArgs,
  trustedAddress: encodeInterchainTokenServiceTrustedAddressArgs,
  trustedAddressHash: encodeInterchainTokenServiceTrustedAddressHashArgs,
  upgrade: encodeInterchainTokenServiceUpgradeArgs,
  validTokenAddress: encodeInterchainTokenServiceValidTokenAddressArgs,
  validTokenManagerAddress:
    encodeInterchainTokenServiceValidTokenManagerAddressArgs,
};
