import { router } from "~/server/trpc";
import { estimateGasFee } from "./estimateGasFee";
import { estimateGasFeesMultipleChains } from "./estimateGasFeeMultipleChains";
import { getChainInfo } from "./getChainInfo";

export const axelarjsSDKRouter = router({
  estimateGasFee,
  estimateGasFeesMultipleChains,
  getChainInfo,
});

export type AxelarjsSDKRouter = typeof axelarjsSDKRouter;
