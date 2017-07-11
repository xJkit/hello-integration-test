const gulp = require('gulp');
const testcafe = require('gulp-testcafe');
const prompt = require('gulp-prompt');

gulp.task('play', () => {
  return gulp.src('tests/*.js')
    .pipe(prompt.prompt({
      type: 'input',
      name: 'numbers',
      message: '請輸入測試的次數：'
    }, res => {
      process.env.NUMBERS = res.numbers;
    }))
    .pipe(testcafe({
      browsers: ['safari'],
    }));
});

gulp.task('default', ['play']);