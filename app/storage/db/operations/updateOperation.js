const {buildModelFromSchema} = require('../utils');

module.exports = (
  {schemaName,
  extendingSchemaName},
  methodName,
  {findBy,
  updateFields,
  projection}
) => new Promise(
  async (resolve, reject) => {
    try {
      if (!methodName in ['update', 'updateOne', 'updateMany', 'findOneAndUpdate'])
        throw new Error("Update operation method is not allowed")
      const Model = buildModelFromSchema(schemaName, extendingSchemaName)
      const options = {
        runValidators: true,
        new: true
      }
      const query = Model[methodName](findBy, {$set: updateFields}, options)
      if (projection)
        query.select(projection)
      resolve(query.exec())
    } catch (error) {
      reject(error)
    }
  }
)