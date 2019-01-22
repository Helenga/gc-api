const dbOperations = require('../storage/db/operations');
const AppException = require('../exceptions/appException');

exports.createSignupRequest = ({
  name,
  phone,
  email
}) => new Promise(
  async (resolve, reject) => {
    try {
      if (!phone && !email) {
        throw new AppException(
          "Phone or email, at least one, is required.",
          400)
      }
      const requestor = {
        name
      }
      if (phone){
        phone = phone.replace(/\+|-|\(|\)/g, '')
        requestor.phone = phone
      }
      if (email)
        requestor.email = email
      const signupRequest = await dbOperations.create(
        'signupRequest',
        {requestor: requestor})
      resolve(signupRequest)
    }
    catch (error) {
      reject(error)
    }
  }
)