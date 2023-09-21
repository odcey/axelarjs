/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  getContract,
  GetContractArgs,
  prepareWriteContract,
  PrepareWriteContractConfig,
  readContract,
  ReadContractConfig,
  writeContract,
  WriteContractArgs,
  WriteContractPreparedArgs,
  WriteContractUnpreparedArgs,
} from "wagmi/actions";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenManagerABI = [
  { type: "error", inputs: [], name: "FlowLimitExceeded" },
  { type: "error", inputs: [], name: "GiveTokenFailed" },
  {
    type: "error",
    inputs: [{ name: "bytesAddress", internalType: "bytes", type: "bytes" }],
    name: "InvalidBytesLength",
  },
  { type: "error", inputs: [], name: "NotOperator" },
  { type: "error", inputs: [], name: "NotProxy" },
  { type: "error", inputs: [], name: "NotService" },
  { type: "error", inputs: [], name: "NotToken" },
  { type: "error", inputs: [], name: "TakeTokenFailed" },
  { type: "error", inputs: [], name: "TokenLinkerZeroAddress" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "flowLimit",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "FlowLimitSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "OperatorChanged",
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "destinationChain", internalType: "string", type: "string" },
      { name: "destinationAddress", internalType: "bytes", type: "bytes" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "callContractWithInterchainToken",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getFlowInAmount",
    outputs: [
      { name: "flowInAmount", internalType: "uint256", type: "uint256" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getFlowLimit",
    outputs: [{ name: "flowLimit", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getFlowOutAmount",
    outputs: [
      { name: "flowOutAmount", internalType: "uint256", type: "uint256" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "destinationAddress", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "giveToken",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [],
    name: "implementationType",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "interchainTokenService",
    outputs: [
      {
        name: "",
        internalType: "contract IInterchainTokenService",
        type: "address",
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "operator",
    outputs: [{ name: "operator_", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "destinationChain", internalType: "string", type: "string" },
      { name: "destinationAddress", internalType: "bytes", type: "bytes" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "metadata", internalType: "bytes", type: "bytes" },
    ],
    name: "sendToken",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "flowLimit", internalType: "uint256", type: "uint256" }],
    name: "setFlowLimit",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "operator_", internalType: "address", type: "address" }],
    name: "setOperator",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "params", internalType: "bytes", type: "bytes" }],
    name: "setup",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "tokenAddress",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "destinationChain", internalType: "string", type: "string" },
      { name: "destinationAddress", internalType: "bytes", type: "bytes" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "metadata", internalType: "bytes", type: "bytes" },
    ],
    name: "transmitInterchainTransfer",
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Core
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link tokenManagerABI}__.
 */
export function getTokenManager(config: Omit<GetContractArgs, "abi">) {
  return getContract({ abi: tokenManagerABI, ...config });
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tokenManagerABI}__.
 */
export function readTokenManager<
  TAbi extends readonly unknown[] = typeof tokenManagerABI,
  TFunctionName extends string = string
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, "abi">) {
  return readContract({
    abi: tokenManagerABI,
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>);
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tokenManagerABI}__.
 */
export function writeTokenManager<TFunctionName extends string>(
  config:
    | Omit<
        WriteContractPreparedArgs<typeof tokenManagerABI, TFunctionName>,
        "abi"
      >
    | Omit<
        WriteContractUnpreparedArgs<typeof tokenManagerABI, TFunctionName>,
        "abi"
      >
) {
  return writeContract({
    abi: tokenManagerABI,
    ...config,
  } as unknown as WriteContractArgs<typeof tokenManagerABI, TFunctionName>);
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link tokenManagerABI}__.
 */
export function prepareWriteTokenManager<
  TAbi extends readonly unknown[] = typeof tokenManagerABI,
  TFunctionName extends string = string
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, "abi">) {
  return prepareWriteContract({
    abi: tokenManagerABI,
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>);
}
