import { ApexOptions } from "apexcharts"

export const forecastChartOptions: ApexOptions = {
  chart: {
    id: "forecastChart",
    background: "transparent",
    foreColor: "#f5f5f5",
    toolbar: { show: false },
    zoom: { enabled: false },
    fontFamily: "Inter",
    selection: { enabled: false },
    height: "100%",
    parentHeightOffset: 0,
    type: "bar",
    animations: {
      enabled: true,
      speed: 2000,
    },
  },
  dataLabels: { enabled: false },
  fill: { colors: ["#0C4A6E"], opacity: 1 },
  tooltip: { enabled: false },
  legend: { show: false },
  xaxis: {
    type: "numeric",
    labels: { show: false },
    tickAmount: "dataPoints",
    tooltip: { enabled: false },
    axisBorder: { color: "#A3A3A3" },
    axisTicks: { color: "#A3A3A3" },
  },
  yaxis: {
    labels: { formatter: (val) => val + "°" },
    axisBorder: { show: false },
    axisTicks: { show: false },
    crosshairs: { show: false },
    tooltip: { enabled: false },
  },
  grid: {
    show: true,
    borderColor: "#222",
    position: "back",
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: true } },
  },
  states: {
    hover: { filter: { type: "none" } },
    active: { filter: { type: "none" } },
  },
}
