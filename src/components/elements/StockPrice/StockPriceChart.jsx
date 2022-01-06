import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import useStockInfo from "@/hooks/fetching/useStockInfo";
import { stockPriceChartOptions } from "./chartOptions";
import { motion } from "framer-motion";
import { gridItem } from "./animations";

export default function StockPriceChart() {
  const { data } = useStockInfo();

  const [series, setSeries] = useState([]);
  const [renderChart, setRenderChart] = useState(false);
  const [options] = useState(stockPriceChartOptions);

  useEffect(() => {
    if (data) {
      const priceArray = data["Time Series (Digital Currency Daily)"];
      const priceArrayKeys = Object.keys(priceArray).slice(0, 90); // Get keys for last 90 days

      const output = priceArrayKeys
        .map((item, index) => {
          const obj = priceArray[item];
          return {
            x: item,
            y: [
              obj["1a. open (USD)"],
              obj["2a. high (USD)"],
              obj["3a. low (USD)"],
              obj["4a. close (USD)"],
            ],
          };
        })
        .reverse();

      console.log("new output", output);

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
      ]);

      setRenderChart(true);
    }
  }, [data]);

  return (
    <motion.div variants={gridItem} className="col-span-5 row-span-3">
      {renderChart && (
        <Chart
          options={options}
          series={series}
          type="candlestick"
          width="100%"
          height="100%"
        />
      )}
    </motion.div>
  );
}
