import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export default function useDropboxUsage() {
  const { data, error } = useSWR("/api/fetchDropboxUsage", fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
