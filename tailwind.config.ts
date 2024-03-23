import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#3490dc",
        "primary-light": "#6cb2eb",
        "primary-dark": "#2779bd",
        "primary-100": "#ebf8ff",
        "primary-200": "#bee3f8",
        "primary-300": "#90cdf4",
        "primary-400": "#63b3ed",
        "primary-500": "#4299e1",
        "primary-600": "#3182ce",
        "primary-700": "#2b6cb0",
        "primary-800": "#2c5282",
        "primary-900": "#2a4365",
        "secondary": "#f6993f",
        "secondary-light": "#faad63",
        "secondary-dark": "#f5871f",
        "secondary-100": "#fffaf0",
        "secondary-200": "#feebc8",
        "secondary-300": "#fbd38d",
        "secondary-400": "#f6ad55",
        "secondary-500": "#ed8936",
        "secondary-600": "#dd6b20",
        "secondary-700": "#c05621",
        "secondary-800": "#9c4221",
        "secondary-900": "#7b341e",
        "success": "#38a169",
        "success-light": "#68d391",
        "success-dark": "#2f855a",
        "success-100": "#f0fff4",
        "success-200": "#c6f6d5",
        "success-300": "#9ae6b4",
        "success-400": "#68d391",
        "success-500": "#38a169",
        "success-600": "#2f855a",
        "success-700": "#276749",
        "success-800": "#22543d",
        "success-900": "#1c4532",
        // warning is red in tailwind
        "warning": "#e53e3e",
        "warning-light": "#ef4444",
        "warning-dark": "#cc1f1a",
        "warning-100": "#fff5f5",
        "warning-200": "#fed7d7",
        "warning-300": "#feb2b2",
        "warning-400": "#fc8181",
        "warning-500": "#f56565",
        "warning-600": "#e53e3e",
        "warning-700": "#c53030",
        "warning-800": "#9b2c2c",
        "warning-900": "#742a2a",
      

      }
    },
  },
  fontFamily: {
    sans: ["Inter var", "Inter", "system-ui", "sans-serif"],
    serif: ["Georgia", "Cambria", "Times New Roman", "Times"],
  },
  plugins: [],
};
export default config;
