const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meeting = new Schema({
    start_time: Date,
    end_time: Date,
    booked: {type: Boolean, default: false}
});

const Meeting = mongoose.model("Meeting", meeting);

module.exports = Meeting;