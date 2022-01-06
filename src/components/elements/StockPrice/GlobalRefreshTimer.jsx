import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { gridItem, refreshTimerAnimation } from "./animations";

export default function GlobalRefreshTimer() {
  const controls = useAnimation();

  useEffect(() => {
    const refetchInterval = setInterval(refetch, 10000);

    const refetch = () => {
      controls.stop();
      controls.set({ width: "100%" });
      controls.start({ width: "0%" });
    };
    refetch();

    return () => clearInterval(refetchInterval);
  }, [controls]);

  return (
    <motion.div variants={gridItem} className="col-span-1 row-span-1">
      <div className="flex flex-row items-center w-full h-full">
        <h3 className={`text-sm text-blue-700`}>⛛</h3>
        <div className="flex flex-col w-full ml-2">
          <span className="h-4 bg-gray-800">
            <motion.div
              className="w-20 h-full bg-blue-800"
              animate={controls}
              initial={{ width: "100%" }}
              transition={{ duration: 10, ease: "linear" }}
            />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
