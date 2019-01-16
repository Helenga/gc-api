exports.signup = async (ctx, next) => {
  ctx.accepts('json')
  ctx.status = 200
  ctx.body = {name: "user"}
}