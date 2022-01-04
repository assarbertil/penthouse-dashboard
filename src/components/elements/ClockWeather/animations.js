export const clockContainer = {
  show: { transition: { delayChildren: 1, staggerChildren: 0.2 } },
};

export const clockItem = {
  hidden: { transform: "rotateX(90deg)" },
  show: { transform: "rotateX(0deg)", transition: { duration: 0.25 } },
};
