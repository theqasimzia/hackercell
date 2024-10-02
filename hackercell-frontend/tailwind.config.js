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
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: "#4CAF50", // Your main natural color
        secondary: "#FF9800", // Accent color for edginess
        background: "#f5f5f5", // Light background
      },
    },
  },
  plugins: [],
}
