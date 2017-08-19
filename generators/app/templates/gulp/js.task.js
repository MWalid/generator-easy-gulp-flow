import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('js', () => {
    return gulp.src('./js-future/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('js'));
});
