const AppException = require('../exceptions/appException');

module.exports = async (ctx, next) => {
  try {
    const result = await next()
    ctx.body = {
      success: true,
      data: result
    }
  }
  catch(err) {
    errorMessage = err instanceof AppException ?
      err.message : "Unexpected exception occured."
    ctx.status = err.resCode || 500
    ctx.body = {
      success: false,
      message: errorMessage
    }
  }
}