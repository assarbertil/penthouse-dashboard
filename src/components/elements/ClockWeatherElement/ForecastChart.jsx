import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import useWeater from "../../../hooks/useWeather";

export default function ForecastElement() {
  const { data } = useWeater();
  const [series, setSeries] = useState([]);
  const [renderChart, setRenderChart] = useState(false);
  const [options] = useState({
    chart: {
      id: "fChart",
      background: "transparent",
      foreColor: "#f5f5f5",
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "Inter",
      selection: { enabled: false },
      animations: {
        enabled: true,
        speed: 2000,
      },
    },
    dataLabels: { enabled: false },
    fill: { colors: "#0C4A6E" },
    tooltip: { enabled: false },
    xaxis: {
      type: "numeric",
      labels: { show: false },
      tickAmount: "dataPoints",
      tooltip: { enabled: false },
      axisBorder: {
        show: true,
        color: "#A3A3A3",
        height: 1,
        width: "100%",
      },
      axisTicks: {
        show: true,
        color: "#A3A3A3",
        height: 6,
      },
    },
    yaxis: {
      labels: { show: true },
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: { show: false },
      tooltip: { enabled: false },
    },
    grid: { show: false },
  });

  useEffect(() => {
    if (data?.hourly) {
      const hourlyTemperature = data.hourly.map(a => a.temp);

      setSeries([
        {
          name: "temperature",
          data: hourlyTemperature,
        },
      ]);
    }

    setRenderChart(true);
  }, [data]);

  return (
    <div>
      {renderChart && (
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
}
