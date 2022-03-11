module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {},
    fontFamily: {
      jura: ['Inconsolata', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
}
