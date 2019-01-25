const KoaPassport = require('koa-passport');
const passportJwt = require('passport-jwt');
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const config = require('../config');
const AppException = require('../exceptions/appException');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt.secret
}

KoaPassport.use(new JwtStrategy(
  jwtOptions,
  function(jwtPayload, done){
    if (new Date(jwtPayload.exp * 1000) < new Date())
      return done(new AppException('Token is expired', 401), false)
    return done(null, {id: jwtPayload.id, role: jwtPayload.role})
  }
))

module.exports = KoaPassport