module.exports = {
  paths: {
    src: {
      imgFiles: './src/images/*.+(png|jpg|gif|svg)',
      stylesFiles: './src/scss/*.scss',
      stylesOutput: './src',
      htmlFiles: './src/*.html',
      jsFiles: '.src/js/*.js',
      fontsFiles: '.src/fonts/**/*'
    },
    dist: {
      imgDist: './dist/images',
      stylesDist: 'dist/styles',
      jsDist: './dist/js/',
      fontsDist: '/dist/fonts'
    },
    srcRoot: './src',
    distRoot: './dist'
  }
}
