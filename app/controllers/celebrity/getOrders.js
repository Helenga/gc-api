const jwtService = require('../../services/jwtService');
const orderService = require('../../services/orderService');
const db = require('../../storage/db/operations');

module.exports = async (ctx, next) => {
  const {id} = await jwtService
    .getTokenInfoIfPermissions(['celebrity'], ctx, next)
  const orders = await db.find(
    {
      schemaName: 'order',
    },
    'find',
    {
      findBy: {
        celebrity_id: id, 
        status: ctx.params.status
      },
      projection: '-celebrity_id -customer_id -status',
      skip: ctx.params.skip,
      take: ctx.params.find
    }
  )
  return {
    orders,
    count: orders.length()
  }
}