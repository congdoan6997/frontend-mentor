/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./huddle-landing-page-with-single-introductory-section-master/*.{html,js}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        violet: "hsl(257, 40%, 49%)",
        "soft-magenta": "hsl(300, 69%, 71%)",
      },
    },
    fontFamily: {
      poppins: '"Poppins", sans-serif',
      "open-sans": '"Open Sans", sans-serif',
    },
  },
  plugins: [],
};
