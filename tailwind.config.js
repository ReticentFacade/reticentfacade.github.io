/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        uw: "2048px",
      },
    },
    animation: {
      fadeIn_l1: "fadeIn 1000ms ease-in-out",
      fadeIn_l2: "fadeIn 800ms ease-in-out",
      fadeIn_l3: "fadeIn 600ms ease-in-out",
      fadeIn_l4: "fadeIn 400ms ease-in-out",
      fadeIn_l5: "fadeIn 200ms ease-in-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
  },
  plugins: [require("tailwindcss-animatecss")],
};
