/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/ITokenManagerMintBurn.sol/ITokenManagerMintBurn.json
 *
 * DO NOT EDIT MANUALLY
 */

import { Chain } from "viem";

import { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./ITokenManagerMintBurn.abi";
import { createITokenManagerMintBurnReadClient } from "./ITokenManagerMintBurn.args";

const createReadClient = createITokenManagerMintBurnReadClient;

export * from "./ITokenManagerMintBurn.args";

export const ITOKEN_MANAGER_MINT_BURN_ABI = ABI_FILE.abi;

export class ITokenManagerMintBurnClient extends PublicContractClient<
  typeof ABI_FILE.abi
> {
  static ABI = ABI_FILE.abi;
  static contractName = ABI_FILE.contractName;

  public readonly reads: ReturnType<typeof createReadClient>;

  constructor(options: { chain: Chain; address: `0x${string}` }) {
    super({
      abi: ITOKEN_MANAGER_MINT_BURN_ABI,
      address: options.address,
      chain: options.chain,
    });

    this.reads = createReadClient(this);
  }
}
