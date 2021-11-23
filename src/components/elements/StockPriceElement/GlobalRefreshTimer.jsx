import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function GlobalRefreshTimer() {
  const controls = useAnimation();

  useEffect(() => {
    function refetch() {
      //this will repeat every 5 seconds
      //you can reset counter here

      controls.stop();
      controls.set({ width: "100%" });
      controls.start({ width: "0%" });
    }
    setInterval(refetch, 10000);
  }, [controls]);

  return (
    <div className="col-span-1 row-span-1">
      <div className="inline-flex w-full">
        <h3 className={`text-sm text-blue-700 `}>⛛</h3>
        <div className="flex flex-col self-center w-full ml-2">
          <span className="h-4 bg-gray-800">
            <motion.div
              className="w-20 h-full bg-blue-800"
              animate={controls}
              initial={{ width: "100%" }}
              transition={{
                ease: "linear",
                duration: 10,
              }}
            ></motion.div>
          </span>
        </div>
      </div>
    </div>
  );
}
