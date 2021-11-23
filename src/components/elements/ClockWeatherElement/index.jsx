import { motion } from "framer-motion";

import ElementHeader from "../utilities/ElementHeader";
import Clock from "./Clock";
import CurrentWeather from "./CurrentWeather";
import ForecastChart from "./ForecastChart";

export default function ClockWeatherElement() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 1,
    delay: 0.2,
  };

  return (
    <motion.div
      animate="visible"
      initial="hidden"
      variants={variants}
      transition={transition}>
      <ElementHeader
        title={Intl.DateTimeFormat().resolvedOptions().timeZone}
        color="bg-blue-800"
      />
      <Clock />
      <CurrentWeather />
      <ForecastChart />
    </motion.div>
  );
}
