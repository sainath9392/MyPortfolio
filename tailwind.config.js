// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // You can define a custom 'xs' breakpoint if needed,
      // though Tailwind's mobile-first approach often negates the need for it.
      screens: {
        xs: "475px", // Example custom 'xs' breakpoint
      },
    },
  },
  plugins: [],
};
