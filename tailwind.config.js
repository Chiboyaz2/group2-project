// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",        // 👈 make sure this is included
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 include src files
  ],
  theme: {
    extend: {
      colors: {
        brand: "#272343", // custom color
      },
    },
  },
  plugins: [],
};
