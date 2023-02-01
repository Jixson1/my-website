/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'standard-background': '#343241',
        'header-background': '#494d5f',
        'button-highlight-color': '#676d86',
      }
    },
  },
  plugins: [],
}