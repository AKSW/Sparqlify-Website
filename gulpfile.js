var gulp = require('gulp');
var git = require('gulp-git');
var bower = require('gulp-bower');
var inject = require('gulp-inject');

gulp.task('update', function(cb) {
  git.pull('origin', 'master', cb);
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('public/www/bower_components'))
});

gulp.task('index', function () {
  var target = gulp.src('./public/_layout.ejs');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./public/www/bower_components/**/*.js', './public/www/bower_components/**/*.css'], {read: false}, {relative : true});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./public'));
});

