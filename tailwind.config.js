/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js,css}", "./node_modules/flowbite/**/*.js", "/**.html"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
}

