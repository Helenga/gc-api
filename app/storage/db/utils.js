const Mongoose = require('mongoose');

exports.buildModelFromSchema = (schemaName, extendingSchemaName) => {
  const schema = require(`./schemas/${schemaName}`)
  const Schema = new Mongoose.Schema(
    schema,
    {timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    validateBeforeSave: true
  })
  if (extendingSchemaName){
    const extendingSchema = require(`./schemas/${extendingSchemaName}`)
    Schema.add(extendingSchema)
  }
  if (model = Mongoose.models[schemaName]){
    if (model.schema.tree != Schema.tree)
      delete Mongoose.models[schemaName]
    else
      return model
  }
  return Mongoose.model(schemaName, Schema)
}