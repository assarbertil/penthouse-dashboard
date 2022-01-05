import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { clockContainer, clockItem } from "./animations";

// Displaying two numbers in the clock
const NumberPair = ({ content, dark }) => (
  <motion.span
    variants={clockItem}
    className={dark ? "inline-block text-gray-500" : "inline-block"}
  >
    {content}
  </motion.span>
);

// Function for adding leading zeros to numbers when needed
const leadingZero = n => `${n}`.padStart(2, "0");

/**
 * Main Component
 */
export default function Clock() {
  const [time, setTime] = useState(["0", "0", "0", "0"]);

  useEffect(() => {
    const clock = setInterval(() => {
      const date = new Date();
      const hours = leadingZero(date.getHours());
      const minutes = leadingZero(date.getMinutes());
      const seconds = leadingZero(date.getSeconds());
      const centSeconds = date
        .getMilliseconds()
        .toString()
        .padStart(3, "0")
        .slice(0, -1);
      setTime([hours, minutes, seconds, centSeconds]);
    }, 10);

    return () => clearInterval(clock);
  }, []);

  return (
    <motion.h2
      className="mb-4 tracking-widest text-7xl font-chakra text-gray-50"
      variants={clockContainer}
      initial="hidden"
      animate="show"
    >
      <NumberPair content={`${time[0]}`} />
      <NumberPair content={`:${time[1]}`} />
      <NumberPair content={`:${time[2]}`} />
      <NumberPair content={`:${time[3]}`} dark />
    </motion.h2>
  );
}
