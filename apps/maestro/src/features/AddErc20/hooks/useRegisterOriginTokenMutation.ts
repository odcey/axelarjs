import { Logger } from "ethers/lib/utils";
import { useAccount, useMutation, useWalletClient } from "wagmi";

import { useInterchainTokenServiceReads } from "~/lib/contract/hooks/useInterchainTokenService";
import { logger } from "~/lib/logger";

import { DeployAndRegisterTransactionState } from "../AddErc20.state";

export type UseRegisterInterchainTokenInput = {
  tokenAddress: `0x${string}`;
  onFinished?: () => void;
  onStatusUpdate?: (message: DeployAndRegisterTransactionState) => void;
};

export function useRegisterOriginTokenMutation() {
  const signer = useWalletClient();

  const { address } = useAccount();

  const tokenLinker = useInterchainTokenServiceReads({
    address: String(process.env.NEXT_PUBLIC_TOKEN_LINKER_ADDRESS),
    signerOrProvider: signer.data,
  });

  return useMutation(async (input: UseRegisterInterchainTokenInput) => {
    if (!(signer && tokenLinker && address)) {
      return;
    }

    try {
      //register token
      const registerTokenTx = await tokenLinker.registerOriginToken(
        input.tokenAddress
      );

      const txReceipt = await registerTokenTx.wait(1);

      logger.info("tokenLinker.registerOriginToken", {
        txReceipt,
      });

      if (input.onStatusUpdate) {
        input.onStatusUpdate({
          type: "deployed",
          txHash: txReceipt.transactionHash as `0x${string}`,
          tokenAddress: input.tokenAddress,
        });
      }

      if (input.onFinished) {
        input.onFinished();
      }
    } catch (e) {
      if (input.onStatusUpdate) {
        input.onStatusUpdate({ type: "idle" });
      }
      if (e instanceof Error && "code" in e) {
        switch (e.code) {
          case Logger.errors.ACTION_REJECTED:
            throw new Error("User rejected the transaction");
          default:
            throw new Error("Transaction reverted by EVM");
        }
      }

      return;
    }
  });
}
