import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import useWeater from "@/hooks/fetching/useWeather";
import { forecastChartOptions } from "./chartOptions";
import { forecastChartAnimation } from "./animations";

export default function ForecastChart() {
  const { data } = useWeater();

  const [series, setSeries] = useState([]);
  const [renderChart, setRenderChart] = useState(false);
  const [options] = useState(forecastChartOptions);

  useEffect(() => {
    setSeries([
      {
        name: "temperature",
        data: data ? data.hourly.map(a => a.temp) : [...Array(48).keys()],
      },
    ]);

    const renderDelay = setTimeout(() => setRenderChart(true), 1500);

    return () => clearTimeout(renderDelay);
  }, [data]);

  return (
    <div className="flex-grow">
      {renderChart && (
        <motion.div
          className="h-full"
          variants={forecastChartAnimation}
          initial="hidden"
          animate="show"
        >
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height="100%"
          />
        </motion.div>
      )}
    </div>
  );
}
