/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#061750",
      white: "#f0f0f0",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      bg:"#F9FDFE",
      green: "#13ce66",
      yellow: "#ffc82c",
      gray: "#8492a6",
      "gray-dark": "#273444",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ['Proxima Nova', 'Montserrat', 'sans-serif'],
      serif: ['Proxima Nova', 'Montserrat', 'serif'],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
