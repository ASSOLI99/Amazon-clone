/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "#111827",
        "secondary-black-bg": "#27354b",
        "secondary-bg": "#e5e7eb",
        "secondary-white-bg": "#e5e7eb",
        "black-text": "#111827",
        "white-text": "#e5e7eb",
        "main-theme": "#06b6d4",
        "secondary-theme": "#22d3ee",
      },
      fontSize: {
        vs: ["0.8rem  ", "0.25rem"],
      },
    },
  },
  plugins: [],
};
