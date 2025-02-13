/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Blue-800
        secondary: "#9333EA", // Purple-600
        accent: "#F59E0B", // Yellow-500
        darkBg: "#1a1a2e", // Custom dark mode background
        darkText: "#e5e5e5", // Light text for dark mode
      },
    },
  },
  plugins: [],
};
