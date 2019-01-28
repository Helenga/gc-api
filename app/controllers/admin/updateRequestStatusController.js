const jwtService = require('../../services/jwtService');
const {update} = require('../../storage/db/operations');

module.exports = async (ctx, next) => {
  await jwtService
    .getUserIdIfPermissions(['admin'], ctx, next)
  await update(
    'signupRequest',
    {_id: ctx.params.id},
    {status: ctx.request.body.status},
    'updateOne')
  return
}