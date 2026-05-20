import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        basalt: "#090908",
        graphite: "#141311",
        iron: "#27231C",
        gold: {
          100: "#F7E7B8",
          300: "#D8BD6A",
          500: "#B98F32",
          700: "#76581C",
        },
        verdigris: "#5D8B78",
        copper: "#B66D3D",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        mineral: "0 24px 80px rgba(0, 0, 0, 0.38)",
      },
    },
  },
  plugins: [],
};

export default config;
