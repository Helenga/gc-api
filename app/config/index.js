const dotenv = require('dotenv');

dotenv.config()

module.exports = {
  host: process.env.HOST,
  port: process.env.PORT,
  cors_origin: process.env.CORS_ORIGIN
}