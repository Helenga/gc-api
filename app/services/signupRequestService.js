const db = require('../storage/db/operations');
const AppException = require('../exceptions/appException');

exports.createSignupRequest = ({
  name,
  surname,
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
        name,
        surname
      }
      if (phone){
        phone = phone.replace(/\+|-|\(|\)/g, '')
        requestor.phone = phone
      }
      if (email)
        requestor.email = email
      const signupRequest = await db.create(
        {schemaName: 'signupRequest'},
        {requestor}
      )
      resolve(signupRequest)
    }
    catch (error) {
      reject(error)
    }
  }
)