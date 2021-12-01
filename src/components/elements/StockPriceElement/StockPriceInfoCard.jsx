import { motion } from "framer-motion";

import useStockPrice from "@/hooks/useStockPrice";

export default function StockPriceInfoCard() {
  const { data } = useStockPrice();

  const variants = {
    hidden: { width: "0%" },
    visible: { width: "100%" },
  };

  const transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 1,
    delay: 0.2,
  };

  return (
    <div className="col-span-1 row-span-3 mt-5">
      <motion.h2
        className="overflow-hidden text-2xl font-medium tracking-wider uppercase font-chakra whitespace-nowrap"
        animate="visible"
        initial="hidden"
        variants={variants}
        transition={transition}
      >
        {data ? (
          data["Realtime Currency Exchange Rate"]["2. From_Currency Name"]
        ) : (
          <p>Loading</p>
        )}
      </motion.h2>

      <motion.div
        className="inline-flex w-full overflow-hidden"
        animate="visible"
        initial="hidden"
        variants={variants}
        transition={transition}
      >
        <h3 className="text-sm tracking-wider text-gray-500 uppercase font-chakra whitespace-nowrap">
          [
          {data ? (
            data["Realtime Currency Exchange Rate"]["1. From_Currency Code"]
          ) : (
            <span>...</span>
          )}
          ]
        </h3>
        <div className="flex flex-col self-center w-full mx-1 ml-0.5">
          <span className="mb-1 bg-gray-500 h-1px" />
          <span className="mb-1 bg-gray-500 h-1px" />
          <span className="bg-gray-500 h-1px" />
        </div>

        <h3 className="text-sm tracking-wider text-gray-500 uppercase font-chakra whitespace-nowrap">
          [
          {data ? (
            data["Realtime Currency Exchange Rate"]["3. To_Currency Code"]
          ) : (
            <span>...</span>
          )}
          ]
        </h3>
      </motion.div>

      <motion.h1
        className="mt-2 overflow-hidden text-xl tracking-widest uppercase font-chakra whitespace-nowrap"
        animate="visible"
        initial="hidden"
        variants={variants}
        transition={transition}
      >
        {data ? (
          Math.round(
            data["Realtime Currency Exchange Rate"]["9. Ask Price"] * 10
          ) / 10
        ) : (
          <span>...</span>
        )}{" "}
        {data ? (
          data["Realtime Currency Exchange Rate"]["3. To_Currency Code"]
        ) : (
          <span>...</span>
        )}
      </motion.h1>
      <motion.h4
        className="overflow-hidden text-xs tracking-wider text-gray-500 uppercase font-chakra whitespace-nowrap"
        animate="visible"
        initial="hidden"
        variants={variants}
        transition={transition}
      >
        Exchange Rate
      </motion.h4>
      <div className="w-full mt-2 bg-gray-500 h-1px"></div>
    </div>
  );
}
