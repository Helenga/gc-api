const dbOperations = require('../storage/db/operations');

exports.createSignupRequest = ({
  name,
  surname,
  contact
}) => new Promise(
  async (resolve, reject) => {
    try {
      if (!contact) {
        resolve({
          success: false,
          message: 'Contact is required'
        })
        return
      }
      const signupRequest = await dbOperations.create(
        'signupRequest',
        {
          requestor: {
            name: {
              first: name,
              last: surname
            },
            email: contact
        }
      })
      resolve({
        success: true,
        data: signupRequest
      })
    }
    catch (error) {
      reject(error)
    }
  }
)