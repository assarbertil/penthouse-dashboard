import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

export default function useDropboxUsage() {
  const { data, error } = useSWR(
    "http://localhost:8888/.netlify/functions/fetchDropboxUsage",
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
