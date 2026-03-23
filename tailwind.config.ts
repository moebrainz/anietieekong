import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant)"],
        syne: ["var(--font-syne)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        ink:      "#0c0b09",
        charcoal: "#161410",
        stone:    "#b4afa8",
        dust:     "#7a7470",
        accent:   "#c8874a",
        warm:     "#d4975e",
        gold:     "#c9a55a",
      },
      animation: {
        "fade-up":   "fadeUp .9s cubic-bezier(.25,.46,.45,.94) forwards",
        "fade-in":   "fadeIn .7s ease forwards",
        "scan-line": "scanLine 8s linear infinite",
        "ticker":    "ticker 35s linear infinite",
        "float":     "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp:   { from: { opacity: "0", transform: "translateY(28px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:   { from: { opacity: "0" }, to: { opacity: "1" } },
        scanLine: { "0%,100%": { top: "0%" }, "50%": { top: "100%" } },
        ticker:   { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        float:    { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
    },
  },
  plugins: [],
};
export default config;
