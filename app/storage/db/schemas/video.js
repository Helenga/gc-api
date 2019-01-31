const ObjectId = require('mongoose').Schema.Types.ObjectId;

const videoSchema = {
  _authorId: {
    type: ObjectId,
    required: true
  },
  _ownerId: {
    type: ObjectId
  },
  name: {
    video: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      default: ''
    }
  },
  likes: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  }
}

module.exports = videoSchema