/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      zIndex: {
        100: "100",
      },
    },
    backgroundImage: {
      "tino-bg": "url('../public/tino.jpg')",
    },
  },
  plugins: [],
};
