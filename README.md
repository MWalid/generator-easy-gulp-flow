# generator-easy-gulp-flow [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Zip, FTP and SSH gulp flow to deploy your code.

This is the generator which keeps me lazy, it uses Gulp to compile my sass assets & compress my code then deploy it using FTP + SSH.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-easy-gulp-flow using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-easy-gulp-flow
```

Then generate your new workflow:

```bash
yo easy-gulp-flow
```

The following tasks are defined:
 * **build** compiles the js & sass
 * **deploy** build, zip, ftp then ssh.
 * **ftp** uploads the zipped project to the remote server
 * **js** compiles es future to es5
 * **sass** compiles sass into css
 * **ssh:unzip** unzips the uploaded file on the remote server
 * **watch:deploy** executes deploy task on local file change
 * **zip** compresses project sources

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [Mohammad Walid](walid.pro)


[npm-image]: https://badge.fury.io/js/generator-easy-gulp-flow.svg
[npm-url]: https://npmjs.org/package/generator-easy-gulp-flow
[travis-image]: https://travis-ci.org/MWalid/generator-easy-gulp-flow.svg?branch=master
[travis-url]: https://travis-ci.org/MWalid/generator-easy-gulp-flow
[daviddm-image]: https://david-dm.org/MWalid/generator-easy-gulp-flow.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/MWalid/generator-easy-gulp-flow
