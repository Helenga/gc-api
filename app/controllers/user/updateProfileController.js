const jwtService = require('../../services/jwtService');
const db = require('../../storage/db/operations');
const userService = require('../../services/userService');

module.exports = async (ctx, next) => {
  const userId = await jwtService
    .getUserIdIfPermissions(['customer', 'celebrity'], ctx, next)
  const updatedUser = await userService.updateProfileData(
    userId,
    {...ctx.request.body}
  )
  return {
    user: updatedUser
  }
}