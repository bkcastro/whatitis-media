/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/components/methodology/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brandGreen': '#9CF6B6',
        'brandPurple': "#814D9F",
        'brandDarkGreen': '#459557',
      }
    },
  },
  plugins: [],
}