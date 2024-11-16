/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        primary: "#DCE4C9", // white
        secondary: "#1A1A19", // light gray
        tertiary: "#F2F2F2", // gray
        'custom-green-light': '#bfbfbf', // darker gray
        'custom-green-dark': '#a6a6a6', // even darker gray
        "black-100": "#8c8c8c", // dark gray
        "black-200": "#737373", // darker gray
        "black-300": "#595959", // even darker gray
        "white-100": "#404040", // very dark gray
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      }
    },
  },
  plugins: [],
};