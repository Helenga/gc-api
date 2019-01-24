const dbOperations = require('../storage/db/operations');
const AppException = require('../exceptions/appException');
const {isPasswordValid} = require('../utils/cryptoUtil');

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