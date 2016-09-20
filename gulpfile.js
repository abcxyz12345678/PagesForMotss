'use strict';




var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

// compile sass
gulp.task('styles', function() {
    return sass('public/static/static_introduction/css/*.scss', {
            style: 'compressed'
        })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('public/static/*/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('public/static/static_introduction/css'))
        .pipe(notify({
            message: 'Styles task complete'
        }));
});


// default task
gulp.task('default', ['watch'], function() {
    //gulp.start('styles');
});


// watch
gulp.task('watch', function() {
  // Watch .scss files
  console.log("watch styles");
  gulp.watch('public/static/*/css/*.scss', ['styles']);

  // auto refresh
  livereload.listen();
  gulp.watch(['./public/**']).on('change', livereload.changed);
  gulp.watch(['./views/**']).on('change', livereload.changed);

});
