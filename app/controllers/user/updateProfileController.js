const jwtService = require('../../services/jwtService');
const userService = require('../../services/userService');

module.exports = async (ctx, next) => {
  const {id} = await jwtService
    .getTokenInfoIfPermissions(['customer', 'celebrity'], ctx, next)
  const updatedUser = await userService.updateProfileData(
    id,
    {...ctx.request.body}
  )
  return {
    user: updatedUser
  }
}