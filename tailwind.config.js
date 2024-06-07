/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./article-preview-component-master/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "very-dark-grayish-blue": "hsl(217 19% 35%)",
      "desaturated-dark-blue": "hsl(214, 17%, 51%)",
      "grayish-blue": "hsl(212, 23%, 69%)",
      "very-grayish-blue": "hsl(210, 46%, 95%)",
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
