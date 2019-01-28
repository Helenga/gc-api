const jwtService = require('../services/jwtService');
const authService = require('../services/authService');

module.exports = async (ctx, next) => {
  const user = await authService.findUserByCredentials({
    ...ctx.request.body
  })
  const token = await jwtService.getTokenFor(user.role, user)
  return {
    token
  }
}