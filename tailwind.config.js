/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      blue: {
        "100": "#232340",
      },
      seagreen: {
        "200": "#15BFFDB2",
      },
      black: {
        "50": "#666",
        "100": "#222",
        "900": "#181F2B",
      },
      white: {
        "100": "#fff",
        "50": "#f5f5f5"
      },
      purple: {
        "20": "#FFBEBE",
        "50": "#E8BEFF;",
        "100": "#5468E7"
      },
      gray: {
        "100": "#606060"
      },
      yellow: {
        "100": "#FF7979",
        "200": "#FAA650"
      },
      zinc: {
        "50": "#E4FDD1",
        "100": "#FBFFCD",
        "200": "#FAA650"
      },
      brown: {
        "100": "#301402",
        "200": "#F7BFDD"
      }
    },
    fontFamily: {
      'montserat': ["'Montserrat', sans-serif;"],
    }
  },
  plugins: [],
}
