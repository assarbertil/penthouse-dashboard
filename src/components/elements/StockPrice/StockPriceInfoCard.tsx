import { motion } from "framer-motion"
import { useStockPrice } from "@/hooks/fetching/useStockPrice"
import { infoCardAnimation, infoCardRow } from "./animations"

export default function StockPriceInfoCard() {
  const { stockPrice } = useStockPrice()

  return (
    <motion.div
      variants={infoCardAnimation}
      className="col-span-1 row-span-3 mt-5"
    >
      <motion.h2
        className="overflow-hidden text-2xl font-medium tracking-wider uppercase font-chakra whitespace-nowrap"
        animate="visible"
        initial="hidden"
        variants={infoCardRow}
      >
        {stockPrice && <p>Loading</p>}
      </motion.h2>

      <motion.div
        className="inline-flex w-full overflow-hidden"
        animate="visible"
        initial="hidden"
        variants={infoCardRow}
      >
        <h3 className="text-sm tracking-wider text-gray-500 uppercase font-chakra whitespace-nowrap">
          [{stockPrice && <span>...</span>}]
        </h3>
        <div className="flex flex-col self-center w-full mx-1 ml-0.5">
          <span className="mb-1 bg-gray-500 h-1px" />
          <span className="mb-1 bg-gray-500 h-1px" />
          <span className="bg-gray-500 h-1px" />
        </div>

        <h3 className="text-sm tracking-wider text-gray-500 uppercase font-chakra whitespace-nowrap">
          [{stockPrice && <span>...</span>}]
        </h3>
      </motion.div>

      <motion.h1
        className="mt-2 overflow-hidden text-xl tracking-widest uppercase font-chakra whitespace-nowrap"
        animate="visible"
        initial="hidden"
        variants={infoCardRow}
      >
        {stockPrice ? (
          Math.round(
            stockPrice["Realtime Currency Exchange Rate"]["9. Ask Price"] * 10
          ) / 10
        ) : (
          <span>...</span>
        )}{" "}
        {stockPrice && <span>...</span>}
      </motion.h1>
      <motion.h4
        className="overflow-hidden text-xs tracking-wider text-gray-500 uppercase font-chakra whitespace-nowrap"
        animate="visible"
        initial="hidden"
        variants={infoCardRow}
      >
        Exchange Rate
      </motion.h4>
      <motion.div className="w-full mt-2 bg-gray-500 h-1px"></motion.div>
    </motion.div>
  )
}
