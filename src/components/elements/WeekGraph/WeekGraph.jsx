import { motion } from "framer-motion";
import { ElementContainer } from "../utilities/ElementContainer";
import { Cell } from "./Cell";
import { cellAppear } from "./animations";

const SSR = typeof window === "undefined";

const AnimElement = () => (
  <motion.div
    variants={cellAppear}
    transition={{ delay: Math.random() + 1, duration: 1 }}
    initial="hidden"
    animate="show"
    className="bg-gray-900"
  />
);

export const WeekGraph = () => {
  return (
    <ElementContainer title="Week graph" headerColor="bg-blue-800" header>
      <div className="grid grid-cols-[repeat(52,_1fr)] grid-rows-[repeat(90,_1fr)] gap-[1px] w-max relative">
        {/* Larger cells that fade out */}
        <div className="absolute inset-0 grid min-w-full min-h-full grid-cols-[repeat(13,_1fr)] grid-rows-[repeat(15,_1fr)]">
          {[...Array(195).keys()].map(i => (
            <AnimElement key={i} />
          ))}
        </div>

        {/* Render 52 * 90 Week Cells */}
        {!SSR &&
          [...Array(52 * 90).keys()].map(i => (
            <Cell
              key={i}
              filled={Math.random() >= 0.5}
              special={Math.random() >= 0.5}
            />
          ))}
      </div>
    </ElementContainer>
  );
};
