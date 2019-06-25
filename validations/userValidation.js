const Joi = require('joi')


module.exports = schemas = {

  userLoginSchema: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  })

}