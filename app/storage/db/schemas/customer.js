const ObjectId = require('mongoose').Schema.Types.ObjectId;

const customerSchema = {
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