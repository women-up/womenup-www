import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        gold: "hsl(var(--gold))",
        success: "hsl(var(--success))",
        brand: {
          red: "#C41A2C",
          "red-dark": "#8B1A2C",
          "red-light": "#E8505B",
          cream: "#F5F0E8",
          "cream-dark": "#E8DFD0",
          brown: "#2D2926",
          "brown-light": "#8B8178",
          border: "#D1C9BE",
          gold: "#C9972A",
          green: "#4A7C59",
        },
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "brand-wide": "0.1em",
        "brand-subtle": "0.02em",
      },
      fontSize: {
        "brand-h1": ["3.5rem", { lineHeight: "1.14", letterSpacing: "0.02em" }],
        "brand-h2": ["2.5rem", { lineHeight: "1.2" }],
        "brand-h3": ["1.75rem", { lineHeight: "1.29" }],
        "brand-h4": ["1.375rem", { lineHeight: "1.4" }],
        "brand-body": ["1rem", { lineHeight: "1.625" }],
        "brand-small": ["0.875rem", { lineHeight: "1.57" }],
        "brand-caption": ["0.75rem", { lineHeight: "1.5" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "var(--radius)",
      },
      boxShadow: {
        "brand-sm": "0 2px 12px rgba(45, 41, 38, 0.08)",
        "brand-md": "0 8px 24px rgba(45, 41, 38, 0.12)",
        "brand-primary": "0 4px 12px rgba(196, 26, 44, 0.3)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
