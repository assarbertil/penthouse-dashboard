import { useWeather } from "@/hooks/fetching/useWeather"
import { motion } from "framer-motion"
import { FC } from "react"
import { convertUTCdate } from "utils/convertUTCDate"

import { weatherContainer, weatherItem, dividerAnimation } from "./animations"

const Divider = () => (
  <motion.div
    variants={dividerAnimation}
    className="w-px min-h-full border-t-4 border-b-4 border-gray-400"
  />
)

interface CellProps {
  title: string
  value: string | number
  delay: number
}

const Cell: FC<CellProps> = ({
  title = "title",
  value = "value",
  delay = 0,
}) => (
  <div className="flex items-center overflow-hidden">
    <Divider />
    <div className="py-2 pl-3">
      <motion.h5
        variants={weatherItem.upper}
        transition={{ duration: 0.75, delay: delay + 0.2 }}
        className="text-gray-500"
      >
        {title}
      </motion.h5>
      <motion.p
        variants={weatherItem.lower}
        transition={{ duration: 0.75, delay: delay + 0.2 }}
      >
        {value}
      </motion.p>
    </div>
  </div>
)

export const CurrentWeather = () => {
  const { weatherData } = useWeather()

  return (
    <div className="h-14">
      {weatherData && (
        <motion.div
          className="flex justify-between h-full text-xs uppercase border-t border-b border-gray-400 will-change-transform"
          variants={weatherContainer}
          initial="hidden"
          animate="show"
        >
          <Cell
            title="Weather"
            value={weatherData?.current.weather[0].main}
            delay={0.6}
          />
          <Cell
            title="Temperature"
            value={Math.round(weatherData.current.temp * 10) / 10 + "°C"}
            delay={0.8}
          />
          <Cell
            title="Daily max"
            value={Math.round(weatherData.daily[0].temp.max * 10) / 10 + "°C"}
            delay={1}
          />
          <Cell
            title="Daily min"
            value={Math.round(weatherData.daily[0].temp.min * 10) / 10 + "°C"}
            delay={1.2}
          />
          <Cell
            title="Sunrise"
            value={convertUTCdate(weatherData.current.sunrise)}
            delay={1.4}
          />
          <Cell
            title="Sunset"
            value={convertUTCdate(weatherData.current.sunset)}
            delay={1.6}
          />
          <Cell title="UV-Index" value={weatherData.current.uvi} delay={1.8} />
          <Cell
            title="Clouds"
            value={weatherData.current.clouds + " %"}
            delay={2}
          />
          <Divider />
        </motion.div>
      )}
    </div>
  )
}
