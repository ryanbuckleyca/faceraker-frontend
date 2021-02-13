module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pricetag': "url('images/pricetag.svg')"
      }),
      colors: {
        teal: '#00C4D0',
        beige: '#FFF5E0'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
