const authService = require('../services/authService');
const signupService = require('../services/signupService');
const jwtService = require('../services/jwtService');

module.exports = async (ctx, next) => {
  const {hash, salt} = await authService
    .encryptPassword(ctx.request.body.password)
  const user = await signupService.signupUser({
    ...ctx.request.body,
    role: 'customer',
    hash,
    salt
  })
  const token = await jwtService.getTokenFor(user.role, user)
  return {
    token
  }
}