const bodyparser = require('koa-bodyparser');
const busboy = require('koa-busboy');
const config = require('../config');
const crypto = require('../utils/cryptoUtil');

const busboyOptions = {
  dest: config.fs.imagePath,
  fnDestFilename: (fieldname, filename) =>
    crypto.getRandomString(16) + filename
}

module.exports = {
  body: () => bodyparser(),
  multipart: () => busboy(busboyOptions)
}