const koa = require('koa');
const config = require('./config/index');
const router = require('./routes');

const cors = require('@koa/cors');

const app = new koa()

// MIDDLEWARE PIPE FOR EVERY PATH

app.use(
  cors({
    origin: config.cors_origin,
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH']
  })
)

app.use(async (ctx, next) => {
  console.log('ctx :', ctx.host);
  next()
})

app.use(router.routes())
app.use(router.allowedMethods())

// START SERVER

app.listen(
  config.port,
  config.host,
  console.log(`Server started at ${config.host}:${config.port}`)
)