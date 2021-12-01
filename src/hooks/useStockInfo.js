import useSWR from "swr";

// Custom fetcher function to handle Alpha Vantage rate limits
export const stockInfoFetcher = async resource => {
  const res = await fetch(resource).then(res => res.json());

  if ((res["Note"] || res["Information"]) !== undefined) {
    throw new Error("Rate limit exceeded (stock data)");
  }

  return res;
};

// Main hook
export default function useStockInfo() {
  const stockAPIKey = process.env.NEXT_PUBLIC_STOCK_API_KEY;

  const { data, error } = useSWR(
    `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ETH&market=USD&apikey=${stockAPIKey}`,
    stockInfoFetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
