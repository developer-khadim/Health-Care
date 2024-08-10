/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        active: '#007E85',
        green: '#6EAB36',
        litegreen: '#76b5b9',
      },
    },
  },
  plugins: [],
}