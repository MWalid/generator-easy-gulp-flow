import gulp from 'gulp';
import zip  from 'gulp-zip';
import del  from 'del';
import path from 'path';
import Config from './config';
var argv = require('yargs').argv;
const { exec } = require('child_process');


gulp.task('shell:chmod', (done) => {

    let _chmod = (dirs, i = 0) => {

        if (i === dirs.length) {
            return done();
        }

        exec(`chmod -R 755 ${dirs[i]}` , (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                console.log(err);
                return;
            }
            console.log(dirs[i]);
            // the *entire* stdout and stderr (buffered)
            // console.log(`stdout: ${stdout}`);
            // console.log(`stderr: ${stderr}`);
            _chmod(dirs, i + 1);
        });
    }

    _chmod(Config.publicFolders)
})

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
        '!config/database.php',
        '!vendor/bin{,/**}',
    ];

    if (argv.withConfig) {
        src = src.filter(src => src != '!config/database.php');
    }

    return gulp.src(src).pipe(zip(path.basename(Config.localCompressed)))
    .pipe(gulp.dest('./compressed/'));
});
