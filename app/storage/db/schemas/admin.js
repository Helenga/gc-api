

const AdminSchema = {
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}

module.exports = AdminSchema