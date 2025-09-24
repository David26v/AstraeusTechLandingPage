/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,jsx,ts,tsx}",        // ✅ Scans your App Router pages
      "./src/components/**/*.{js,jsx,ts,tsx}", // ✅ Your custom components (outside app/)
      "./src/app/components/**/*.{js,jsx,ts,tsx}", // ✅ Your components inside app/
      "./src/app/sections/**/*.{js,jsx,ts,tsx}", // ✅ Your sections (Hero, Features, etc.)
      "./src/components/ui/**/*.{js,jsx,ts,tsx}", // ✅ shadcn/ui components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }