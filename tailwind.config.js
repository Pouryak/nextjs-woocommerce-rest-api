module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xsm: "360px",
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryLight: "#e9ecef",
        primaryDark: "#111720",
        secondaryLight: "#f8f9fa",
        secondaryDark: "#202a37",
        textDark: "#1a202c",
        textLight: "rgb(255, 255, 255, 0.92)",
        greenAccent: "#96f2d7",
        shadeLight: "#ECECEC",
        shadeDark: "#202a37",
      },
      fontFamily: {
        vazir: ["Vazir"],
      },
      fontSize: {
        xsm: "0.725rem",
        xlg: "1.425rem",
      },
    },
  },
  plugins: [],
};
