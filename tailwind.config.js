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
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0F9C93",
          700: "#0D9488",
          800: "#0F766E",
          900: "#115E59",
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
        "hero-gradient": "linear-gradient(135deg, #14B8A6 0%, #0EA5E9 100%)",
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
