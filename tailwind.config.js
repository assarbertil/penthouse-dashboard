const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "2xs": ".5rem",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        chakra: ["Chakra Petch", ...fontFamily.mono],
      },
      spacing: {
        "2px": "2px",
        "3px": "3px",
      },
      height: {
        "1px": "1px",
        "1.5px": "1.5px",
        "2px": "2px",
        "3px": "3px",
        "95p": "95%",
      },
      borderWidth: {
        3: "3px",
        2: "2px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "black",
      white: "white",
      green: colors.green,
      gray: colors.gray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
