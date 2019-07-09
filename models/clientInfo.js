const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientInfo = new Schema({
  clientID: { type: String },
  name: String,
  birthdate: String,
  hairColour: String,
  eyeColour: String,
  bodyType: String,
  chest: Number,
  waist: Number,
  shoulders: Number,
  shoeSize: Number,
  jeanSize: Number,
  shirtSize: String,
  jacketSize: String,
  q1: String,
  q2: String,
  q3: String,
  q4: String,
  date: { type: Date, default: Date.now }
});

const ClientInfo = mongoose.model("ClientInfo", clientInfo);

module.exports = ClientInfo;
