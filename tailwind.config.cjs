const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        'sans': ["Yanone Kaffeesatz", ...defaultTheme.fontFamily.sans],
        'passion': ["Tilt Warp", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#162a43"
      },
    },
  },
  plugins: [],
};
