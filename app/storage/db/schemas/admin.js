
const AdminSchema = {
  login: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  }
}

module.exports = AdminSchema