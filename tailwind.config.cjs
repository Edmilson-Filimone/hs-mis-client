/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        "light":"#F0F2F5",
        "dark":"#1A2035",
        "sidebar":"#252527",
        "green":"#5FB563",
        "blue":"#3189EC",
        "black":"#333338",
        "pink":"#DD2567",
        "title-color":"#344767",
        "text-color":"#344771"

      }
    },
  },
  plugins: [],
}
