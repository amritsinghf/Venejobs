/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // for Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // for Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#01237C",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
