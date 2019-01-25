const Mongoose = require('mongoose');

exports.buildModelFromSchema = (modelName, schema) => {
  if (model = Mongoose.models[modelName])
    return model
  const Schema = new Mongoose.Schema(
    schema,
    {timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }})
  return Mongoose.model(modelName, Schema)
}