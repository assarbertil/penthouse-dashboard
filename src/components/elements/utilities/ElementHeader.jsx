import { motion } from "framer-motion";

export default function ElementHeader({
  color = "bg-yellow-800",
  title = "placeholder",
}) {
  const widthAnimation = {
    hidden: { width: "0%" },
    show: {
      width: "100%",
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const titleAnimation = {
    show: { transition: { delayChildren: 0.2, staggerChildren: 0.05 } },
  };

  const letterAnimation = {
    hidden: { transform: "rotateX(90deg)", opacity: 0 },
    show: {
      transform: "rotateX(0deg)",
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      animate="show"
      initial="hidden"
      variants={widthAnimation}
      className="mb-4"
    >
      <div className={`${color} w-full h-3px mb-1 opacity-60`} />
      <motion.h1
        className="overflow-hidden font-bold leading-snug tracking-widest text-gray-300 uppercase whitespace-nowrap"
        variants={titleAnimation}
      >
        {title.split("").map((word, index) => (
          <motion.span
            className="inline-block will-change-transform"
            key={index}
            variants={letterAnimation}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
      <div className={`bg-gray-700 w-full h-px my-2px`} />
      <div className={`${color} w-full h-2px `} />
    </motion.div>
  );
}
