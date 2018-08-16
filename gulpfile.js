/*
Basic Gulp Workflow v0.6.0
Created by: Ngoc Tu Nguyen <nguyenngoct2112@gmail.com>
Github Repo: https://github.com/tomasvn/gulp-project.git
**/

/*
Gulp Plugins
**/

var gulp = require('gulp')
var sass = require('gulp-sass')
var gulpConfig = require('./gulp-config.js')
var autoprefixer = require('gulp-autoprefixer')
var cssnano = require('gulp-cssnano')
var browserSync = require('browser-sync').create() // Create browser sync instance
var del = require('del')
var useref = require('gulp-useref')
var uglify = require('gulp-uglify')
var gulpIf = require('gulp-if')
var imagemin = require('gulp-imagemin')

/**
Gulp config variables
*/

var src = gulpConfig.paths.src
var dist = gulpConfig.paths.dist
var distRoot = gulpConfig.paths.distRoot
var srcRoot = gulpConfig.paths.srcRoot

/**
Developement Tasks
*/

gulp.task('dev:styles', function () { // First argument is the name of the task, second argument callback function
  return gulp.src(src.stylesFiles) // Look into this folder for any SCSS files
    .pipe(sass())
    .pipe(sass.sync().on('error', sass.logError)) // If SCSS syntax has any error output it to the CLI
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest(src.stylesOutput)) // Compile SCSS files into one CSS file, output it here
    .pipe(browserSync.stream())
})

gulp.task('watch', ['dev:styles'], function () {
  browserSync.init({ // Initialize browser sync
    server: srcRoot // Input folder we want to serve to the browser
  })

  gulp.watch(src.stylesFiles, ['dev:styles']) // Watch - it will run the styles task on file change
  gulp.watch(src.htmlFiles).on('change', browserSync.reload) // Watch changes in HTML file and reload it browser
})

/**
Build Tasks
*/

gulp.task('build:static', function () {
  return gulp.src(src.htmlFiles)
    .pipe(useref()) // Concat files to single file
    .pipe(gulpIf('*.js', uglify())) // Minify only if it is a JS file
    .pipe(gulp.dest(distRoot))
})

gulp.task('build:styles', function () {
  return gulp.src(src.stylesFiles)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest(dist.stylesDist))
})

gulp.task('optimize', function () {
  return gulp.src(src.imgFiles)
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [{removeDoctype: true}, {removeDesc: true}, {removeViewBox: true}]
      })
    ]))
    .pipe(gulp.dest(dist.imgDist))
})

gulp.task('build', ['build:static', 'build:styles', 'optimize'])

/**
Clean Tasks
*/

gulp.task('clean:dev', function () {
  return del([src.stylesOutput])
})

gulp.task('clean', function () {
  return del(['dist']) // Delete dist folder
})