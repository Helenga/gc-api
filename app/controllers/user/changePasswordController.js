const jwtService = require('../../services/jwtService');
const db = require('../../storage/db/operations');

module.exports = async (ctx, next) => {
  const userId = await jwtService
    .getUserIdIfPermissions(['customer', 'celebrity'], ctx, next)
  const user = await db.find('user', {_id: userId}, 'findOne')
  return {
    user
  }
}