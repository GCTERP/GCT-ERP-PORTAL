/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      orange: "#FF9820",
      transparent: "transparent",
      current: "currentColor",
      bubble: "#6AA6FF",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      bgcolor: "#f3f9ff",
    },
  },
  plugins: [],
};
