// In case you get an error message that says...
// Did you forget to signal async completion?
// Find the solution here https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async

var gulp = require('gulp');

// styles

gulp.task('styles', async function() {
    console.log('starting styles task');
})

gulp.task('scripts', async function() {
    console.log('starting scripts task');
})


gulp.task('images', async function() {
    console.log('starting images task');
})


gulp.task('default', async function() {
    console.log('starting default task');
})