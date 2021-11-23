import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Clock() {
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

  const leadingZero = n => `${n}`.padStart(2, "0");

  const [time, setTime] = useState(["0", "0", "0", "0"]);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hours = leadingZero(date.getHours());
      const minutes = leadingZero(date.getMinutes());
      const seconds = leadingZero(date.getSeconds());
      const centseconds = date
        .getMilliseconds()
        .toString()
        .padStart(3, "0")
        .slice(0, -1);
      setTime([hours, minutes, seconds, centseconds]);
    }, 10);
  }, []);
  // Clock code

  return (
    <motion.div
      animate="visible"
      initial="hidden"
      variants={variants}
      transition={transition}
      className="mb-4 overflow-hidden tracking-widest uppercase text-7xl font-chakra whitespace-nowrap"
    >
      <h2>
        {time[0]}:{time[1]}:{time[2]}
        <span className="opacity-30">:{time[3]}</span>
      </h2>
    </motion.div>
  );
}
