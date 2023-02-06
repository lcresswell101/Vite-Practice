/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /grid-cols-./,
    },
    {
      pattern: /gap-./,
    },
    {
      pattern: /grid-rows-./,
    },
    {
      pattern: /row-span-./,
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
