const dbOperations = require('../storage/db/operations');
const AppException = require('../exceptions/appException');
const {isPasswordValid, getRandomString,
  encryptPassword} = require('../utils/cryptoUtil');
const config = require('../config');

exports.findUserByCredentials = ({
  login,
  password
}) => new Promise(
  async (resolve, reject) => {
    try {
      const dbQuery = { $or: [
        {email: login},
        {phone: login}
      ]}
      const user = await dbOperations.find('user', dbQuery, 'findOne')
      if (!user)
        throw new AppException("User not found", 404)
      if (!isPasswordValid(password, user.salt, user.hash))
        throw new AppException("Invalid credentials", 401)
      resolve(user)
    } catch (error) {
      reject(error)
    }
  }
)

exports.verifyCredentialsOf = (role, {
  login,
  password
}) => new Promise(
  async (resolve, reject) => {
    try {
      const user = await dbOperations.find(
        role, {login}, 'findOne')
      if (user && isPasswordValid(password, user.salt, user.hash))
        resolve(user)
      else
        throw new AppException(`User with login '${login}' not found`, 404)
    } catch (error) {
      reject(error)
    }
  }
)

exports.encryptPassword = (password) => new Promise(
  async (resolve, reject) => {
    try {
      const encrypted = await encryptPassword(password)
      resolve(encrypted)
    } catch (error) {
      reject(error)
    }
  }
)

exports.generatePassword = () => new Promise(
  async (resolve, reject) => {
    try {
      const password = await getRandomString(
        config.domain.celebrity.signupPasswordLength)
      const encrypted = await encryptPassword(password)
      resolve({password, ...encrypted})
    } catch (error) {
      reject(error)
    }
  }
)