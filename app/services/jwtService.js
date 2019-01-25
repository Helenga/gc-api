const config =  require('../config');
const jwt = require('jsonwebtoken');
const passport = require('../middlewares/passportMiddleware');
const AppException = require('../exceptions/appException');

exports.getTokenFor = (role, user) => new Promise(
  async (resolve, reject) => {
    try {
      const payload = {
        role: role,
        id: user._id
      }
      const token = jwt.sign(
        payload, config.jwt.secret,
        {expiresIn: config.jwt.expiresIn})
      resolve(`Bearer ${token}`)
    } catch (error) {
      reject(error)
    }
  }
)

exports.getUserIdIfPermissions = async (allowedRoles, ctx, next) => {
  const authHeader = ctx.req.headers['authorization']
  if (authHeader && authHeader.includes('Bearer')) {
    jwt.verify(authHeader.split(' ')[1],
      config.jwt.secret, err => {
      if (err)
        throw new AppException('Token is not valid', 401)
    })
    return new Promise (async (resolve, reject) => {
      await passport.authenticate(
        'jwt',
        {session: false},
        function(err, user) {
        if (err)
          reject(err)
        if (!user.role in allowedRoles)
          reject(new AppException("Access denied", 401))
        resolve(user.id)
      })(ctx, next)
  })
}
  throw new AppException('No bearer token is present', 401)
}