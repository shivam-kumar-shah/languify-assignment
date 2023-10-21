/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        background__card: "rgba(255, 255, 255, 1)",
        background__card__secondary: "rgba(0, 25, 41, 1)",
        background__card__tertiary: "rgba(1, 36, 59, 1)",
        background: "rgba(255, 255, 255, 1)",
        background__secondary: "rgba(241, 244, 246, 1)",
        theme__primary: "rgba(45, 171, 255, 1)",
        button__primary: "#053E64",
        font__primary: "rgba(0, 0, 0, 1)",
        font__secondary: "rgba(255, 255, 255, 1)",
        font__tertiary: "rgba(232, 232, 242, 1)",
        nav__background: "rgba(49, 53, 56, 1)",
      },
    },
  },
  plugins: [],
};
