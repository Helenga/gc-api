const db = require('../storage/db/operations');
const AppException = require('../exceptions/appException');

exports.signupUser = ({
  name,
  surname,
  role,
  email,
  phone,
  hash,
  salt,
  nickname,
  country
}) => new Promise(
  async (resolve, reject) => {
    try {
      if (!email && !phone)
        throw new AppException('Phone or email, at least one, is required', 400)
      let credentials = {}
      if (phone){
        phone = phone.replace(/\+|-|\(|\)/g, '')
        credentials.phone = phone
      }
      if (email) {
        credentials.email = email
      }
      if (await areCredentialsOccupied(credentials))
        throw new AppException("User with such credentials already exists", 409)
      const user = await db.create(
        {
          schemaName: 'user',
          extendingSchemaName: role
        },
        {
          name: {
            first: name,
            second: surname
          },
          role,
          email,
          phone,
          hash,
          salt,
          nickname,
          country
        })
      resolve(user)
    }
    catch (error) {
      reject(error)
    }
  }
)

async function areCredentialsOccupied (credentials) {
  const dbQuery = { $or: [
    {email: credentials.email},
    {phone: credentials.phone}
  ]}
  const user = await db.find(
    {schemaName: 'user'},
    'findOne',
    {findBy: dbQuery})
  return !!user
}