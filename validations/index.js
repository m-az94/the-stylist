const Joi = require('joi')


module.exports = function validateBody(schema) {
  return (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(422).json({ error: result.error.message })
    }
    else {
      if (!req.value) req.value = {}
      if (!req.value.body) req.value.body = {}
      req.value.body = result.value
      next()
    }
  }
}