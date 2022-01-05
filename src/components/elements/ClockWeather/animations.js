export const clockContainer = {
  show: { transition: { delayChildren: 0.5, staggerChildren: 0.2 } },
};

export const clockItem = {
  hidden: { transform: "rotateX(90deg)", opacity: 0 },
  show: {
    transform: "rotateX(0deg)",
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const weatherContainer = {
  hidden: { scaleY: 0, scaleX: 0 },
  show: {
    scaleY: [0.1, 0.1, 1],
    scaleX: [0, 1, 1],
    borderTopWidth: [4, 3, 1],
    borderBottomWidth: [4, 4, 1],
    transition: {
      ease: "easeInOut",
      delay: 1,
      duration: 1.5,
      when: "beforeChildren",
    },
  },
};

export const dividerAnimation = {
  hidden: { opacity: 0, scaleY: 0 },
  show: { opacity: 1, scaleY: 1, transition: { duration: 0.75 } },
};

export const weatherItem = {
  upper: { hidden: { opacity: 0, y: -48 }, show: { opacity: 1, y: 0 } },
  lower: {
    hidden: { opacity: 0, y: 48 },
    show: { opacity: 1, y: 0 },
  },
};

export const forecastChartAnimation = {
  hidden: { opacity: 0, scaleY: 0 },
  show: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
