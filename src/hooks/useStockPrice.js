import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

export default function useStockPrice() {
  const stockAPIKey = "process.env.NEXT_PUBLIC_STOCK_API_KEY";

  const { data, error } = useSWR(
    `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey=${stockAPIKey}`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
