import { Variants } from "framer-motion"

export const clockContainer: Variants = {
  show: {
    transition: { delayChildren: 0.5, staggerChildren: 0.2 },
  },
}

export const clockItem: Variants = {
  hidden: { rotateX: 90, opacity: 0 },
  show: {
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const weatherContainer: Variants = {
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
}

export const dividerAnimation: Variants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },
  show: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.75 },
  },
}

export const weatherItem: { upper: Variants; lower: Variants } = {
  upper: {
    hidden: { opacity: 0, y: -48 },
    show: { opacity: 1, y: 0 },
  },
  lower: {
    hidden: { opacity: 0, y: 48 },
    show: { opacity: 1, y: 0 },
  },
}

export const forecastChartAnimation: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  show: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
}
