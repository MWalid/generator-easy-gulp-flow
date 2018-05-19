import gulp  from 'gulp';
import shell from 'gulp-shell';
import fs from 'fs';
import Config from './config';
import runSequence from 'run-sequence';

gulp.task('upload', (done) => {

    let uploadTask = shell.task([ `scp -i ~/.ssh/id_rsa ${Config.localCompressed} ${Config.sshUser}@${Config.sshHost}:${Config.remoteCompressed}` ], {
        verbose: true
    });

    uploadTask(() => {
        done();
    });
});
