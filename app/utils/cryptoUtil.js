const crypto = require('crypto');

const encrypt = (password, salt) => {
  return crypto.pbkdf2Sync(password, salt, 1, 128, 'sha1').toString('base64')
}

exports.encryptPassword = (password) => {
  const salt = crypto.randomBytes(128).toString('base64')
  return {
    salt,
    hash: encrypt(password, salt)
  }
}

exports.isPasswordValid = (password, salt, hash) => {
  return encrypt(password, salt) == hash
}

exports.getRandomString = (length) => {
  return crypto.randomBytes(length).toString('hex')
}