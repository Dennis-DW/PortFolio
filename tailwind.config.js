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
        primary: "000000", 
        secondary: "#4A4947", 
        tertiary: "#F2F2F2", 
        'custom-green-light': '#bfbfbf', 
        'custom-green-dark': '#a6a6a6',
        "black-100": "#8c8c8c",
        "black-200": "#737373", 
        "black-300": "#595959", 
        "white-100": "#404040",
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