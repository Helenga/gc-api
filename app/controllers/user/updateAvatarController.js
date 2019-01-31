const jwtService = require('../../services/jwtService');
const userService = require('../../services/userService');
const imageService = require('../../services/imageService');
const config = require('../../config');

module.exports = async (ctx, next) => {
  const {id} = await jwtService
    .getTokenInfoIfPermissions(['customer', 'celebrity'], ctx, next)
  const name = ctx.request.files[0].path.split('/').reverse()[0]
  userService.updateAvatar(id, name)
  const fileUri = `${config.host}:${config.port}/${name}`
  return {
    avatar: fileUri
  }
}