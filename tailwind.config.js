/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Karla", "sans - serif"],
      }, //400,700
      colors: {
        GreenLight: "hsl(148, 38%, 91%)",
        GreenMedium: "hsl(169, 82%, 27%)",
        Red: "hsl(0, 66%, 54%)",
        White: "hsl(0, 0%, 100%)",
        GreyMedium: "hsl(186, 15%, 59%)",
        GreyDarker: "hsl(187, 24%, 22%)",
      },
      screens: {
        xs: "370px",
        sm: "430px",
        md: "640px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
