const config = require('../config');

exports.addDomainPrefixToPath = (path) => {
  if (process.env.NODE_ENDV === 'production')
    return `${config.host}/${path}`
  return `${config.host}:${config.port}/${path}`
}