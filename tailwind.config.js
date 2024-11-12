/** @type {import('tailwindcss').Config} */
module.exports = {
  fontFamily: {
    pthin: ["Poppins-Thin", "sans-serif"],
    pextralight: ["Poppins-ExtraLight", "sans-serif"],
    plight: ["Poppins-Light", "sans-serif"],
    pregular: ["Poppins-Regular", "sans-serif"],
    pmedium: ["Poppins-Medium", "sans-serif"],
    psemibold: ["Poppins-SemiBold", "sans-serif"],
    pbold: ["Poppins-Bold", "sans-serif"],
    pextrabold: ["Poppins-ExtraBold", "sans-serif"],
    pblack: ["Poppins-Black", "sans-serif"],
  },
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

