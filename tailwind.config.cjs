/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        dark: "#45352f",
        orange: "#f0a253",
        white: "#fbf4ec",
        grey: "#abc0c2",
        brown: "#936746",
        beige1: "#ecdebc",
        beige2: "#d4B184",
        beige3: "#a47e4a",
      },
    },
  },
  plugins: [],
};
