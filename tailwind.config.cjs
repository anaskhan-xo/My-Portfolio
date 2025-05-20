/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/js/*.js", "./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
