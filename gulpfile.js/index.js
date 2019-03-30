// Gulp 4, new pattern
const { parallel, watch, series } = require('gulp');
const liveReload = require('gulp-livereload');
const del = require('del');

const stylesTask = require('./styles');
const scriptsTask = require('./scripts');
const imagesTask = require('./images');
const paths = require('./paths');

function watchFiles() {
    console.log('starting watch task');
    require('./../server.js');
    liveReload.listen();
    watch(paths.default.scriptsPath, scriptsTask.default);
    watch(paths.default.stylesPath, stylesTask.default);
}

async function clean() {
    return del.sync(
        [
            paths.default.distPath
        ]
    );
}

var build = series(clean, parallel(scriptsTask.default, stylesTask.default, imagesTask.default), watchFiles);
exports.default = build;


