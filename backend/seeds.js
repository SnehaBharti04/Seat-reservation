const mongoose = require('mongoose')
const Seat = require("./models/Seat")
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)

async function seed(){
    const seats = Array.from({length :20}, (_, i) => ({
        seatNumber: i+1,
    }))

    await Seat.insertMany(seats)
    console.log("seats added for testing purpose")
    process.exit()
}

seed()