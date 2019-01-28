const jwtService = require('../../services/jwtService');
const signupService = require('../../services/signupService');
const authService = require('../../services/authService');

module.exports = async (ctx, next) => {
  await jwtService
    .getUserIdIfPermissions(['admin'], ctx, next)
  const passwordSet = await authService.generatePassword()
  const celebrity = await signupService.signupUser({
      ...ctx.request.body,
      role: 'celebrity',
      ...passwordSet
    })
  return {
    credentials: {
      login: celebrity.email || celebrity.phone,
      password: passwordSet.password
    }
  }
}