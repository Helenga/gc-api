const jwtService = require('../../services/jwtService');
const db = require('../../storage/db/operations');

module.exports = async (ctx, next) => {
  const {id, role} = await jwtService
    .getTokenInfoIfPermissions(['celebrity'], ctx, next)
  const videoName = ctx.request.files[0].path.split('/').reverse()[0]
  const video = await db.create(
    {schemaName: 'video'},
    {
      _authorId: id,
      'name.video': videoName
    })
  await db.update(
    {
      schemaName: 'user',
      extendingSchemaName: role
    },
    'updateOne',
    {
      findBy: {_id: id},
      updateFields: {$push: {
        'videos.own.$.name.video': video.name.video,
        'videos.own.$.name.cover': video.name.cover,
        'videos.own.$.likes': video.likes,
        'videos.own.$.views': video.views
    }}
    }
  )
  return {
    video
  }
}