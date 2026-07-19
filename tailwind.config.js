/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {
      colors: {
        teal: {
          50: "#EEFDF8",
          100: "#D7F7EE",
          200: "#ABE9D9",
          300: "#7AD8C0",
          400: "#45C4A8",
          500: "#1FAF95",
          600: "#17907B",
          700: "#116F62",
          800: "#0F5A50",
          900: "#0D4742",
        },
        emerald: {
          500: "#10B981",
          600: "#059669",
        },
        slate: {
          950: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(20, 184, 166, 0.25)",
        card: "0 10px 40px -10px rgba(20, 184, 166, 0.15)",
        glow: "0 25px 60px -25px rgba(20, 184, 166, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.72" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 2.8s ease-in-out infinite",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #2563EB 0%, #22C55E 100%)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
