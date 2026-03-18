require("dotenv").config()
const express = require('express')
const cors = require('cors')
const http = require('http')
const seatRoutes = require("./routes/seatRoutes")
const connectDB = require("./config/db")
const { Server } = require('socket.io');


const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "https://seat-reservation-system-sneha.netlify.app",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
});

  app.use(cors({
    origin: "https://seat-reservation-system-sneha.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    req.io = io;
    next()
})

app.use("/api/seats", seatRoutes)

io.on("connection", (socket) =>{
    console.log("user connected")
})

connectDB()

server.listen(5000, () => console.log("server running"))