import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center: true,
      padding: "16px"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#0891b2",
        secondary:"#94a3b8",
        dark:"#1e293b",
        belakang:"#e0f2fe",
        horver:"#0e7490",
        belakang1:"#e0f2fe"

      },
    },
  },
  plugins: [],
} satisfies Config;
