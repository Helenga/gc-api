const {buildModelFromSchema} = require('../utils');

module.exports = (
  {schemaName,
  extendingSchemaName},
  methodName,
  {findBy,
  projection,
  skip,
  take}
  ) => new Promise(
    (resolve, reject) => {
      try {
        if (!methodName in ['find', 'findById', 'findOne'])
          throw new Error("Find operation method is not allowed")
        const Model = buildModelFromSchema(schemaName, extendingSchemaName)
        const query = Model[methodName](findBy, projection)
          .skip(skip).limit(take)
        resolve(query.exec())
      } catch (error) {
        reject(error)
      }
    }
  )