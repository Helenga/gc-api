const jwtService = require('../../services/jwtService');
const db = require('../../storage/db/operations');

module.exports = async (ctx, next) => {
  await jwtService
    .getTokenInfoIfPermissions(['admin'], ctx, next)
  const dbQuery = {status: ctx.query['status']} || {}
  const requests = await db.find(
    {schemaName: 'signupRequest'},
    'find',
    {findBy: dbQuery}
  )
  return {
    requests
  }
}