'use strict';

// var gulp = require('gulp');
// var del = require('del');
// var gulpLoadPlugins = require('gulp-load-plugins');
// var plugins = gulpLoadPlugins;
//
// gulp.task('help', plugins.taskListing);
//
// gulp.task('clean', function (cb) {
//   return del(['bower_components/build'], cb);
// });


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
      return gulp.src('public/static/*/css/*.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('public/static/*/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('public/static/*/css'))
        .pipe(notify({ message: 'Styles task complete' }));
    });
