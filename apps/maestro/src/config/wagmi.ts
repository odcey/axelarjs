import { Maybe } from "@axelarjs/utils";
import { QueryClient } from "@tanstack/react-query";
import { EthereumClient, w3mConnectors } from "@web3modal/ethereum";
import { configureChains, createClient } from "wagmi";
import {
  arbitrum,
  arbitrumGoerli,
  aurora,
  auroraTestnet,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  celo,
  celoAlfajores,
  fantom,
  fantomTestnet,
  goerli,
  mainnet,
  moonbaseAlpha,
  moonbeam,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import { logger } from "~/lib/logger";

export const WALLECTCONNECT_PROJECT_ID = String(
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID
);

export const NETWORK_ENV = String(process.env.NEXT_PUBLIC_NETWORK_ENV) as
  | "mainnet"
  | "testnet";

export const CHAIN_CONFIGS = [
  { ...mainnet, networkNameOnAxelar: "ethereum", environment: "mainnet" },
  { ...goerli, networkNameOnAxelar: "ethereum-2", environment: "testnet" },
  { ...moonbeam, networkNameOnAxelar: "moonbeam", environment: "mainnet" },
  { ...moonbaseAlpha, networkNameOnAxelar: "moonbeam", environment: "testnet" },
  { ...fantom, networkNameOnAxelar: "fantom", environment: "mainnet" },
  { ...fantomTestnet, networkNameOnAxelar: "fantom", environment: "testnet" },
  { ...avalanche, networkNameOnAxelar: "avalanche", environment: "mainnet" },
  {
    ...avalancheFuji,
    networkNameOnAxelar: "avalanche",
    environment: "testnet",
  },
  { ...polygon, networkNameOnAxelar: "polygon", environment: "mainnet" },
  { ...polygonMumbai, networkNameOnAxelar: "polygon", environment: "testnet" },
  { ...bsc, networkNameOnAxelar: "binance", environment: "mainnet" },
  { ...bscTestnet, networkNameOnAxelar: "binance", environment: "testnet" },
  { ...arbitrum, networkNameOnAxelar: "arbitrum", environment: "mainnet" },
  {
    ...arbitrumGoerli,
    networkNameOnAxelar: "arbitrum",
    environment: "testnet",
  },
  { ...celo, networkNameOnAxelar: "celo", environment: "mainnet" },
  { ...celoAlfajores, networkNameOnAxelar: "celo", environment: "testnet" },
  { ...aurora, networkNameOnAxelar: "aurora", environment: "mainnet" },
  { ...auroraTestnet, networkNameOnAxelar: "aurora", environment: "testnet" },
  { ...optimism, networkNameOnAxelar: "optimism", environment: "mainnet" },
  {
    ...optimismGoerli,
    networkNameOnAxelar: "optimism",
    environment: "testnet",
  },
  {
    id: 2222,
    name: "Kava EVM",
    network: "kava",
    networkNameOnAxelar: "kava",
    environment: "mainnet",
    nativeCurrency: {
      name: "KAVA",
      symbol: "KAVA",
      decimals: 18,
    },
    blockExplorers: {
      default: {
        name: "Kava Explorer",
        url: "https://explorer.kava.io/",
      },
    },
    rpcUrls: {
      default: { http: ["https://evm.kava.io"] },
      public: { http: ["https://evm.kava.io"] },
    },
    testnet: false,
  },
  {
    id: 2221,
    name: "Kava EVM Testnet",
    network: "kava",
    networkNameOnAxelar: "kava",
    environment: "testnet",
    nativeCurrency: {
      name: "KAVA",
      symbol: "KAVA",
      decimals: 18,
    },
    blockExplorers: {
      default: {
        name: "Kava EVM Explorer",
        url: "https://explorer.evm-alpha.kava.io/",
      },
    },
    rpcUrls: {
      default: { http: ["https://evm.testnet.kava.io"] },
      public: { http: ["https://evm.testnet.kava.io"] },
    },
    testnet: true,
  },
].filter((chain) => chain.environment === NETWORK_ENV);

const { webSocketProvider, provider } = configureChains(CHAIN_CONFIGS, [
  publicProvider(),
]);

export const queryClient = new QueryClient();

export const wagmiClient = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: w3mConnectors({
    chains: CHAIN_CONFIGS,
    projectId: WALLECTCONNECT_PROJECT_ID,
    version: 1,
  }),
  logger: Maybe.of(logger.warn).mapOrUndefined((warn) => ({ warn })),
  queryClient,
});

export const ethereumClient = new EthereumClient(wagmiClient, CHAIN_CONFIGS);
