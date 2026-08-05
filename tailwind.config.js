/** @type {import('tailwindcss').Config} */
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
        logo: ["NothingYouCouldDo_400Regular"],

        title: "MontserratAlternates_700Bold",
        titleMedium: "MontserratAlternates_500Medium",

        body: "Poppins_400Regular",
        bodyMedium: "Poppins_500Medium",
        bodySemi: "Poppins_600SemiBold",
        bodyBold: "Poppins_700Bold",
      },
    },
  },
  plugins: [],
};