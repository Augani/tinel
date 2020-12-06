module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      top:{
        '-1':'-1rem',
        '-2':'-2rem',
        '-3':'-3rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

