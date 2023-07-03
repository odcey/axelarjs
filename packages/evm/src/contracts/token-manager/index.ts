import { Chain } from "viem";

import { PublicContractClient } from "../PublicContractClient";
import ABI_FILE from "./token-manager.abi";

export const TOKEN_MANAGER_ABI = ABI_FILE.abi;

export class TokenManagerClient extends PublicContractClient<
  typeof ABI_FILE.abi
> {
  static ABI = ABI_FILE.abi;
  static contractName = ABI_FILE.contractName;

  constructor(options: { chain: Chain; address: `0x${string}` }) {
    super({
      abi: TOKEN_MANAGER_ABI,
      address: options.address,
      chain: options.chain,
    });
  }
}
