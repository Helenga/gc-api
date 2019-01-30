const {buildModelFromSchema} = require('../utils');

module.exports = (
  {schemaName,
  extendingSchemaName},
  methodName,
  {findBy,
  projection}
  ) => new Promise(
    (resolve, reject) => {
      try {
        if (!methodName in ['find', 'findById', 'findOne'])
          throw new Error("Find operation method is not allowed")
        const Model = buildModelFromSchema(schemaName, extendingSchemaName)
        const query = Model[methodName](findBy, projection)
        resolve(query.exec())
      } catch (error) {
        reject(error)
      }
    }
  )