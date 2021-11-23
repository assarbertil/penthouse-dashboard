import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

export default function useStockPrice() {
  const APIKey = process.env.REACT_APP_NEWS_API_KEY;

  const { data, error } = useSWR(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=7&apiKey=${APIKey}`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
