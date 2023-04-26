import {ArbitrumLogo, AvalancheLogo, BSCLogo, EthereumLogo, FantomLogo, OptimismLogo, PolygonLogo} from "../icons";

export const chainsData = {
  polygon: {
    chainId: "0x89",
    chainName: "Polygon Mainnet",
    rpcUrls: ["https://polygon-rpc.com"],
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  arbitrum: {
    chainId: "0xa4b1",
    chainName: "Arbitrum One",
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    nativeCurrency: {
      name: "Arbitrum",
      symbol: "ARB",
      decimals: 18,
    },
    blockExplorerUrls: ["https://arbiscan.io/"],
  },
  bsc: {
    chainId: "0x38",
    chainName: "Binance Smart Chain Mainnet",
    rpcUrls: ["https://bsc-dataseed1.binance.org"],
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    blockExplorerUrls: ["https://bscscan.com"],
  },
  avalanche: {
    chainId: "0xa86a",
    chainName: "Avalanche C-Chain",
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    blockExplorerUrls: ["https://snowtrace.io"],
  },
  fantom: {
    chainId: "0xfa",
    chainName: "Fantom Opera",
    rpcUrls: ["https://rpc.ftm.tools"],
    nativeCurrency: {
      name: "FTM",
      symbol: "FTM",
      decimals: 18,
    },
    blockExplorerUrls: ["https://snowtrace.io"],
  },
  optimism: {
    chainId: "0xfa",
    chainName: "Optimism",
    rpcUrls: ["https://mainnet.optimism.io"],
    nativeCurrency: {
      name: "Optimism",
      symbol: "OP",
      decimals: 18,
    },
    blockExplorerUrls: ["https://optimistic.etherscan.io/"],
  },
  ethereum: {
    chainId: '0x1',
    chainName: 'Ethereum',
    rpcUrls: ['https://eth.llamarpc.com'],
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18
    },
    blockExplorerUrls: ['https://etherscan.io/']
  }
};

export const chains = [
  {
    value: "1",
    label: "Ethereum",
    icon: <EthereumLogo />,
  },
  {
    value: "56",
    label: "BCS Mainnet",
    icon: <BSCLogo />,
  },
  {
    value: "137",
    label: "Polygon",
    icon: <PolygonLogo />,
  },
  {
    value: "43114",
    label: "Avalanche",
    icon: <AvalancheLogo />,
  },
  {
    value: "42161",
    label: "Arbitrum",
    icon: <ArbitrumLogo />,
  },
  {
    value: "250",
    label: "Fantom",
    icon: <FantomLogo />,
  },
  {
    value: '10',
    label: 'Optimism',
    icon: <OptimismLogo />,
  }
]
