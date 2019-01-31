const AppException = require('../exceptions/appException');
const db = require('../storage/db/operations');

exports.addVideo = (authorId, data ) => new Promise(
  async (resolve, reject) => {
    try {
      const video = db.create(
        {schemaName: 'video'},
        {
          _authorId: authorId,
          name: {
            video: data.videoName,
            cover: video.coverName
          }
        }
      )
      resolve(video)
    } catch (error) {
      reject(error)
    } 
  }
)