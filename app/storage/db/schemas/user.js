const validators = require('../validators');

const userSchema = {
  nickname: {
    type: String,
    default: '',
    unique: true
  },
  role: {
    type: String,
    enum: [
      'customer', 'celebrity'
    ],
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  email: {
    type: String,
    validate: {
      validator: validators.email,
      message: props => `${props.value} is not a valid email`
    },
    default: ''
  },
  phone: {
    type: String,
    validate: {
      validator: validators.phone,
      message: props => `${props.value} is not a valid phone number`
    },
    default: ''
  },
  name: {
    first: {
      type: String,
      required: true
    },
    second: {
      type: String,
      required: true
    }
  },
  country: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  }
}

module.exports = userSchema