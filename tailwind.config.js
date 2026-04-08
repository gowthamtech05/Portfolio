/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#131313",
        surface: "#1c1c1b",
        "primary-container": "#00f0ff",
        "on-primary": "#00363a",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        headline: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
