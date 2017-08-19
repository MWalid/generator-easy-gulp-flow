'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to ' + chalk.red('easy-gulp-flow') + ' generator!'
        ));

        let self = this;

        const prompts = [{
            type: 'input',
            name: 'ftpHost',
            message: function(answers) {
                return 'I need your FTP host';
            },
            validate: function(value) {
                return !!value;
            }
        }, {
            type: 'input',
            name: 'ftpUser',
            message: 'I need your FTP user',
            validate: function(value) {
                return !!value;
            }
        },{
            type: 'input',
            name: 'ftpPassword',
            message: 'I need your FTP password',
            validate: function(input) {
                return !!input;
            }
        },{
            type: 'input',
            name: 'remoteDirectory',
            message: 'Remote directory path on the server (must be ending with trailing slash)',
            validate: function(input) {
                if (!input.match(/.*\/$/)) {
                    return false;
                }
                return true;
            },
            default: 'public_html/'
        }, {
            type: 'input',
            name: 'sshHost',
            message: 'I need your SSH host',
            default: function(answers) {
                return answers.ftpHost;
            }
        }, {
            type: 'input',
            name: 'sshUser',
            message: 'I need your SSH user',
            default: function(answers) {
                return answers.ftpUser;
            }
        }, {
            type: 'input',
            name: 'sshPassword',
            message: 'I need your SSH password',
            default: function(answers) {
                return answers.ftpPassword;
            }
        }, {
            type: 'input',
            name: 'sshPort',
            message: 'I need your SSH port',
            default: '22',
            validate: function(input) {
                return !!input.match(/^\d*$/g);
            }
        }, {
            type: 'input',
            name: 'publicFolders',
            message: 'I need your public folders (comma separtated) to `chmod -R 755` on them'
        }];

        return this.prompt(prompts).then(props => {
            props.publicFolders = JSON.stringify(props.publicFolders.replace(/ /g, '').split(','));
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {

        this.fs.copyTpl(
            this.templatePath('gulp/**'),
            this.destinationPath('gulp'),
            this.props
        );

        this.fs.copy(
            this.templatePath('gulpfile.babel.js'),
            this.destinationPath('gulpfile.babel.js')
        );

        this.fs.copy(
            this.templatePath('.babelrc'),
            this.destinationPath('.babelrc')
        );

    }

    install() {
        this.installDependencies();
    }

    installDependencies() {

        this.npmInstall([
            "babel-core",
            "babel-preset-es2015",
            "del",
            "gulp",
            "gulp-autoprefixer",
            "gulp-babel",
            "gulp-sass",
            "gulp-shell",
            "gulp-ssh",
            "gulp-zip",
            "run-sequence",
            "browser-sync",
        ], { 'save-dev': true });
    }
};
