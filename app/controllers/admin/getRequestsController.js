const jwtService = require('../../services/jwtService');
const {find} = require('../../storage/db/operations');

module.exports = async (ctx, next) => {
  await jwtService
    .getUserIdIfPermissions(['admin'], ctx, next)
  const requests = await find('signupRequest', {}, 'find')
  return {
    requests
  }
}