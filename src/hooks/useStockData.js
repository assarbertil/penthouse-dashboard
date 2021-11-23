import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

export default function useStockData() {
  const stockAPIKey = "process.env.REACT_APP_STOCK_API_KEY";

  const { data, error } = useSWR(
    `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ETH&market=USD&apikey=${stockAPIKey}`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
