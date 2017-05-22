const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sasslint = require('gulp-sass-lint');
const minifyCSS = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const jslint = require('gulp-jslint');
const babel = require("gulp-babel");
const bower = require('gulp-bower');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('sass', function() {
  return gulp.src('./src/scss/*.scss')
  .pipe(sass())
  .pipe(minifyCSS({
    keepBreaks: true
  }))
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('./app/css'))
  .pipe(reload({
    stream: true
  }));
});

gulp.task('sasslint', function() {
  gulp.src(styles)
  .pipe(sasslint())
  .pipe(sasslint.format());
});

gulp.task('js', function() {
  return gulp.src('./src/app/**/*.js')
  .pipe(concat('all.min.js'))
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('./app/js'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('jslint', function() {
  gulp.src(scripts)
  .pipe(jslint());
});

gulp.task('html', function() {
  return gulp.src('./src/app/**/*.html')
  .pipe(gulp.dest('./app/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('bower', function() {
  return bower('bower_components')
  .pipe(gulp.dest('./app/lib/'));
});


gulp.task('build', function() {
  gulp.start(['bower', 'sass', 'js', 'html', 'assets'])
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('assets', function() {
  return gulp.src(['./src/assets/**/*.*'])
  .pipe(gulp.dest('./app'))
  .pipe(reload({
    stream: true
  }));
});


gulp.task('serve', function() {
  gulp.start(['build', 'browser-sync']);
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.html', ['html']);
  gulp.watch('./src/app/**/*.js', ['js']);
  gulp.watch("./src/assets/**/*.*", ['assets']);
});

gulp.task('default', ['serve']);
