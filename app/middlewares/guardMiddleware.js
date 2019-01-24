const AppException = require('../exceptions/appException');

module.exports = async (ctx, next) => {
  console.log('GUARD');
    const requiredRoleToPassGuard = ctx.url.match(/(\/.+\/)/)[0]
    if (requiredRoleToPassGuard !== '/admin/')
      throw new AppException("Access denied", 401)
    return next()
}