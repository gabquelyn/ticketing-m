import type { Config } from "tailwindcss"

const config = {
  // darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      colors: {
        orange : "#F15025",
        baby: "#F7F7F7",
        grey: "#E6E8E6",
        ash: "#CFD0CE",
        black: "#191919",
        error: "#F5BCBC",
        red: "#660000",
        
      },
    
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config