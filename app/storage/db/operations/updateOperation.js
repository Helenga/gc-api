const {buildModelFromSchema} = require('../utils');

module.exports = (
  schemaName,
  findBy,
  updateFields,
  methodName,
  select
) => new Promise(
  async (resolve, reject) => {
    try {
      if (!methodName in ['update', 'updateOne', 'updateMany', 'findOneAndUpdate'])
        throw new Error("Update operation method is not allowed")
      const schema = require(`../schemas/${schemaName}`)
      const Model = buildModelFromSchema(schemaName, schema)
      const options = {
        runValidators: true
      }
      const query = Model[methodName](findBy, {$set: updateFields}, options)
      if (select)
        query.select(select)
      resolve(query.exec())
    } catch (error) {
      reject(error)
    }
  }
)