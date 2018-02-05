const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync');

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });
  watch('./app/*.html', function() {
    browserSync.reload();
  });
  watch('./app/assets/scss/**/', function() {
    gulp.start('cssInject');
  });
  watch('./app/assets/js/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });
});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/css/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});