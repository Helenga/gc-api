const koaStatic = require('koa-static-server');
const config = require('../config');

const options = {
  rootDir: '../../../store',
  rootPath: '/'
}

module.exports = () => koaStatic(options)