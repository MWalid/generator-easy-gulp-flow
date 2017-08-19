import gulp  from 'gulp';
import shell from 'gulp-shell';
import fs from 'fs';
import Config from './config';
import del from 'del';
import runSequence from 'run-sequence';

function createFtpShellFile() {
    let template = fs.readFileSync('gulp/shell/ftp.sh.template').toString();
    // console.log(template);
    template = template.replace('${HOST}', Config.ftpHost);
    template = template.replace('${USER}', Config.ftpUser);
    template = template.replace('${PASSWD}', Config.ftpPassword);
    template = template.replace('${LOCAL_COMPRESSED}', Config.localCompressed);
    template = template.replace('${REMOTE_COMPRESSED}', Config.remoteCompressed);

    fs.writeFileSync('gulp/shell/ftp.sh', template);
}

gulp.task('ftp', (done) => {

    createFtpShellFile();

    let ftpUpload = shell.task([ 'bash gulp/shell/ftp.sh' ], {
        verbose: true
    });

    ftpUpload(() => {
        del.sync('gulp/shell/ftp.sh');
        done();
    });
});
