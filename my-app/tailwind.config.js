module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      mobile: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      tablet: {
        min: "768px",
        max: "1023px",
        // => @media (min-width: 768px and max-width: 1023px) { ... }
      },
      laptop: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      desktop: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      desktopXL: { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
