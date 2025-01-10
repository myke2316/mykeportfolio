/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "noise-pattern": "url('../public/noise.png')",
        "linked-in": "url('../public/linkedin.svg')",
        "profile-pic": "url('../public/profile.PNG')",
      },
      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
        caret:
          "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 15px #fbbf24, 0 0 30px #f59e0b" },
          "50%": { boxShadow: "0 0 20px #fbbf24, 0 0 40px #f59e0b" },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1440px", // Customized lg breakpoint
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
