/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    colors: {
      'gray': '#222222',
      'light-gray':'#DEDADA',
    },
  },
  plugins: [
    require("daisyui"),
  ],
}