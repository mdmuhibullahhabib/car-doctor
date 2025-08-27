/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default tailwindConfig = {

}
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--)"
      },
    },
  },
  plugins: [
    daisyui
  ],
};