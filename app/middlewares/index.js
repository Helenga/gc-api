const cors = require('./corsMiddleware');
const bodyparser = require('./bodyparserMiddleware');
const logger = require('./loggerMiddleware');

module.exports = {
  cors,
  bodyparser,
  logger
}