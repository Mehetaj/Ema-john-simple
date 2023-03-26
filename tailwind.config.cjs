/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1C2B35",
        
"secondary": "#f4ba90",
        
"accent": "#bc6d1e",
        
"neutral": "#1E2B34",
        
"base-100": "#F5EFF6",
        
"info": "#A1BAE2",
        
"success": "#37D79A",
        
"warning": "#A47F0E",
        
"error": "#F0476E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
