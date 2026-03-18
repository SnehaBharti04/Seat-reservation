const mongoose = require('mongoose')
const constant = require("../config/constant")

const seatSchema = new mongoose.Schema({
       seatNumber: Number,
       status : {
        type : String,
        enum: [constant.AVAILABLE , constant.RESERVED],
        default: constant.AVAILABLE
       },
       userId : String
});

module.exports = mongoose.model("Seat", seatSchema)