"use strict";

const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const eslint = require('gulp-eslint');

gulp.task('publish', ['lint', 'compile']);

gulp.task('compile', ['clean'], () =>
  gulp.src('src/**/*.js')
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(gulp.dest('lib'))
);

gulp.task('clean', () =>
  gulp.src('lib/')
      .pipe(clean())
);

gulp.task('lint', () =>
  gulp.src(['src/**/*.js', 'test/src/**/*.js'])
      .pipe(eslint({
        parser: 'babel-eslint',
        rules: {
          strict: 0
        }
      }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
);
