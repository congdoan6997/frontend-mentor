/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
  content: ["./notifications-page-main/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      red: "hsl(1, 90%, 64%)",
      blue: "hsl(219, 85%, 26%)",
      white: "hsl(0, 0%, 100%)",
      "very-light-grayish-blue": "hsl(210, 60%, 98%)",
      "light-grayish-blue": "hsl(211, 68%, 94%)",
      "dark-grayish-blue": "hsl(219, 14%, 63%)",
      "very-dark-grayish-blue": "hsl(219, 12%, 42%)",
      "very-dark-blue": "hsl(224, 21%, 14%)",
    },
    fontFamily: {
      "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [daisyui],
};
