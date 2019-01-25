const signupRequestService = require('../services/signupRequestService');

module.exports = async (ctx, next) => {
    const signupRequest = await signupRequestService
      .createSignupRequest({...ctx.request.body})
    return {
      _id: signupRequest._id
    }
}