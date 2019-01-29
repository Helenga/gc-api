const db = require('../storage/db/operations');
const AppException = require('../exceptions/appException');

const requiredFields = {
  celebrity: {
    "name": {
      "first": "",
      "second": ""
    },
    "email": "",
    "phone": "",
    "country": "",
    "nickname": "",
    "categories": [],
    "info": "",
    "site": "",

  },
  customer: {
    "name": {
      "first": "",
      "second": ""
    },
    "email": "",
    "phone": "",
    "country": ""
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
      const user = await db.find('user', userId, 'findById')
      console.log('filterFields[user.role] :', filterFields[user.role]);
      const updatedUser = await db.update(
        'user',
        {_id: userId},
        {...requiredFields[user.role]} = data,
        'findOneAndUpdate',
        filterFields[user.role])
      resolve(updatedUser)
    }
    catch (error) {
      reject(error)
    }
  }
)