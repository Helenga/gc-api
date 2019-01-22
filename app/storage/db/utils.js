const Mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

exports.buildModelFromSchema = (modelName, schema) => {
  if (model = Mongoose.models[modelName])
    return model
  const Schema = new Mongoose.Schema(schema)
  Schema.plugin(timestamp)
  return Mongoose.model(modelName, Schema)
}