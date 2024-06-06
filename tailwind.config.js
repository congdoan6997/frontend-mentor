/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./nft-preview-card-component-main/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        "soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
      },
      neutral: {
        "very-dark-blue-bg": "hsl(217, 54%, 11%)",
        "very-dark-blue-card": "hsl(216, 50%, 16%)",
        "very-dark-blue-line": "hsl(215, 32%, 27%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
