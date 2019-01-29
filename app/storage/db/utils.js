const Mongoose = require('mongoose');

exports.buildModelFromSchema = (modelName, schema, extendingSchema) => {
  if (model = Mongoose.models[modelName])
    return model
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
  return Mongoose.model(modelName, Schema)
}