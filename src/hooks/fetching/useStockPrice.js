import useSWR from "swr";

// Custom fetcher function to handle Alpha Vantage rate limits
export const stockPriceFetcher = async resource => {
  const res = await fetch(resource).then(res => res.json());

  if ((res["Note"] || res["Information"]) !== undefined) {
    throw new Error("Rate limit exceeded (stock price)");
  }

  return res;
};

// Main hook
export default function useStockPrice() {
  const stockAPIKey = process.env.NEXT_PUBLIC_STOCK_API_KEY;

  const { data, error } = useSWR(
    `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey=${stockAPIKey}`,
    stockPriceFetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
