import gulp from 'gulp';

import './sass.task';
import './js.task';
import './build.task';
import './watch.task';
import './zip.task';
import './ftp.task';
import './ssh.task';
import './deploy.task';


gulp.task('default', ['sass', 'watch']);
