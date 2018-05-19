import gulp from 'gulp';
import zip  from 'gulp-zip';
import del  from 'del';
import path from 'path';
import Config from './config';
var argv = require('yargs').argv;


gulp.task('zip', () => {

    del.sync('./compressed');

    var src = [
        './**/*',
        '!gulpfile.babel.js',
        '!./gulp{,/**}',
        '!./sass{,/**}',
        '!./tests{,/**}',
        '!./node_modules{,/**}',
        '!./package.json',
        '!_*{,/**}',
        '!js-future{,/**}',
        '.htaccess',
        '*.php',
        '!vendor/bin{,/**}',
    ];

    return gulp.src(src, {
        base: './'
    }).pipe(zip(path.basename(Config.localCompressed)))
    .pipe(gulp.dest('./compressed/'));
});
