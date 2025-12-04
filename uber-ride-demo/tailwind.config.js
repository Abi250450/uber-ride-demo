/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#111827',
          400: '#1f2937',
        },
        accent: {
          500: '#22c55e',
        },
      },
    },
  },
  plugins: [],
}
