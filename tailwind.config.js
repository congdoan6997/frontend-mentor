/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./3-column-preview-card-component-main/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
      },
      neutral: {
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "very-light-gray": "hsl(0, 0%, 95%)",
      },
    },
    fontFamily: {
      "lexend-deca": ["Lexend Deca", "sans-serif"],
      "big-shoulders-display": ["Big Shoulders Display", "cursive"],
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
