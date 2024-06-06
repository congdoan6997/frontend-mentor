/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./testimonials-grid-section-main/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        violet: "hsl(263, 55%, 52%)",
        "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "very-dark-blackish-blue": "hsl(219, 29%, 14%)",
        white: "hsl(0, 0%, 100%)",
      },
      neutral: {
        "light-gray": "hsl(0, 0%, 81%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
      },
      custom: {
        "verified-graduate": "rgba(63, 63, 88, 0.5)", // 50% opacity of hsl(217, 19%, 35%)
        "review-paragraph": "rgba(63, 63, 88, 0.7)", // same as verified graduate
      },
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
