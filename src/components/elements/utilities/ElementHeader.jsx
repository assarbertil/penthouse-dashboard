import { motion } from "framer-motion";

export default function ElementHeader({ color, title }) {
  const variants = {
    hidden: { width: "0%", opacity: 0 },
    visible: { width: "100%", opacity: 1 },
  };

  const transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 2,
    delay: 0.2,
  };

  return (
    <motion.div
      animate="visible"
      initial="hidden"
      variants={variants}
      transition={transition}
      className="mb-4"
    >
      <div className={`${color} w-full h-3px mb-1 opacity-60`} />
      <h2 className="overflow-hidden font-bold leading-snug tracking-widest text-gray-300 uppercase whitespace-nowrap">
        {title}
      </h2>
      <div className={`bg-gray-700 w-full h-px my-2px`} />
      <div className={`${color} w-full h-2px `} />
    </motion.div>
  );
}

ElementHeader.defaultProps = {
  title: "placeholder",
  color: "bg-yellow-800",
};
