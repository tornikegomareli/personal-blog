/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,public}/**/*.{js,ts,jsx,tsx,md,mdx}"],
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
