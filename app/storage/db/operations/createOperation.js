const AppException = require('../../../exceptions/appException');
const {buildModelFromSchema} = require('../utils');

module.exports = (schemaName, object, extendingSchemaName) =>
  new Promise( async (resolve, reject) => {
    try {
      const schema = require(`../schemas/${schemaName}`)
      const extendingSchema = require(`../schemas/${extendingSchemaName}`);
      const Model = buildModelFromSchema(schemaName, schema, extendingSchema)
      const newInstance = new Model(object);
      const instance = await newInstance.save()
      resolve(instance)
    } catch (error) {
      reject(new AppException(error.message, 400))
    }
})