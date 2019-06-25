const passport = require('../helpers/passport')
const validateBody = require('../validations')
const schemas = require('../validations/userValidation')
const login = require('../controllers/userController.js')

const passportSignIn = passport.authenticate('local', { session: false })
const passportJWT = passport.authenticate('jwt', { session: false })
const router = require('express-promise-router')()

router.route('/login')
  .post(
    validateBody(schemas.userLoginSchema),
    passportSignIn,
    login
  )

module.exports = router