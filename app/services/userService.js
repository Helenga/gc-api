const db = require('../storage/db/operations');
const {isPasswordValid, encryptPassword} = require('../utils/cryptoUtil');
const AppException = require('../exceptions/appException');

const requiredFields = {
  celebrity: {
    "name": {
      "first": undefined,
      "second": undefined
    },
    "email": undefined,
    "phone": undefined,
    "country": undefined,
    "nickname": undefined,
    "categories": undefined,
    "info": undefined,
    "site": undefined
  },
  customer: {
    "name": {
      "first": undefined,
      "second": undefined
    },
    "email": undefined,
    "phone": undefined,
    "country": undefined
  }
}

const filterFields = {
  celebrity: 'name email phone country nickname categories info site -_id',
  customer: 'name email phone country -_id'
}

exports.updateProfileData = (
  userId,
  data
) => new Promise(
  async (resolve, reject) => {
    try {
      if (data.role)
        throw new AppException('Try to update read-only field', 400)
      if (!data.email && !data.phone)
        throw new AppException('Phone or email, at least one, is required', 400)
      if (data.phone)
        data.phone = data.phone.replace(/\+|-|\(|\)/g, '')
      const user = await db.find(
        {schemaName: 'user'},
        'findById',
        {findBy: userId}
      )
      const updatedUser = await db.update(
        {
          schemaName: 'user',
          extendingSchemaName: user.role
        },
        'findOneAndUpdate',
        {
          findBy: {_id: userId},
          updateFields: {...requiredFields[user.role]} = data,
          projection: filterFields[user.role]
        }
      )
      resolve(updatedUser)
    }
    catch (error) {
      reject(error)
    }
  }
)

exports.changePassword = (
 userId,
 {password}
) => new Promise(
  async (resolve, reject) => {
    try {
      const user = await db.find(
        {
          schemaName: 'user'
        },
        'findById',
        {
          findBy: userId
        })
      if (!isPasswordValid(password.old, user.salt, user.hash))
        throw new AppException("Incorrect old password", 400)
      const {hash, salt} = encryptPassword(password.new)
      await db.update(
        {schemaName: 'user'},
        'updateOne',
        {
          findBy: {_id: user.id},
          updateFields: {hash, salt}
        }
      )
      resolve()
    } catch (error) {
      reject(error)
    }
  }
)

exports.updateAvatar = (userId, fileName) => new Promise(
  async (resolve, reject) => {
    try {
      await db.update(
        {schemaName: 'user'},
        'updateOne',
        {
          findBy: {_id: userId},
          updateFields: {avatar: fileName}
        }
      )
      resolve()
    } catch (error) {
      reject(error)
    }
  }
)