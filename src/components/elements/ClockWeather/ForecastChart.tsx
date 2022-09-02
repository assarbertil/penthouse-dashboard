import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })
import { useWeather } from "@/hooks/fetching/useWeather"
import { forecastChartOptions } from "./forecastChartOptions"
import { forecastChartAnimation } from "./animations"
import { ChartSeries } from "@/types/ChartSeries"

export const ForecastChart = () => {
  const { weatherData } = useWeather()

  const [series, setSeries] = useState<ChartSeries>([])
  const [renderChart, setRenderChart] = useState(false)

  useEffect(() => {
    setSeries([
      {
        name: "temperature",
        data: weatherData
          ? weatherData.hourly.map((hour) => hour.temp)
          : [...Array(48).keys()],
      },
    ])

    const renderDelay = setTimeout(() => setRenderChart(true), 500)

    return () => clearTimeout(renderDelay)
  }, [weatherData])

  return (
    <div className="flex-grow">
      {renderChart && (
        <motion.div
          className="h-full origin-bottom"
          variants={forecastChartAnimation}
          initial="hidden"
          animate="show"
        >
          <Chart
            options={forecastChartOptions}
            series={series}
            type="bar"
            width="100%"
            height="100%"
          />
        </motion.div>
      )}
    </div>
  )
}
