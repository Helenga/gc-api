const cors = require('./corsMiddleware');
const parser = require('./parserMiddleware');
const logger = require('./loggerMiddleware');
const responseWrapper = require('./responseWrapperMiddleware');
const auth = require('./passportMiddleware');

module.exports = {
  cors,
  parser,
  logger,
  responseWrapper,
  auth
}