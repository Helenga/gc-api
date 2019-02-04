const cors = require('./corsMiddleware');
const parser = require('./parserMiddleware');
const logger = require('./loggerMiddleware');
const responseWrapper = require('./responseWrapperMiddleware');
const auth = require('./passportMiddleware');
const static = require('./staticMiddleware');

module.exports = {
  cors,
  parser,
  logger,
  responseWrapper,
  auth,
  static
}