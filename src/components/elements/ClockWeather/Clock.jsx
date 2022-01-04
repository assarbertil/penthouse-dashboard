import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { clockContainer, clockItem } from "./animations";

const Number = ({ content, dark }) => (
  <motion.span
    variants={clockItem}
    className={dark ? "inline-block text-gray-500" : "inline-block"}
  >
    {content}
  </motion.span>
);

export default function Clock() {
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

  return (
    <motion.h2
      className="mb-4 overflow-hidden tracking-widest text-7xl font-chakra whitespace-nowrap text-gray-50"
      variants={clockContainer}
      initial="hidden"
      animate="show"
    >
      <Number content={`${time[0]}`} />
      <Number content={`:${time[1]}`} />
      <Number content={`:${time[2]}`} />
      <Number content={`:${time[3]}`} dark />
    </motion.h2>
  );
}
