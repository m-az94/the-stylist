const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientStylistRef = new Schema({
  clientID: { type: String, required: true },
  stylistID: { type: String, required: true },
  styleResult: {type: String},
  hotOrNot: Boolean,
  date: { type: Date, default: Date.now }
});

const ClientStylistRef = mongoose.model("ClientStylistRef", clientStylistRef);

module.exports = ClientStylistRef;