const signupRequestService = require('../services/signupRequestService');

module.exports = async (ctx, next) => {
  try {
    ctx.body = await signupRequestService
      .createSignupRequest({...ctx.request.body})
    return next()
  }
  catch (error) {
    ctx.status = 500
    ctx.body = 'Internal Server Error'
  }
}