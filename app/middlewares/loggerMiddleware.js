const koaBunyanLogger = require('koa-bunyan-logger');
const config = require('../config').log;
const bunyan = require('bunyan');

const {ensureFileExists} = require('../utils/fsUtil');

const logger = bunyan.createLogger({
  name: 'main',
  streams: [{
    type: 'rotating-file',
    path: ensureFileExists(config.path),
    level: config.level,
    period: 'daily',
    count: 5
  }],
  level: config.level,
  serializers: {
    req: reqSerializer,
    res: resSerializer,
    err: bunyan.stdSerializers.err
  }
})

const entry = () => koaBunyanLogger(logger)

function reqSerializer(ctx) {
  return {
    url: ctx.url,
    headers: ctx.request.headers,
    method: ctx.method,
    ip: ctx.ip,
    protocol: ctx.protocol,
    originalUrl: ctx.url,
    query: ctx.query
  }
}

function resSerializer(ctx) {
  return {
    statusCode: ctx.status,
    responseTime: ctx.responseTime,
    headers: ctx.response.headers
  }
}

const handler = () => function (ctx, next) {
  logger[config.level]({
    req: ctx,
    res: ctx,
    err: ctx
  })
  return next()
}

module.exports = {
  entry,
  handler
}