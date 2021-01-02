module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pricetag': "url('/src/images/pricetag.svg')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
