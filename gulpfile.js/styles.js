const { src, dest } = require('gulp');
const liveReload = require('gulp-livereload');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const paths = require('./paths');
// const sass = require('gulp-sass');



function stylesTask() {
    return src(['public/styles/reset.css', paths.default.stylesPath]) // change src for sass files
        .pipe(plumber(function (err) {
            console.log('styles task error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 8']
        }))
        .pipe(concat('styles.css')) // remove minify and concat for sass, sass does them
        .pipe(minifyCss())          // .pipe(sass())     
        .pipe(sourcemaps.write())
        .pipe(dest(paths.default.distPath))
        .pipe(liveReload());
}

exports.default = stylesTask;