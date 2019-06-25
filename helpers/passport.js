const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy  = require('passport-local')
const User  = require('../models/userModel')


// JWT Strategy
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: "ThisIsSecretKey"
}, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub)
    if (!user) return done(null, false)
    done(null, user)
  } catch (error) {
    done(error, false)
  }
}))


// Local Strategy
passport.use(new LocalStrategy.Strategy({ usernameField: 'username' }, async (username, password, done) => {
  try {
    const user = await User.findOne({ username })
    if (!user) return done(null, false)
    if (await user.isValidPassword(password))
      return done(null, user)
    else
      done(null, false)
  } catch (error) {
    done(error, false)
  }
}))


module.exports = passport