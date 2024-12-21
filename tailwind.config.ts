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
        blackColor: "var(--blackColor)",
        whiteColor: "var(--whiteColor)",
        color_1: "var(--color_1)",
        color_2: "var(--color_2)",
        color_3: "var(--color_3)",
        color_4: "var(--color_4)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        greatVibes: ["Great Vibes", "cursive"],
        inter: ["Inter", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
