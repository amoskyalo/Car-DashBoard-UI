/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#A162F7",
        primaryGreen: "#70CF97",
        primaryBlue: "#2884FF",
        primaryRed: "#f96a3c",
        primaryDark: "#242731",
        primaryGray: "#5F6165",
        primaryOrange: "#FF764C"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
