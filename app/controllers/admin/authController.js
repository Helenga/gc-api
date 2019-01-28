const authService = require('../../services/authService');
const jwtService = require('../../services/jwtService');

module.exports = async (ctx, next) => {
    const admin = await authService
      .verifyCredentialsOf('admin', {...ctx.request.body})
    const token = await jwtService
      .getTokenFor('admin', admin)
    return {
      token
    }
}