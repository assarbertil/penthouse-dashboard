import useWeater from "@/hooks/fetching/useWeather";
import { motion } from "framer-motion";

import { weatherContainer, weatherItem, dividerAnimation } from "./animations";

const convertUTCdate = unix_timestamp => {
  const date = new Date(unix_timestamp * 1000);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const Divider = () => (
  <motion.div
    variants={dividerAnimation}
    className="w-px min-h-full border-t-4 border-b-4 border-gray-400"
  />
);

const Cell = ({ title = "title", value = "value", delay = 0 }) => (
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
);

export default function CurrentWeather() {
  const { data } = useWeater();

  return (
    <div className="h-14">
      <motion.div
        className="flex justify-between h-full text-xs uppercase border-t border-b border-gray-400 will-change-transform"
        variants={weatherContainer}
        initial="hidden"
        animate="show"
      >
        <Cell
          title="Weather"
          value={data?.current.weather[0].main}
          delay={0.6}
        />
        <Cell
          title="Temperature"
          value={Math.round(data?.current.temp * 10) / 10 + "°C"}
          delay={0.8}
        />
        <Cell
          title="Daily max"
          value={Math.round(data?.daily[0].temp.max * 10) / 10 + "°C"}
          delay={1}
        />
        <Cell
          title="Daily min"
          value={Math.round(data?.daily[0].temp.min * 10) / 10 + "°C"}
          delay={1.2}
        />
        <Cell
          title="Sunrise"
          value={convertUTCdate(data?.current.sunrise)}
          delay={1.4}
        />
        <Cell
          title="Sunset"
          value={convertUTCdate(data?.current.sunset)}
          delay={1.6}
        />
        <Cell title="UV-Index" value={data?.current.uvi} delay={1.8} />
        <Cell title="Clouds" value={data?.current.clouds + " %"} delay={2} />
        <Divider />
      </motion.div>
    </div>
  );
}
