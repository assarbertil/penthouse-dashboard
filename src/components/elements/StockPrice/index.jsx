import { motion } from "framer-motion";

import StockPriceInfoCard from "./StockPriceInfoCard";
import StockPriceChart from "./StockPriceChart";
import StockPriceSmallCharts from "./StockPriceSmallCharts";
import GlobalRefreshTimer from "./GlobalRefreshTimer";

export default function StockPriceElement() {
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
    <>
      <motion.div
        className="grid grid-cols-6 grid-rows-4"
        animate="visible"
        initial="hidden"
        variants={variants}
        transition={transition}>
        <StockPriceInfoCard />
        <StockPriceChart />
        <GlobalRefreshTimer />
        <StockPriceSmallCharts />
      </motion.div>
    </>
  );
}
