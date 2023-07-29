/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./pages/**/*.{html, js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
    "./src/pages/*.{js,jsx}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
