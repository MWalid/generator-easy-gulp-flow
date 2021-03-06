import runSequence from 'run-sequence';
import gulp from 'gulp';

gulp.task('deploy', () => {
    return runSequence(
        'zip',
        'ssh:mkdir',
        'ftp',
        'ssh:unzip'
    );
});
