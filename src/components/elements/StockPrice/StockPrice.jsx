import { motion } from "framer-motion";
import StockPriceInfoCard from "./StockPriceInfoCard";
import StockPriceChart from "./StockPriceChart";
import StockPriceSmallCharts from "./StockPriceSmallCharts";
import GlobalRefreshTimer from "./GlobalRefreshTimer";

import { gridContainer, gridItem } from "./animations";

export const StockPrice = () => {
  return (
    <>
      <motion.div
        className="grid h-full grid-cols-6 grid-rows-4"
        variants={gridContainer}
        initial="hidden"
        animate="show"
      >
        <StockPriceInfoCard />
        <StockPriceChart />
        <GlobalRefreshTimer />
        <StockPriceSmallCharts />
      </motion.div>
    </>
  );
};
