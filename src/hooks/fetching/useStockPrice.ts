import axios from "axios"
import { useMemo } from "react"
import useSWR from "swr"

const stockAPIKey = process.env.NEXT_PUBLIC_STOCK_API_KEY

// Custom fetcher function to handle Alpha Vantage rate limits
export const stockPriceFetcher = async (url: string) => {
  const { data } = await axios.get(url)

  if ((data["Note"] || data["Information"]) !== undefined) {
    throw new Error("Error fetching stock price")
  }

  return data
}

// Main hook
export const useStockPrice = () => {
  const { data, error } = useSWR(
    `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey=${stockAPIKey}`,
    stockPriceFetcher
  )

  return {
    stockPrice: data,
    error,
    isLoading: !error && !data,
  }
}
