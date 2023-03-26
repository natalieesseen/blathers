/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#F7F3E7',
        'green': '#b7a137',
        'pink': '#fadcd8',
        'orange': '#f36f3b',
        'brown': '#d47035',
        'blue': '#9cc4bc',
        'yellow': '#fbaf40',
      },
    },
  },
  plugins: [],
}
