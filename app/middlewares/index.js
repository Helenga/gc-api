const cors = require('./corsMiddleware');
const bodyparser = require('./bodyparserMiddleware');
const logger = require('./loggerMiddleware');
const responseWrapper = require('./responseWrapperMiddleware');

module.exports = {
  cors,
  bodyparser,
  logger,
  responseWrapper
}