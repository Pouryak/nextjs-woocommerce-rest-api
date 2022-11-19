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
        primaryDark: "rgb(32, 32, 35)",
        secondaryLight: "#f8f9fa",
        secondaryDark: "rgba(225, 225, 225, 0.08)",
        textDark: "#1a202c",
        textLight: "rgb(255, 255, 255, 0.92)",
        greenAccent: "#96f2d7",
        purpleAccent: "rgb(255, 99, 195)",
        glass: "rgba(32, 32, 35, 0.02)",
        hoverLight: "rgba(154, 230, 180, 0.16)",
        hoverDark: "rgba(35, 107, 83, 0.240)",
        shadeLight: "#ECECEC",
        shadeDark: "#444445",
      },
      fontFamily: {
        vazir: ["Vazir"],
        shabnam: ["Shabnam"],
      },
      fontSize: {
        xsm: "0.725rem",
        xlg: "1.425rem",
      },
    },
  },
  plugins: [],
};
