const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothing = new Schema ({
    type: String,
    image: []
});

const Clothing = mongoose.model("Clothing", clothing);
module.exports = Clothing;