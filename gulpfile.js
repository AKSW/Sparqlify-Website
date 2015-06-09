var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('update', function(cb) {
  git.pull('origin', 'master', cb);
});

