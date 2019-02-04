const validators = require('../validators');

const SignupRequestSchema = {
  requestor: {
    name: {
      type: String,
      required: true,
      max: 150
    },
    surname: {
      type: String,
      required: true,
      max: 150
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
    }
  },
  status: {
    type: String,
    enum: [
      'unchecked', 'checking', 'accepted', 'denied', 'completed'
    ],
    default: 'unchecked'
  }
}

module.exports = SignupRequestSchema