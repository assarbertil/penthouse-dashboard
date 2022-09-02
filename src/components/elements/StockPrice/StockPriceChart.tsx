import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })
import { useStockInfo } from "@/hooks/fetching/useStockInfo"
import { stockPriceChartOptions } from "./chartOptions"
import { motion } from "framer-motion"
import { gridItem } from "./animations"
import { ChartSeries } from "types/ChartSeries"

export const StockPriceChart = () => {
  const { stockInfo } = useStockInfo()

  const [series, setSeries] = useState<ChartSeries>([])
  const [renderChart, setRenderChart] = useState(false)

  useEffect(() => {
    if (stockInfo) {
      const output = stockInfo.timeSeries
        .map((dateStockInfo) => ({
          x: dateStockInfo.date,
          y: [
            dateStockInfo.open,
            dateStockInfo.high,
            dateStockInfo.low,
            dateStockInfo.close,
          ],
        }))
        .reverse()

      console.log("new output", output)

      /**
       * Finally set state
       */

      setSeries([
        {
          name: "candlestick",
          type: "candlestick",
          data: output,
        },
        {
          name: "area",
          type: "area",
          data: output,
        },
      ])

      setRenderChart(true)
    }
  }, [stockInfo])

  return (
    <motion.div variants={gridItem} className="col-span-5 row-span-3">
      {renderChart && (
        <Chart
          options={stockPriceChartOptions}
          series={series}
          type="candlestick"
          width="100%"
          height="100%"
        />
      )}
    </motion.div>
  )
}
