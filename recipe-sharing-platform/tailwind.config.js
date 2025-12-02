/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    // Make sure you have this line exactly as written:
    "./public/index.html", 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
