const authService = require('../../services/authService');

module.exports = async (ctx, next) => {
    const token = await authService
      .verifyCredentials({...ctx.request.body})
    return {
      token: token
    }
}