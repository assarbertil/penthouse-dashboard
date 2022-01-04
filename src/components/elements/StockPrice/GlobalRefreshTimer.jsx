import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function GlobalRefreshTimer() {
  const controls = useAnimation();

  useEffect(() => {
    let refetchInterval;

    function refetch() {
      controls.stop();
      controls.set({ width: "100%" });
      controls.start({ width: "0%" });
    }
    refetch();

    if (!refetchInterval) refetchInterval = setInterval(refetch, 10000);

    return () => {
      clearInterval(refetchInterval);
      refetchInterval = null;
    };
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
