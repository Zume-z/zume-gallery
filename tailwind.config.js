module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
    fontFamily: {
      jura: ['Nb Grotesk Pro Mono', 'sans-serif'],
    },
    fontFamily: {
      Nb: ['Nb International Pro', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
