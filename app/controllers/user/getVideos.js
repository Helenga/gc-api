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
    'find',
    {
      findBy: {_id: id},
      projection: '-hash -salt -__v -updated_at -created_at -_id'
    }
  )
  return {
    user
  }
}