const jwtService = require('../../services/jwtService');
const db = require('../../storage/db/operations');

module.exports = async (ctx, next) => {
  const {id, role} = await jwtService
    .getTokenInfoIfPermissions(['customer', 'celebrity'], ctx, next)
  const user = await db.find(
    {
      schemaName: 'user',
      extendingSchemaName: role
    },
    'findOne',
    {
      findBy: {_id: id}
    })
  return {
    user
  }
}