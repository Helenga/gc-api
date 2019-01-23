const ObjectId = require('mongoose').Types.ObjectId;

const customerSchema = {
  country: {
    type: String
  },
  avatar: {
    type: String
  },
  orders: {
    type: [ObjectId]
  },
  videos: {
    reactions_to: {
      type: [ObjectId]
    },
    liked: {
      type: [ObjectId]
    },
    obtained: {
      type: [ObjectId]
    }
  }


}

module.exports = customerSchema