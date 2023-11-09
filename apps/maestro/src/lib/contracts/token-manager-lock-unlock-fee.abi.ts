/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/token-manager/TokenManagerLockUnlockFee.sol/TokenManagerLockUnlockFee.json
 *
 * DO NOT EDIT MANUALLY
 */

export default {
  contractName: "TokenManagerLockUnlockFee",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "interchainTokenService_",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "flowLimiter",
          type: "address",
        },
      ],
      name: "AlreadyFlowLimiter",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "limit",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "flowAmount",
          type: "uint256",
        },
      ],
      name: "FlowLimitExceeded",
      type: "error",
    },
    {
      inputs: [],
      name: "GiveTokenFailed",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "bytesAddress",
          type: "bytes",
        },
      ],
      name: "InvalidBytesLength",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "fromAccount",
          type: "address",
        },
        {
          internalType: "address",
          name: "toAccount",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "accountRoles",
          type: "uint256",
        },
      ],
      name: "InvalidProposedRoles",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "accountRoles",
          type: "uint256",
        },
      ],
      name: "MissingAllRoles",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "accountRoles",
          type: "uint256",
        },
      ],
      name: "MissingAnyOfRoles",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint8",
          name: "role",
          type: "uint8",
        },
      ],
      name: "MissingRole",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "flowLimiter",
          type: "address",
        },
      ],
      name: "NotFlowLimiter",
      type: "error",
    },
    {
      inputs: [],
      name: "NotProxy",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "caller",
          type: "address",
        },
      ],
      name: "NotService",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "caller",
          type: "address",
        },
      ],
      name: "NotToken",
      type: "error",
    },
    {
      inputs: [],
      name: "ReentrantCall",
      type: "error",
    },
    {
      inputs: [],
      name: "TakeTokenFailed",
      type: "error",
    },
    {
      inputs: [],
      name: "TokenLinkerZeroAddress",
      type: "error",
    },
    {
      inputs: [],
      name: "TokenTransferFailed",
      type: "error",
    },
    {
      inputs: [],
      name: "ZeroAddress",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "flowLimit_",
          type: "uint256",
        },
      ],
      name: "FlowLimitSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "accountRoles",
          type: "uint256",
        },
      ],
      name: "RolesAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "fromAccount",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "toAccount",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "accountRoles",
          type: "uint256",
        },
      ],
      name: "RolesProposed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "accountRoles",
          type: "uint256",
        },
      ],
      name: "RolesRemoved",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "fromOperator",
          type: "address",
        },
      ],
      name: "acceptOperatorship",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "flowLimiter",
          type: "address",
        },
      ],
      name: "addFlowLimiter",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "destinationChain",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "destinationAddress",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "callContractWithInterchainToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "contractId",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "flowInAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "flowInAmount_",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "flowLimit",
      outputs: [
        {
          internalType: "uint256",
          name: "flowLimit_",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "flowOutAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "flowOutAmount_",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "destinationAddress",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "giveToken",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint8",
          name: "role",
          type: "uint8",
        },
      ],
      name: "hasRole",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "implementationType",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "interchainTokenId",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "interchainTokenService",
      outputs: [
        {
          internalType: "contract IInterchainTokenService",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "destinationChain",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "destinationAddress",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "metadata",
          type: "bytes",
        },
      ],
      name: "interchainTransfer",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "isOperator",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "operator_",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "tokenAddress_",
          type: "address",
        },
      ],
      name: "params",
      outputs: [
        {
          internalType: "bytes",
          name: "params_",
          type: "bytes",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "proposeOperatorship",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "flowLimiter",
          type: "address",
        },
      ],
      name: "removeFlowLimiter",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "flowLimit_",
          type: "uint256",
        },
      ],
      name: "setFlowLimit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "params",
          type: "bytes",
        },
      ],
      name: "setup",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sourceAddress",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "takeToken",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "tokenAddress",
      outputs: [
        {
          internalType: "address",
          name: "tokenAddress_",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "transferOperatorship",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "string",
          name: "destinationChain",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "destinationAddress",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "metadata",
          type: "bytes",
        },
      ],
      name: "transmitInterchainTransfer",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ],
} as const;
