const Seat = require("../models/Seat")
const constant = require("../config/constant")


exports.getSeats = async(req, res) => {
    const seats = await Seat.find().sort({seatNumber : 1})
    res.json(seats)
}


exports.reserveSeat = async(req, res) => {
    const {seatNumber, userId} = req.body
    try {
        const seat = await Seat.findOneAndUpdate(
            {seatNumber, status: constant.AVAILABLE},
            {status: constant.RESERVED, userId},
            {new: true}
    )
    if(!seat){
        return res.status(400).json({message : constant.SEAT_RESERVED})
    }
    req.io.emit("seatUpdated", seat)
    res.json(seat)
        
    } catch (error) {
        res.status(500).json(error.message)
        
    }
}