import { ApexOptions } from "apexcharts"

export const stockPriceChartOptions: ApexOptions = {
  chart: {
    type: "candlestick",
    background: "transparent",
    foreColor: "#D4D4D4",
    toolbar: { show: false },
    zoom: { enabled: false },
    fontFamily: "Inter",
    parentHeightOffset: 0,
    height: "100%",
    animations: {
      enabled: true,
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
    },
  },
  states: {
    hover: { filter: { type: "none" } },
    active: { filter: { type: "none" } },
  },
}

export const smallChartsOptions: ApexOptions = {
  chart: {
    background: "transparent",
    foreColor: "#f5f5f5",
    toolbar: { show: false },
    zoom: { enabled: false },
    fontFamily: "Inter",
    selection: { enabled: false },
    animations: { enabled: true, speed: 2000, easing: "easeout" },
    sparkline: { enabled: true },
  },
  stroke: {
    show: true,
    curve: "straight",
    lineCap: "butt",
    colors: ["#0C4A6E"],
    width: 2,
    dashArray: 0,
  },

  dataLabels: { enabled: false },
  fill: { colors: ["#0C4A6E"] },
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
}
