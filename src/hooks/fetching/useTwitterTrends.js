import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export default function useTwitterTrends() {
  const { data, error } = useSWR("/api/fetchTwitterTrends", fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
