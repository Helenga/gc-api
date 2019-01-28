const dbOperations = require('../storage/db/operations');
const AppException = require('../exceptions/appException');

exports.signupUser = ({
  name,
  surname,
  role,
  email,
  phone,
  hash,
  salt
}) => new Promise(
  async (resolve, reject) => {
    try {
      if (!email && !phone)
        throw new AppException('Phone or email, at least one, is required', 400)
      if (phone)
        phone = phone.replace(/\+|-|\(|\)/g, '')
      const user = await dbOperations.create('user', {
        name: {
          first: name,
          second: surname
        },
        role,
        email,
        phone,
        hash,
        salt
      }, role)
      resolve(user)
    }
    catch (error) {
      reject(error)
    }
  }
)