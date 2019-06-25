const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const options = {
  timestamps: true
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  accountStatus: {
    type: Boolean,
    required: true,
    default: false
  }
}, options)

userSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.password;
  return obj;
 }

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error) {
    next(error)
  }
})

userSchema.methods.isValidPassword = async function (loginPassword) {
  try {
    return await bcrypt.compare(loginPassword, this.password)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = mongoose.model('User', userSchema)