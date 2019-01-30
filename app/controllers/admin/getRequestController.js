const jwtService = require('../../services/jwtService');
const db = require('../../storage/db/operations');

module.exports = async (ctx, next) => {
  await jwtService
    .getTokenInfoIfPermissions(['admin'], ctx, next)
  const request = await db.find(
    {schemaName: 'signupRequest'},
    'findById',
    {findBy: ctx.params.id}
  )
  return {
    request
  }
}