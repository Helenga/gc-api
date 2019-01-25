const jwtService = require('../../services/jwtService');

module.exports = async (ctx, next) => {
  const userId = await jwtService
    .getUserIdIfPermissions(['admin'], ctx, next)
  return {
    requests: [userId]
  }
}