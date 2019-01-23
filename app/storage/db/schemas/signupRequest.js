const validators = require('../validators');

const SignupRequestSchema = {
  requestor: {
    name: {
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
    type: Number,
    /*
    // 0: unchecked
    // 1: checking
    // 2: accepted
    // 3: denied
    // 4: completed
    */
    enum: [0, 1, 2, 3, 4],
    default: 0
  }
}

module.exports = SignupRequestSchema