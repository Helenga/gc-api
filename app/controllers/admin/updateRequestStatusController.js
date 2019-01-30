const jwtService = require('../../services/jwtService');
const db = require('../../storage/db/operations');

module.exports = async (ctx, next) => {
  await jwtService
    .getTokenInfoIfPermissions(['admin'], ctx, next)
  await db.update(
    {schemaName: 'signupRequest'},
    'updateOne',
    {
      findBy: {_id: ctx.params.id},
      updateFields: {status: ctx.request.body.status}
    }
  )
  return
}