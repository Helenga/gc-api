const ObjectId = require('mongoose').Schema.Types.ObjectId;

const orderSchema = {
  customer_id: {
    type: ObjectId,
    required: true
  },
  celebrity_id: {
    type: ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  finish_until: {
    type: Date,
    required: true
  },
  customer_info: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: false,
      default: ''
    },
    avatar: {
      type: String,
      required: false,
      default: ''
    }
  },
  status: {
    type: String,
    enum: [
      'new', 'accepted', 'denied', 'completed'
    ],
    default: 'new'
  }
}

module.exports = orderSchema