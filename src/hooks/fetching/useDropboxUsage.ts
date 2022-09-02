import useSWR from "swr"

interface DropboxUsageResponse {
  allocation: {
    ".tag": "individual"
    allocated: number
  }
  used: number
}

export const useDropboxUsage = () => {
  const { data, error } = useSWR<DropboxUsageResponse>("/api/fetchDropboxUsage")

  return {
    dropboxUsage: data,
    error,
    isLoading: !error && !data,
  }
}
