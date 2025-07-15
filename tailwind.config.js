const { Playfair_Display } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Playfair_Display: ["var(--font-playfair)"],
      },
      colors: {
        gray: "#585858",
        green: "#146C6C",
      },
    },
  },
  plugins: [],
};
