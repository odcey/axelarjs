/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/ITokenManagerLiquidityPool.sol/ITokenManagerLiquidityPool.json
 *
 * DO NOT EDIT MANUALLY
 */

import { Chain } from "viem";

import { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./ITokenManagerLiquidityPool.abi";
import { createITokenManagerLiquidityPoolReadClient } from "./ITokenManagerLiquidityPool.args";

export * from "./ITokenManagerLiquidityPool.args";

const createReadClient = createITokenManagerLiquidityPoolReadClient;

export const ITOKEN_MANAGER_LIQUIDITY_POOL_ABI = ABI_FILE.abi;

export class ITokenManagerLiquidityPoolClient extends PublicContractClient<
  typeof ABI_FILE.abi
> {
  static ABI = ABI_FILE.abi;
  static contractName = ABI_FILE.contractName;

  public readonly reads: ReturnType<typeof createReadClient>;

  constructor(options: { chain: Chain; address: `0x${string}` }) {
    super({
      abi: ITOKEN_MANAGER_LIQUIDITY_POOL_ABI,
      address: options.address,
      chain: options.chain,
    });

    this.reads = createReadClient(this);
  }
}
