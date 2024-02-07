import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      lg: "1100px",
    },
    extend: { borderRadius: { def: "16px" } },
  },
  plugins: [],
};
export default config;
