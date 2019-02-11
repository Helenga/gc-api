const ObjectId = require('mongoose').Schema.Types.ObjectId;

const celebritySchema = {
  categories: [{
    type: String,
    enum: [
      'sports', 'comedians', 'musicians',
      'actors', 'models', 'bloggers',
      'tv-radio', 'politics', 'dj',
      'youtube-top', 'for-children'
    ],
    default: []
  }
],
  info: {
    type: String,
    maxLength: 160,
    default: ''
  },
  site: {
    type: String,
    default: ''
  },
  // ORDERS FROM CUSTOMERS
  tasks: [{
    type: ObjectId,
    default: []
  }],
  // UPPLOADED VIDEOS
  videos: {
    own: [{
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
    }],
    reactions_from: [{
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
    }]
  }
}

module.exports = celebritySchema