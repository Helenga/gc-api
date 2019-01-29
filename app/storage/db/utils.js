const Mongoose = require('mongoose');

exports.buildModelFromSchema = (modelName, schema, extendingSchema) => {
  const Schema = new Mongoose.Schema(
    schema,
    {timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    validateBeforeSave: true
  })
  if (extendingSchema)
    Schema.add(extendingSchema)
  if (model = Mongoose.models[modelName]){
    if (model.schema.tree != Schema.tree)
      delete Mongoose.models[modelName]
    else
      return model
  }
  return Mongoose.model(modelName, Schema)
}