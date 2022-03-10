module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false,
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
}
