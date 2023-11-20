/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IBaseTokenManager.sol/IBaseTokenManager.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import type { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./IBaseTokenManager.abi";

export type IBaseTokenManagerGetTokenAddressFromParamsArgs = {
  params: `0x${string}`;
};

/**
 * Factory function for IBaseTokenManager.getTokenAddressFromParams function args
 */
export const encodeIBaseTokenManagerGetTokenAddressFromParamsArgs = ({
  params,
}: IBaseTokenManagerGetTokenAddressFromParamsArgs) => [params] as const;

/**
 * Encoder function for IBaseTokenManager.getTokenAddressFromParams function data
 */
export const encodeIBaseTokenManagerGetTokenAddressFromParamsData = ({
  params,
}: IBaseTokenManagerGetTokenAddressFromParamsArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "getTokenAddressFromParams",
    abi: ABI_FILE.abi,
    args: [params],
  });

export const IBASE_TOKEN_MANAGER_ENCODERS = {
  getTokenAddressFromParams: {
    args: encodeIBaseTokenManagerGetTokenAddressFromParamsArgs,
    data: encodeIBaseTokenManagerGetTokenAddressFromParamsData,
  },
};

export function createIBaseTokenManagerReadClient(
  publicClient: PublicContractClient<typeof ABI_FILE.abi>
) {
  return {
    getTokenAddressFromParams(
      getTokenAddressFromParamsArgs: IBaseTokenManagerGetTokenAddressFromParamsArgs
    ) {
      const encoder = IBASE_TOKEN_MANAGER_ENCODERS["getTokenAddressFromParams"];
      const encodedArgs = encoder.args(getTokenAddressFromParamsArgs);

      return publicClient.read("getTokenAddressFromParams", {
        args: encodedArgs,
      });
    },
  };
}
