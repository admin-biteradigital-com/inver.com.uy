import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        inver: {
          gold: "#C8943A",
          "gold-light": "#E8B86D",
          dark: "#1A1209",
          dark2: "#2C1F0E",
          cream: "#F5EDD8",
          cream2: "#FBF6EC",
          green: "#2D5016",
          "green-light": "#4A7A28",
          text: "#3D2B0F",
          muted: "#6B4F2A",
          wa: "#25D366",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
