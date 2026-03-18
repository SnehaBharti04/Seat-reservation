const express = require("express")
const router = express.Router()
const {getSeats, reserveSeat} = require("../controllers/seatController")


router.get("/", getSeats)
router.post("/reserve", reserveSeat)


module.exports = router