/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./stats-preview-card-component-main/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        "main-background": "hsl(233, 47%, 7%)",
        "card-background": "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
      },
      neutral: {
        "main-heading": "hsl(0, 0%, 100%)",
        "main-paragraph": "hsla(0, 0%, 100%, 0.75)",
        "stat-headings": "hsla(0, 0%, 100%, 0.6)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "lexend-deca": ["Lexend Deca", "sans-serif"],
    },
  },
  plugins: [],
};
