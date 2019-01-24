const {buildModelFromSchema} = require('../utils');

module.exports = (
  schemaName,
  query,
  methodName) => new Promise(
    (resolve, reject) => {
      try {
        if (!methodName in ['find', 'findById', 'findOne'])
          throw new Error("Find operation method is not allowed")
        const schema = require(`../schemas/${schemaName}`)
        const Model = buildModelFromSchema(schemaName, schema)
        const result = Model[methodName](query)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    }
  )