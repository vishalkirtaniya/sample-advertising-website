/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "350px",
      xs: "450px",
      ...defaultTheme.screens,
    },
    colors: {
      black: "#1F1F1F",
      grey: "#4E4B66",
      white: "#ffffff",
      offwhite: "#F3F3F3",
      greenish: "#B9FF64",
    },
    extend: {},
  },
  plugins: [],
};
