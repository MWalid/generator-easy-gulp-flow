import gulp from 'gulp';
import sass from 'gulp-sass';
import del  from 'del';
import autoprefixer from 'gulp-autoprefixer';

var browserSync = require('browser-sync').create();

gulp.task('sass', () => {

    // clear current working directory
    del.sync('dist/css/');

    return gulp.src('./sass/main.scss')
    .pipe( sass({outputStyle: 'expanded'}).on('error', sass.logError) )
    .pipe( autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}) )
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
