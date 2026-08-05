/** @type {import('tailwindcss').Config} */
const { colors } = require("./theme/colors");

module.exports = {
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        logo: "NothingYouCouldDo_400Regular",

        title: "MontserratAlternates_400Regular",
        titleMedium: "MontserratAlternates_500Medium",
        titleBold: "MontserratAlternates_700Bold",

        body: "Poppins_400Regular",
        bodyMedium: "Poppins_500Medium",
        bodySemi: "Poppins_600SemiBold",
        bodyBold: "Poppins_700Bold",
      },
      colors,
    },
  },
  plugins: [],
};