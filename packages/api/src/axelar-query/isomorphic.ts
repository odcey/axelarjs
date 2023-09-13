import { AXELARSCAN_API_URLS, Environment } from "@axelarjs/core";

import {
  createGMPBrowserClient,
  createGMPNodeClient,
  EstimateGasFeeParams,
  EstimateGasFeeResponse,
  GMPClient,
} from "..";
import {
  ClientOptions,
  IsomorphicHTTPClient,
  type ClientMeta,
} from "../IsomorphicHTTPClient";
import { BigNumberUtils } from "./helpers/BigNumberUtils";

export class AxelarQueryAPIClient extends IsomorphicHTTPClient {
  protected gmpClient: GMPClient;

  public constructor(
    env: Environment,
    options: ClientOptions,
    meta?: ClientMeta
  ) {
    super(options, meta);
    this.gmpClient =
      options.target === "browser"
        ? createGMPBrowserClient({
            prefixUrl: AXELARSCAN_API_URLS[env],
          })
        : createGMPNodeClient({
            prefixUrl: AXELARSCAN_API_URLS[env],
          });
  }

  static init(env: Environment, options: ClientOptions) {
    return new AxelarQueryAPIClient(env, options, {
      name: "AxelarQueryAPI",
      version: "0.0.1",
    });
  }

  /**
   * Calculate estimated gas amount to pay for the gas receiver contract.
   * @param sourceChain Chain ID (as recognized by Axelar) of the source chain
   * @param destinationChain Chain ID (as recognized by Axelar) of the destination chain
   * @param sourceTokenSymbol (Optional) the token symbol on the source chain
   * @param sourceContractAddress (Optional) the address of the contract invoking the GMP call from the source chain
   * @param sourceTokenAddress (Optional) the contract address of the token symbol on the source chain
   * @param destinationContractAddress (Optional) the address of the contract invoking the GMP call from the source chain
   * @param amount (Optional) the amount of assets transferred in terms of symbol, not unit denom, e.g. use 1 for 1 axlUSDC, not 1000000
   * @param amountInUnits (Optional) the amount of assets transferred in terms of unit denom, not symbol, e.g. use 1000000 for 1 axlUSDC, not 1
   * @param minGasPrice (Optional) A minimum value, in wei, for the gas price on the destination chain that is used to override the estimated gas price if it falls below this specified value.
   * @param gasLimit (Optional) An estimated gas amount required to execute `executeWithToken` function. The default value is 1MM which should be sufficient for most transactions.
   * @param gasMultiplier (Optional) A multiplier used to create a buffer above the calculated gas fee, to account for potential slippage throughout tx execution, e.g. 1.1 = 10% buffer
   * @param showDetailedFees (Optional) will return the full breakdown of fee components if specified true
   * @returns
   */
  async estimateGasFee({
    sourceChain,
    destinationChain,
    sourceTokenSymbol,
    sourceContractAddress,
    sourceTokenAddress,
    destinationContractAddress,
    amount,
    amountInUnits,
    minGasPrice = "0",
    gasLimit = 1_000_000n,
    gasMultiplier = 1.0,
    showDetailedFees = false,
  }: EstimateGasFeeParams): Promise<EstimateGasFeeResponse | string> {
    const response = await this.gmpClient.getFees({
      sourceChain,
      destinationChain,
      sourceTokenSymbol,
      sourceContractAddress,
      sourceTokenAddress,
      destinationContractAddress,
      amount,
      amountInUnits,
    });

    const {
      base_fee,
      express_fee_string,
      source_token,
      destination_native_token,
      express_supported,
    } = response;

    if (!response || !base_fee || !source_token) {
      throw new Error(
        "Failed to retrieve fee estimate from API. Please try again later."
      );
    }

    const destGasFeeWei = BigNumberUtils.multiplyToGetWei(
      gasLimit,
      destination_native_token.gas_price,
      destination_native_token.decimals
    );
    const minDestGasFeeWei = BigInt(gasLimit) * BigInt(minGasPrice);

    const srcGasFeeWei = BigNumberUtils.multiplyToGetWei(
      gasLimit,
      source_token.gas_price,
      source_token.decimals
    );

    const executionFee =
      destGasFeeWei > minDestGasFeeWei
        ? srcGasFeeWei
        : (srcGasFeeWei * minDestGasFeeWei) / destGasFeeWei;
    const executionFeeWithMultiplier =
      gasMultiplier > 1
        ? Number(executionFee) * Number(gasMultiplier)
        : executionFee;

    return showDetailedFees
      ? {
          baseFee: base_fee,
          expressFee: express_fee_string,
          executionFee: executionFee.toString(),
          executionFeeWithMultiplier: executionFeeWithMultiplier.toString(),
          gasLimit,
          gasMultiplier,
          minGasPrice: minGasPrice === "0" ? "NA" : minGasPrice,
          apiResponse: JSON.stringify(response),
          isExpressSupported: express_supported,
        }
      : (Number(executionFeeWithMultiplier) + Number(base_fee)).toFixed(0);
  }
}
