export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
      type: 'tween',
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

export const item = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      opacity: { duration: 0.75 },
      x: { duration: 1 },
      ease: [0.6, 0.1, 0.9, 0.4],
    },
  },
};
