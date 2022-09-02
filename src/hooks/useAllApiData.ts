import { useEffect, useMemo } from "react"
import { useTwitterTrends } from "@/hooks/fetching/useTwitterTrends"
import { useStockPrice } from "@/hooks/fetching/useStockPrice"
import { useStockInfo } from "@/hooks/fetching/useStockInfo"
import { useDropboxUsage } from "@/hooks/fetching/useDropboxUsage"
import { useWeather } from "@/hooks/fetching/useWeather"
import { useNews } from "@/hooks/fetching/useNews"
import { AxiosError } from "axios"

interface Data {
  stockPrice?: any
  stockInfo?: any
  twitterTrends?: any
  dropboxUsage?: any
  weatherData?: any
  news?: any
}

interface Errors {
  stockPriceError?: AxiosError
  stockInfoError?: AxiosError
  twitterError?: AxiosError
  dropboxError?: AxiosError
  weatherError?: AxiosError
  newsError?: AxiosError
}

export const useAllApiData = () => {
  const { stockPrice, error: stockPriceError } = useStockPrice()
  const { stockInfo, error: stockInfoError } = useStockInfo()
  const { twitterTrends, error: twitterError } = useTwitterTrends()
  const { dropboxUsage, error: dropboxError } = useDropboxUsage()
  const { weatherData, error: weatherError } = useWeather()
  const { news, error: newsError } = useNews()

  // The variable containing the data
  const allData = useMemo<Data>(
    () => ({
      stockPrice: stockPrice ?? null,
      stockInfo: stockInfo ?? null,
      twitterTrends: twitterTrends ?? null,
      dropboxUsage: dropboxUsage ?? null,
      weatherData: weatherData ?? null,
      news: news ?? null,
    }),
    [stockPrice, stockInfo, twitterTrends, dropboxUsage, weatherData, news]
  )

  // The variable containing the errors
  const allErrors = useMemo<Errors>(
    () => ({
      stockPriceError: stockPriceError ?? null,
      stockInfoError: stockInfoError ?? null,
      twitterError: twitterError ?? null,
      dropboxError: dropboxError ?? null,
      weatherError: weatherError ?? null,
      newsError: newsError ?? null,
    }),
    [
      stockPriceError,
      stockInfoError,
      twitterError,
      dropboxError,
      weatherError,
      newsError,
    ]
  )

  useEffect(() => {
    const hasAllData = Object.values(allData).every(
      (data) => data !== undefined
    )

    if (hasAllData) {
      console.log("All data arrived", allData)
    }
  }, [allData])

  return {
    data: allData,
    errors: allErrors,
  }
}
