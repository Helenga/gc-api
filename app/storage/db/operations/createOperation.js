const {buildModelFromSchema} = require('../utils');

module.exports = (schemaName, object) =>
  new Promise( async (resolve, reject) => {
    try {
      const schema = require(`../schemas/${schemaName}`)
      const Model = buildModelFromSchema(schemaName, schema)
      const newInstance = new Model(object);
      const instance = await newInstance.save()
      resolve(instance)
    } catch (error) {
      reject(error)
    }
})