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
        // VALEN Brand Palette
        background: "#0a0a0b",
        surface: "#111113",
        "surface-2": "#18181b",
        "surface-3": "#1e1e23",
        border: "#2a2a32",
        "border-subtle": "#1e1e24",
        accent: "#2563eb",
        "accent-bright": "#3b82f6",
        "accent-glow": "#1d4ed8",
        "accent-muted": "rgba(37, 99, 235, 0.15)",
        "text-primary": "#f8f8ff",
        "text-secondary": "#a1a1aa",
        "text-muted": "#52525b",
        gold: "#f59e0b",
        "gold-muted": "rgba(245, 158, 11, 0.15)",
        success: "#22c55e",
        "success-muted": "rgba(34, 197, 94, 0.12)",
        danger: "#ef4444",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-accent": "linear-gradient(135deg, #1d4ed8, #2563eb, #3b82f6)",
        "gradient-surface": "linear-gradient(180deg, #18181b, #111113)",
        "gradient-card": "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
        "gradient-hero": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.15), transparent)",
        "gradient-glow": "radial-gradient(circle at center, rgba(37,99,235,0.2), transparent 70%)",
      },
      boxShadow: {
        "card": "0 0 0 1px rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 0 0 1px rgba(37,99,235,0.3), 0 8px 40px rgba(0,0,0,0.5), 0 0 60px rgba(37,99,235,0.08)",
        "accent": "0 0 20px rgba(37,99,235,0.4)",
        "glow-sm": "0 0 12px rgba(37,99,235,0.3)",
        "inner-border": "inset 0 1px 0 rgba(255,255,255,0.06)",
        "button": "0 1px 2px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "scale-in": "scaleIn 0.3s ease forwards",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(37,99,235,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(37,99,235,0.6)" },
        },
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};

export default config;
