import gulp from 'gulp';
import GulpSSH from 'gulp-ssh';
import Config from './config';

function shell(commands) {

    let logDir          = 'gulp/shell/logs',
        d               = new Date(),
        logFileName     = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}-${Date.now()}.log`;

    return gulpSSH().shell(commands,
        {
            filePath: logFileName
        }
    ).pipe(gulp.dest(logDir));
}

function gulpSSH() {
    let gulpSSH = new GulpSSH({
        sshConfig: {
            host: Config.sshHost,
            username: Config.sshUser,
            password: Config.sshPassword,
            port: Config.sshPort
        }
    });
    return gulpSSH;
}

gulp.task('ssh:unzip', () => {

    return shell([
        `unzip -o ${Config.remoteCompressed} -d ${Config.remoteDirectory}`
    ]);

});

gulp.task('ssh:mkdir', () => {

    return shell([
        `mkdir -p ${Config.remoteDirectory}`
    ]);

});

gulp.task('ssh:chmod', () => {

    let commands = Config.publicFolders.map((folder) => {
        return `chmod -R 755 ${Config.remoteDirectory}${folder}`
    })
    
    return shell(commands);
})

gulp.task('ssh:require-functions', () => {
    return shell([
        `file=\`cat ${Config.themeBase}functions.php\``,
        `pattern="code/functions.code.php"`,

        `if [[ "$file" =~ "$pattern" ]]`,
            `then echo 'require already exists doing nothing...'`,
            `else printf '\n\n//auto included by the build system\nrequire_once "code/functions.code.php";' >> ${Config.themeBase}functions.php`,
        `fi`
    ]);
});
