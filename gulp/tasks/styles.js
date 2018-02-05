const gulp = require('gulp'),
notify = require('gulp-notify'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer');

const onError = function (errorMsg) {
  notify({
    title: 'Gulp Task Error',
    message: 'Check the console.'
  }).write(errorMsg);

  console.log(errorMsg.toString());

  this.emit('end');
}

gulp.task('styles', function() {
  return gulp.src(
    [
      './app/assets/scss/custom.scss', 
      'node_modules/bootstrap/scss/bootstrap.scss', 
      './app/assets/scss/styles.scss'
    ]).pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(postcss([autoprefixer]))
    .on('error', onError)
    .pipe(gulp.dest('./app/temp/css'));
});