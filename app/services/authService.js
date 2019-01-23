const dbOperations = require('../storage/db/operations');
const AppException = require('../exceptions/appException');

exports.verifyCredentials = ({
  login,
  password
}) => new Promise(
  async (resolve, reject) => {
    try {
      const admin = await dbOperations.find('admin',
      {login, password},
      'findOne')
      if (admin)
        resolve(admin)
      else
        throw new AppException("Admin not found", 404)
    } catch (error) {
      reject(error)
    }
  }
)