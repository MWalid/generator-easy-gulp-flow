import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('_watch:deploy:theme', () => {
    return gulp.watch([
      './themes/**/*',
      './plugins/**/*'
    ], ['deploy:theme']);
});

gulp.task('watch:deploy:theme', () => {
    return runSequence(
        'deploy:theme:light',
        '_watch:deploy:theme'
    );
});
gulp.task('watch:deploy', ['watch:deploy:theme']);
