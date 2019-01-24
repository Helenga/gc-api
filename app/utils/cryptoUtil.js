const crypto = require('crypto');

const encrypt = (password, salt) => {
  return crypto.pbkdf2Sync(password, salt, 1, 128, 'sha1').toString('base64')
}

exports.encryptPassword = (password) => {
  return {
    salt: crypto.randomBytes(128).toString('base64'),
    hash: encrypt(password, salt)
  }
}

exports.isPasswordValid = (password, salt, hash) => {
  return encrypt(password, salt) == hash
}