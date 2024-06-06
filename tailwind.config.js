/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./contact-form-main/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        green: {
          lighter: "hsl(148, 38%, 91%)",
          medium: "hsl(169, 82%, 27%)",
        },
        red: "hsl(0, 66%, 54%)",
      },
      neutral: {
        white: "hsl(0, 0%, 100%)",
        grey: {
          medium: "hsl(186, 15%, 59%)",
          darker: "hsl(187, 24%, 22%)",
        },
      },
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
