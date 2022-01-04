import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import useStockInfo from "@/hooks/fetching/useStockInfo";

export default function StockPriceSmallCharts() {
  const { data } = useStockInfo();

  const [open, setOpen] = useState([]);
  const [high, setHigh] = useState([]);
  const [low, setLow] = useState([]);
  const [close, setClose] = useState([]);
  const [volume, setVolume] = useState([]);
  const [renderChart, setRenderChart] = useState(false);
  const [options] = useState({
    chart: {
      background: "transparent",
      foreColor: "#f5f5f5",
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "Inter",
      selection: { enabled: false },
      animations: { enabled: true, speed: 2000 },
      sparkline: { enabled: true },
    },
    stroke: {
      show: true,
      curve: "straight",
      lineCap: "butt",
      colors: "#0C4A6E",
      width: 2,
      dashArray: 0,
    },

    dataLabels: { enabled: false },
    fill: { colors: "#0C4A6E" },
    tooltip: { enabled: false },
    xaxis: {
      labels: { show: false },
      tooltip: { enabled: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: { show: false },
      tooltip: { enabled: false },
    },
    grid: { show: false },
  });

  useEffect(() => {
    if (data?.["Meta Data"]) {
      const dataObject = data["Time Series (Digital Currency Daily)"];

      const formattedObject = {
        open: [],
        high: [],
        low: [],
        close: [],
        volume: [],
      };

      let keys = Object.keys(dataObject);
      for (let i = 0; i < keys.length; i++) {
        if (i >= 16) break;

        let key = keys[i];
        let obj = dataObject[key];

        formattedObject.open.unshift(obj["1a. open (USD)"]);
        formattedObject.high.unshift(obj["2a. high (USD)"]);
        formattedObject.low.unshift(obj["3a. low (USD)"]);
        formattedObject.close.unshift(obj["4a. close (USD)"]);
        formattedObject.volume.unshift(obj["5. volume"]);
      }

      setOpen([{ name: "open", data: formattedObject.open }]);
      setHigh([{ name: "high", data: formattedObject.high }]);
      setLow([{ name: "low", data: formattedObject.low }]);
      setClose([{ name: "close", data: formattedObject.close }]);
      setVolume([{ name: "volume", data: formattedObject.volume }]);

      console.log(formattedObject);
      setRenderChart(true);
    }
  }, [data]);

  return (
    <div className="col-span-5 row-span-1 pl-4 text-xs text-gray-500 uppercase">
      <div className="flex items-center w-full justify-evenly">
        <h1>Open</h1>
        {renderChart && typeof window !== "undefined" && (
          <Chart options={options} series={open} width="72px" height="24px" />
        )}
        <h1>High</h1>
        {renderChart && (
          <Chart options={options} series={high} width="72px" height="24px" />
        )}
        <h1>Low</h1>
        {renderChart && (
          <Chart options={options} series={low} width="72px" height="24px" />
        )}
        <h1>Close</h1>
        {renderChart && (
          <Chart options={options} series={close} width="72px" height="24px" />
        )}
        <h1>Volume</h1>
        {renderChart && (
          <Chart options={options} series={volume} width="72px" height="24px" />
        )}
      </div>
    </div>
  );
}
