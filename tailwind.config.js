/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 20s linear infinite",
        scrollRight: "scrollRight 20s linear infinite",
      },
      colors: {
        section: {
          alt: "#0F0F0F",
        },
        neon: "#9DFF3A",
        "neon-light": "#A9FF5A",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(255deg, rgba(0, 0, 0, 1) 39%, rgba(25, 8, 92, 1) 111%, rgba(0, 0, 0, 1) 100%)"
      },
    },
  },
  plugins: [],
};
