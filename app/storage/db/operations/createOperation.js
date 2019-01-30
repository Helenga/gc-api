const AppException = require('../../../exceptions/appException');
const {buildModelFromSchema} = require('../utils');

module.exports = (
  {schemaName,
  extendingSchemaName},
  modelData
  ) =>
  new Promise( async (resolve, reject) => {
    try {
      const Model = buildModelFromSchema(schemaName, extendingSchemaName)
      const newInstance = new Model(modelData);
      const instance = await newInstance.save()
      resolve(instance)
    } catch (error) {
      reject(new AppException(error.message, 400))
    }
})