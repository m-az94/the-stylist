const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothing = new Schema ({
    tops: [],
    bottoms: [],
    dresses: [],
    shoes: [],
    bags: [],
    accessories: []
});

const Clothing = mongoose.model("Clothing", clothing);
module.exports = Clothing;