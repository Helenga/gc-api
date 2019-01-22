const Koa = require('koa');
const config = require('./config');
const middlewares = require('./middlewares');
const router = require('./router/routes');

const app = new Koa()

// MIDDLEWARE PIPE
app.use(middlewares.logger.entry())
app.use(middlewares.logger.handler())
app.use(middlewares.cors())
app.use(middlewares.bodyparser())
app.use(middlewares.responseWrapper)

// ROUTER SETUP
app.use(router.routes())
app.use(router.allowedMethods())

require('./storage/db');

// SUPPRESS DEFAULT ERROR OUTPUT
app.on('error', function(){})

// START SERVER
app.listen(
  config.port,
  config.host,
  console.log(`Server started at ${config.host}:${config.port}`)
)