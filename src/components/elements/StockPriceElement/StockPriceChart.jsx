import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import useStockInfo from "@/hooks/useStockInfo";

export default function StockPriceChart() {
  const { data } = useStockInfo();

  const [series, setSeries] = useState([]);
  const [renderChart, setRenderChart] = useState(false);

  useEffect(() => {
    if (data?.["Meta Data"]) {
      const sddd = data["Time Series (Digital Currency Daily)"];
      let output = [];

      let keys = Object.keys(sddd);
      for (let i = 0; i < keys.length; i++) {
        if (i >= 60) break;

        let key = keys[i];
        let obj = sddd[key];

        let outObj = {
          x: key,
          y: [
            obj["1a. open (USD)"],
            obj["2a. high (USD)"],
            obj["3a. low (USD)"],
            obj["4a. close (USD)"],
          ],
        };
        output.push(outObj);
      }
      output.reverse();

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

  const [options] = useState({
    chart: {
      type: "candlestick",
      background: "transparent",
      foreColor: "#D4D4D4",
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "Inter",
      parentHeightOffset: 0,
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 1500,
        animateGradually: { enabled: true, delay: 3000 },
        dynamicAnimation: { enabled: true, speed: 2000 },
      },
    },
    colors: ["#075985"],
    fill: { opacity: [1, 0.1] },
    legend: { show: false },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },
    yaxis: {
      tickAmount: 7,
      forceNiceScale: true,
      decimalsInFloat: 0,
      floating: false,
      labels: { align: "left", style: { fontSize: "11px" } },
      axisBorder: { show: true, color: "#262626" },
      axisTicks: { show: false },
      crosshairs: { show: false },
      tooltip: { enabled: false },
    },
    grid: {
      borderColor: "#262626",
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } },
      padding: { left: 10 },
    },
    plotOptions: {
      candlestick: {
        colors: { upward: "#075985", downward: "#92400E" },
        wick: { useFillColor: true },
      },
    },
  });

  return (
    <div className="col-span-5 row-span-3 ">
      {renderChart && typeof window !== "undefined" && (
        <Chart
          options={options}
          series={series}
          type="candlestick"
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
}
