const dotenv = require('dotenv');
const path = require('path');

dotenv.config()

module.exports = {
  host: process.env.HOST,
  port: process.env.PORT,
  cors_origin: process.env.CORS_ORIGIN,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRATION
  },

  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || ""
  },
  log: {
    path: process.env.IS_LOG_DIRECTORY_RELATIVE_PATH ?
      path.resolve(`${process.env.LOG_DIRECTORY}/${process.env.LOG_FILENAME}`) :
      `~/${process.env.LOG_DIRECTORY}/${process.env.LOG_FILENAME}`,
    level: process.env.NODE_ENV !== 'production' ?
      process.env.LOG_LEVEL_DEV :
      process.env.LOG_LEVEL_PROD
  }
}