import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm espresso / brown surfaces (dark but never black)
        ink: {
          950: "#1E1813",
          900: "#241C15",
          850: "#2A2018",
          800: "#31261B",
          700: "#3B2E20",
          600: "#4A3828",
        },
        // Committed accent: warm amber/gold, with coral as accent-2
        accent: {
          DEFAULT: "#F2A33C",
          soft: "#FFC06B",
          deep: "#E0892B",
          glow: "#FF6B4A",
        },
        coral: {
          DEFAULT: "#FF6B4A",
          soft: "#FF8A6E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1150px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(242,163,60,0.16), 0 0 40px -8px rgba(242,163,60,0.4)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(20,14,9,0.75)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "gradient-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 4s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
