import axios from "axios"
import { useMemo } from "react"
import useSWR from "swr"

const stockAPIKey = process.env.NEXT_PUBLIC_STOCK_API_KEY

interface StockInfoResponse {
  "Meta Data": {
    "1. Information": string
    "2. Digital Currency Code": string
    "3. Digital Currency Name": string
    "4. Market Code": string
    "5. Market Name": string
    "6. Last Refreshed": string
    "7. Time Zone": string
  }
  "Time Series (Digital Currency Daily)": {
    [date: string]: {
      "1a. open (USD)": string
      "1b. open (USD)": string
      "2a. high (USD)": string
      "2b. high (USD)": string
      "3a. low (USD)": string
      "3b. low (USD)": string
      "4a. close (USD)": string
      "4b. close (USD)": string
      "5. volume": string
      "6. market cap (USD)": string
    }
  }
}

// Custom fetcher function to handle Alpha Vantage rate limits
export const stockInfoFetcher = async (url: string) => {
  const { data } = await axios.get(url)

  if ((data["Note"] || data["Information"]) !== undefined) {
    throw new Error("Rate limit exceeded (stock data)")
  }

  return data
}

// Main hook
export const useStockInfo = () => {
  const { data, error } = useSWR<StockInfoResponse>(
    `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ETH&market=USD&apikey=${stockAPIKey}`,
    stockInfoFetcher
  )

  const formattedStockInfo = useMemo(() => {
    if (!data) return

    const _md = data["Meta Data"]

    const metaData = {
      information: _md["1. Information"],
      digitalCurrencyCode: _md["2. Digital Currency Code"],
      digitalCurrencyName: _md["3. Digital Currency Name"],
      marketCode: _md["4. Market Code"],
      marketName: _md["5. Market Name"],
      lastRefreshed: _md["6. Last Refreshed"],
      timeZone: _md["7. Time Zone"],
    }

    const timeSeries = Object.entries(
      data["Time Series (Digital Currency Daily)"]
    )
      .slice(0, 90)
      .map(([date, stockInfo]) => ({
        date: date,
        open: parseFloat(stockInfo["1a. open (USD)"]),
        high: parseFloat(stockInfo["2a. high (USD)"]),
        low: parseFloat(stockInfo["3a. low (USD)"]),
        close: parseFloat(stockInfo["4a. close (USD)"]),
        volume: parseFloat(stockInfo["5. volume"]),
        marketCap: parseFloat(stockInfo["6. market cap (USD)"]),
      }))

    return {
      metaData,
      timeSeries,
    }
  }, [data])

  return {
    stockInfo: formattedStockInfo,
    error,
    isLoading: !error && !data,
  }
}
