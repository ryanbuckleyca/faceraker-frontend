module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pricetag': "url('/src/images/pricetag.svg')"
       }),
      colors: {
        teal: '#00C4D0'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
