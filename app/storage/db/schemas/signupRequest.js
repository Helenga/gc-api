// const Mongoose = require('mongoose');
// const timestamp = require('mongoose-timestamp');

// const Schema = new Mongoose.Schema(
const SignupRequestSchema = {
  requestor: {
    name: {
      first: {
        type: String,
        trim: true,
        required: true
      },
      last: {
        type: String,
        trim: true,
        required: true
      }
    },
    email: {
      type: String,
      default: ""
    },
    phone: {
      type: String,
      validate: {
        validator: function(v) {
          return /\{\d}*/.test(v)
        },
        message: props => `${props.value} is not a valid phone number`
      }
    }
  }
}
// )
// Schema.plugin(timestamp)

// module.exports = Mongoose.model('SignupRequest', Schema)

module.exports = SignupRequestSchema