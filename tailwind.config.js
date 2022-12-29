/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      blue: {
        "100": "#232340",
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
        "20": "#E8BEFF",
        "50": "#C897E4;",
        "100": "#5468E7"
      },
      gray: {
        "100": "#606060"
      },
      yellow: {
        "100": "#FFCE79"
      },
      zinc: {
        "50": "#D1ECFD",
        "100": "#CDD3FF",
        "200": "#B6B6FF"
      }
    },
    fontFamily: {
      'montserat': ["'Montserrat', sans-serif;"],
    }
  },
  plugins: [],
}
