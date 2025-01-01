/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        custom: "2em",
      },
      screens: {
        "lg-custom": "1127px",
      },
      boxShadow: {
        lg: "var(--shadow-lg-light)", // Default shadow for light mode
      },
    },
  },
  fontFamily: {
    sans: ["Inter", "sans-serif"],
    plugins: [],
  },
};
