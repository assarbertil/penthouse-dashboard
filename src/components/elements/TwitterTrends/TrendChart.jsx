import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TrendChart({ id, data, labelNames }) {
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

  const [options] = useState({
    labels: labelNames,
    chart: {
      id: id,
      background: "transparent",
      foreColor: "#f5f5f5",
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "Inter",
      selection: { enabled: false },
      animations: {
        enabled: true,
        speed: 4000,
      },
    },
    legend: {
      show: true,
      floating: true,
      fontSize: "12px",
      position: "left",
      offsetX: -36,
      offsetY: 0,
      labels: {
        colors: "#A1A1AA",
        useSeriesColors: false,
      },
      markers: { width: 0, height: 0 },
      formatter: (seriesName, opts) => (opts.seriesIndex < 5 ? seriesName : ""),
      itemMargin: { vertical: 0 },
    },
    fill: {
      colors: ["#0C4A6E"],
      opacity: 0.5,
      type: "solid",
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 270,
        hollow: { margin: 5, size: "10%", background: "transparent" },
        track: {
          show: true,
          background: "#27272A",
          strokeWidth: "25%",
          opacity: 1,
          margin: 2,
        },
        dataLabels: { name: { show: false }, value: { show: false } },
      },
    },
  });

  return (
    <motion.div
      animate="visible"
      initial="hidden"
      variants={variants}
      transition={transition}
    >
      {labelNames && typeof window !== "undefined" && (
        <Chart
          options={options}
          series={data}
          type="radialBar"
          width="100%"
          height="300px"
        />
      )}
    </motion.div>
  );
}
