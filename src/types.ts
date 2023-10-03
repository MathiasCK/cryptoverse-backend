export type Coins = Array<Coin>;

export type Coin = {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: {
    name: string;
    type: string;
    url: string;
  }[];
  supply: {
    confirmed: boolean;
    supplyAt: number;
    max: string;
    total: string;
    circulating: string;
  };
  numberOfMarkets: number;
  numberOfExchanges: number;
  _24hVolume: string;
  marketCap: string;
  fullyDilutedMarketCap: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: number;
  sparkline: string[];
  allTimeHigh: {
    price: string;
    timestamp: number;
  };
  coinrankingUrl: string;
  tier: number;
  lowVolume: boolean;
  listedAt: number;
  hasContent: boolean;
  notices: any;
  tags: string[];
};

export type Stats = {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
};
