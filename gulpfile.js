/*global require*/
var gulp = require('gulp');

var qunit = require('gulp-qunit');
var size = require('gulp-size');

gulp.task('size', function(){
    return gulp.src('psi.js').pipe(size());
});

gulp.task('watch', function() {
    gulp.watch('psi.js', ['size', 'test']);
    
    gulp.watch('test/psi_test.js', ['test']);
});


gulp.task('test', function() {
    return gulp.src('./test/runner.html').pipe(qunit());
});

gulp.task('default', ['test', 'size', 'watch']);
