import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 
    extend: {
      colors: {
        primary: "#660000",
        secondry: "#444444",
        secondary: "#ffb921",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(2px)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      animation: {
        float: 'float 1s infinite ease-in-out',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    // styled: true,
    // themes: false, // لتعطيل الأنماط الافتراضية الخاصة بـ daisyUI
    // base: false, // لتعطيل الأنماط الأساسية التي تؤثر على الـ body
    // utils: true,
    // logs: true,
    // rtl: false,
    // prefix: "",
    // darkTheme: "light",
  },
}