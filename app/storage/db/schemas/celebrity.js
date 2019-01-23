const ObjectId = require('mongoose').Types.ObjectId;

const celebritySchema = {
  nickname: {
    type: String,
    default: ''
  },
  categories: {
    type: [Number],
    /*
    // 0 (sports)
    // 1 (comedians)
    // 2 (musicians)
    // 3 (actors)
    // 4 (models)
    // 5 (bloggers)
    // 6 (tv-radio)
    // 7 (politics)
    // 8 (dj)
    // 9 (youtube-top)
    // 10 (for-children)
    */
    enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    default: []
  },
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
    type: String
  },
  // ORDERS FROM CUSTOMERS
  tasks: {
    type: [ObjectId],
  },
  // UPPLOADED VIDEOS
  videos: {
    own: {
      type: [ObjectId]
    },
    reactions_from: {
      type: [ObjectId]
    }
  },

}

module.exports = celebritySchema