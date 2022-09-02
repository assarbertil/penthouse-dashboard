import useSWR from "swr"

interface TwitterTrendsResponse {
  globalResponse: {}
  swedenResponse: {}
}

export const useTwitterTrends = () => {
  const { data, error } = useSWR("/api/fetchTwitterTrends")

  return {
    twitterTrends: data,
    error,
    isLoading: !error && !data,
  }
}
