module.exports = ({ file, options, env }) => ({
  plugins: {
    'postcss-preset-env': env === 'production' ? {} : false,
    'cssnano': env === 'production' ? {} : false
  }
})