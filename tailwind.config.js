/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1170px",
      },
      fontFamily: {
        roboto: ["Roboto", "serif"],
        sans: ["Open Sans", "serif"],
      },
      animation: {
        "move-left-right": "moveLeftRight 3s ease-in-out infinite",
      },
      keyframes: {
        moveLeftRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
