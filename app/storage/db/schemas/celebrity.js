const ObjectId = require('mongoose').Schema.Types.ObjectId;

const celebritySchema = {
  nickname: {
    type: String,
    default: '',
    unique: true
  },
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
  country: {
    type: String,
    default: ''
  },
  site: {
    type: String,
    default: ''
  },
  avatar: {
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
      type: ObjectId,
      default: []
    }],
    reactions_from: [{
      type: ObjectId,
      default: []
    }]
  }
}

module.exports = celebritySchema