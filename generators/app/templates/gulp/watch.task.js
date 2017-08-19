import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('_watch:deploy', () => {
    return gulp.watch([
      './themes/**/*',
      './plugins/**/*'
    ], ['deploy']);
});

gulp.task('watch:deploy', () => {
    return runSequence(
        'deploy',
        '_watch:deploy'
    );
});
