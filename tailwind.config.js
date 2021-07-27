module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'back': "url('/public/paper.svg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
