/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "clamp-60": "clamp(38px, 6vw, 60px)",
        "clamp-50": "clamp(32px, 5vw, 50px)",
        "clamp-45": "clamp(28px, 4.5vw, 45px)",
        "clamp-36": "clamp(26px, 3.6vw, 36px)",
        "clamp-26": "clamp(18px, 2.6vw, 26px)",
        "clamp-18": "clamp(14px, 1.80vw, 18px)",
        "clamp-16": "clamp(12px, 1.6vw, 16px)",
      },
    },
  },
  plugins: [],
};
