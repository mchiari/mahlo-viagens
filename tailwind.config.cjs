const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        'sans': ['Yanone Kaffeesatz', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  plugins: [],
};
