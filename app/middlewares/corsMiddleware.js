const cors = require('@koa/cors');
const config = require('../config');

module.exports = () => cors({
  origin: config.cors_origin,
  allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH']
})