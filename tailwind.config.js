/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amazon: ['"Amazon Ember"', "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
