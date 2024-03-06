/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT ({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ["Martel Sans", "sans-serif"],
      },
      colors: {
        NBgRed: "#ff1621",
        NBgHover: "#c11119",
        NMain: "#db0000",
        NBlack: "#000000",
        NWhite: "#ffffff",
        NGray: "#564d4d",
        NNearRed: "#831010",
      },
    },
  },
  plugins: [],
});