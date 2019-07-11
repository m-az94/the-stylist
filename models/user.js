const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');


const user = new Schema({
  name: { type: String,required:true },
  email: { type: String, required: true },
  password: {type: String, require: true, min: 6},
  userType: String,
  active: {type: Boolean, default: 1},
  // clientInfo: [
  //   {
  //     // Store ObjectIds in the array
  //     type: Schema.Types.ObjectId,
  //     // The ObjectIds will refer to the ids in the clientInfo model
  //     ref: "ClientInfo"
  //   }
  // ],
  date: { type: Date, default: Date.now }
});

user.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function (err, salt) {
          if (err) {
              return next(err);
          }
          bcrypt.hash(user.password, salt, null, function (err, hash) {
              if (err) {
                  return next(err);
              }
              user.password = hash;
              next();
          });
      });
  } else {
      return next();
  }
});

user.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
          return cb(err);
      }
      cb(null, isMatch);
  });
};

const User = mongoose.model("User", user);

module.exports = User;