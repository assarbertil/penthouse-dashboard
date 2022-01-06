export const gridContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.2,
      staggerChildren: 1,
    },
  },
};

export const gridItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const refreshTimerAnimation = {
  hidden: { width: "100%" },
  show: { transition: { duration: 10 } },
};

export const infoCardAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
      staggerChildren: 1,
      delayChildren: 2,
    },
  },
};

export const infoCardRow = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1,
      delay: 0.2,
    },
  },
};
