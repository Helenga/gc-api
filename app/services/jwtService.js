const config =  require('../config');
const jwt = require('jsonwebtoken');

exports.getTokenFor = (role, user) => new Promise(
  async (resolve, reject) => {
    try {
      const payload = {
        role: role,
        id: user._id
      }
      const token = jwt.sign(
        payload, config.jwt.secret,
        {expiresIn: config.jwt.expiresIn})
      resolve(`Bearer ${token}`)
    } catch (error) {
      reject(error)
    }
  }
)