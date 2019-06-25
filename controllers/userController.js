const JWT = require('jsonwebtoken')

module.exports = async function login(req, res, next) { 
  const user = req.user
  if (user.accountStatus == false) return res.status(403).json({ error: `Your account is locked. Please contact your Adminstrator for more information.` })
  const token = getToken(user)
  res.status(201).json({ user, token })
}

const getToken = user => {
    return JWT.sign({
      iss: 'G1HD',
      sub: user.id,
      iat: new Date().getTime(),
      exp: Math.floor(Date.now() / 1000) + (60 * 5) 
    }, "ThisIsSecretKey")
  }