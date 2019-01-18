const Mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

exports.buildModelFromSchema = (modelName, schema) => {
  const Schema = new Mongoose.Schema(schema)
  Schema.plugin(timestamp)
  return Mongoose.model(modelName, Schema)
}