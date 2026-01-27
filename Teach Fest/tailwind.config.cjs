module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#256af4",
        "tech-purple": "#8b5cf6",
        "background-light": "#ffffff",
        "background-dark": "#101622",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
