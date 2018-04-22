'use strict';
var gulp = require('gulp');
var owsTasks = require('@wedontknowjs/ows-build');
owsTasks('bch', 'message');
gulp.task('default', ['lint', 'coverage']);
