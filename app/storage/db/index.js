const mongoose = require('mongoose');

const dbConfig = require('../../config').db;

mongoose.Promise = global.Promise

const connectionURLBase = `${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`

const connectionURL = process.env.NODE_ENV === 'production' ?
  `mongodb://${dbConfig.user}:${dbConfig.password}@${connectionURLBase}` :
  `mongodb://${connectionURLBase}`

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  connectTimeoutMS: 3000
})
  .catch(error => console.error())

const db = mongoose.connection

db.on('connected', () => {
  console.log(`Mongoose connection opened on ${connectionURL}`)
})

db.on('error', error => {
  console.error(error);
})

db.on('disconnected', () => {
  console.log('Mongoose connection disconnected');
})

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose connection closed throw app termination');
    process.exit(0)
  })
})