const validators = require('../validators');

const userSchema = {
  role: {
    type: Number,
    /*
    // 0: customer
    // 1: celebrity
    */
    enum: [0, 1],
    required: true
  },
  password: {
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
  profile:
    (function() {
      this.profile = this.role === 0 ?
        require('./customer') :
        require('./celebrity')
    })()
}

module.exports = userSchema