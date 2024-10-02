/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-text": "rgba(18, 18, 18, .08)",
        "base-text2": "rgb(18, 18, 18)",
        "forground": "rgba(255, 255, 255, .08)",
        "text": "#121212Bf",
        "alto": "#fadcdc",
      },
      backgroundImage: {
        "banner": "/assets/contact-us-banner.webp"
      }
    },
  },
  plugins: [],
};
