/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "erie-black": "#1b1d1f",
        "raisin-black": "#26282B",
        "outer-space": "#454C53",
        "slate-gray": "#72787F",
        "flash-white": "#FBFBFB",
        "text-gray": "#3F4244",
      },
    },
  },
  plugins: [],
}
