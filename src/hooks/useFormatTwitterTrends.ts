import { useState, useEffect } from "react"
import { useTwitterTrends } from "@/hooks/fetching/useTwitterTrends"

export const useFormatTwitterTrends = () => {
  const { twitterTrends } = useTwitterTrends()

  const [globalSeries, setGlobalSeries] = useState([])
  const [globalLabels, setGlobalLabels] = useState([])
  const [showGlobalChart, setShowGlobalChart] = useState(false)

  const [swedenSeries, setSwedenSeries] = useState([])
  const [swedenLabels, setSwedenLabels] = useState([])
  const [showSwedenChart, setShowSwedenChart] = useState(false)

  useEffect(() => {
    if (twitterTrends?.globalResponse[0]?.trends) {
      const globalFormattedArray = twitterTrends?.globalResponse[0].trends
        .map((i) => ({
          name: i.name,
          volume: i.tweet_volume !== null ? i.tweet_volume : 0,
        }))
        .sort((a, b) => b.volume - a.volume)
        .slice(0, 16)

      setGlobalLabels(globalFormattedArray.map((i) => i.name))
      setGlobalSeries(
        globalFormattedArray.map(
          (i) => (i.volume * 100) / globalFormattedArray[0].volume
        )
      )
      setShowGlobalChart(true)
    }

    if (twitterTrends?.swedenResponse[0]?.trends) {
      const swedenFormattedArray = twitterTrends?.swedenResponse[0].trends
        .map((i) => ({
          name: i.name,
          volume: i.tweet_volume !== null ? i.tweet_volume : 0,
        }))
        .sort((a, b) => b.volume - a.volume)
        .slice(0, 16)

      setSwedenLabels(swedenFormattedArray.map((i) => i.name))
      setSwedenSeries(
        swedenFormattedArray.map(
          (i) => (i.volume * 100) / swedenFormattedArray[0].volume
        )
      )
      setShowSwedenChart(true)
    }
  }, [twitterTrends])

  return {
    globalSeries,
    globalLabels,
    showGlobalChart,
    swedenSeries,
    swedenLabels,
    showSwedenChart,
  }
}
