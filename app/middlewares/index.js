const cors = require('./corsMiddleware');
const bodyparser = require('./bodyparserMiddleware');
const logger = require('./loggerMiddleware');
const responseWrapper = require('./responseWrapperMiddleware');
const auth = require('./passportMiddleware');
const guard = require('./guardMiddleware');

module.exports = {
  cors,
  bodyparser,
  logger,
  responseWrapper,
  auth,
  guard
}