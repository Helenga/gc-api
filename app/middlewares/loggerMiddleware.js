const bunyanLogger = require('koa-bunyan-logger');
const config = require('../config').log;


const entry = () => bunyanLogger({
  level: config.level
})

const handler = () => function (ctx, next) {
  ctx.log[config.level]('Got a request from %s for %s',
    ctx.request.ip, ctx.path)
  return next()
}

module.exports = {
  entry,
  handler
}