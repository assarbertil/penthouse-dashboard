import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })
import { useStockInfo } from "@/hooks/fetching/useStockInfo"
import { smallChartsOptions } from "./chartOptions"
import { motion } from "framer-motion"
import { gridItem } from "./animations"
import { ChartSeries } from "types/ChartSeries"

export const StockPriceSmallCharts = () => {
  const { stockInfo } = useStockInfo()

  const [open, setOpen] = useState<ChartSeries>([])
  const [high, setHigh] = useState<ChartSeries>([])
  const [low, setLow] = useState<ChartSeries>([])
  const [close, setClose] = useState<ChartSeries>([])
  const [volume, setVolume] = useState<ChartSeries>([])
  const [renderChart, setRenderChart] = useState(false)

  useEffect(() => {
    if (stockInfo) {
      const open = stockInfo.timeSeries.map((date) => ({ open: date.open }))
      const high = stockInfo.timeSeries.map((date) => ({ open: date.high }))
      const low = stockInfo.timeSeries.map((date) => ({ open: date.low }))
      const close = stockInfo.timeSeries.map((date) => ({ open: date.close }))
      const volume = stockInfo.timeSeries.map((date) => ({ open: date.volume }))

      setOpen([{ name: "open", data: open }])
      setHigh([{ name: "high", data: high }])
      setLow([{ name: "low", data: low }])
      setClose([{ name: "close", data: close }])
      setVolume([{ name: "volume", data: volume }])

      setRenderChart(true)
    }
  }, [stockInfo])

  return (
    <motion.div
      variants={gridItem}
      className="col-span-5 row-span-1 pl-4 text-xs text-gray-500 uppercase"
    >
      <div className="flex items-center w-full h-full border border-gray-700 justify-evenly">
        <h1>Open</h1>
        {renderChart && typeof window !== "undefined" && (
          <Chart
            options={smallChartsOptions}
            series={open}
            width="72px"
            height="24px"
          />
        )}

        <h1>High</h1>
        {renderChart && (
          <Chart
            options={smallChartsOptions}
            series={high}
            width="72px"
            height="24px"
          />
        )}

        <h1>Low</h1>
        {renderChart && (
          <Chart
            options={smallChartsOptions}
            series={low}
            width="72px"
            height="24px"
          />
        )}

        <h1>Close</h1>
        {renderChart && (
          <Chart
            options={smallChartsOptions}
            series={close}
            width="72px"
            height="24px"
          />
        )}

        <h1>Volume</h1>
        {renderChart && (
          <Chart
            options={smallChartsOptions}
            series={volume}
            width="72px"
            height="24px"
          />
        )}
      </div>
    </motion.div>
  )
}
