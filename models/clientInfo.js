const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientInfo = new Schema({
  clientID: { type: String },
  age: Number,
  height: Number,
  hairColour: String,
  eyeColour: String,
  bodyType: String,
  shoeSize: Number,
  shirtSize: String,
  pantSize: Number,
  jacketSize: String,
  chest: String,
  waist: String,
  shoulder: String,
  typicalColour: String,
  styleIcons: String,
  bestFeature: String,
  date: { type: Date, default: Date.now }
});

const ClientInfo = mongoose.model("ClientInfo", clientInfo);

module.exports = ClientInfo;
