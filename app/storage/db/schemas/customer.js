const ObjectId = require('mongoose').Schema.Types.ObjectId;

const customerSchema = {
  country: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  },
  orders: [{
    type: ObjectId,
    default: []
  }],
  videos: {
    reactions_to: [{
      type: ObjectId,
      default: []
    }],
    liked: [{
      type: ObjectId,
      default: []
    }],
    obtained: [{
      type: ObjectId,
      default: []
    }]
  }
}

module.exports = customerSchema