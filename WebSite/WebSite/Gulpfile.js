/// <binding Clean='clean' />
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path');

var paths = {
    css: "./wwwroot/css",
    sass: "./wwwroot/sass"
};



// prepare LESS files
gulp.task("sass-to-css", function () {
    return gulp
        .src(paths.sass + "/*.scss")
        .pipe(sass())
        .pipe(gulp.dest(paths.css));
});

