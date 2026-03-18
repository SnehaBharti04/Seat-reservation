import { createContext, useState , useEffect} from 'react';
import axios from "axios"
import {io} from "socket.io-client"
import toast from 'react-hot-toast'

export const SeatContext = createContext()
const API = import.meta.env.VITE_API_URL
console.log(API)
const socket = io(API)

export const SeatProvider = ({children}) => {
    const [seats, setSeats] = useState([])
    const [loadingState, setLoadingState] = useState(null)


const fetchSeats = async() => {
    const response = await axios.get(`${API}/api/seats`)
    setSeats(response.data)
}


const reserveSeat = async (seatNumber) => {
    setLoadingState(seatNumber)
    try {
        await axios.post(`${API}/api/seats/reserve`, {
            seatNumber,
            userId: "userdummy",
        })
        toast.success(`Seat ${seatNumber} reserved successfully` )
    } catch (error) {
        const errMessage = error.response?.data?.message || "Something went worng" 
        toast.error(errMessage)
    }
    setLoadingState(null)
}

 useEffect(() => {
    fetchSeats()

    socket.on("seatUpdated", (updatedSeat) =>{
        setSeats((prev) => prev.map((item) => item.seatNumber == updatedSeat.seatNumber ? updatedSeat : item )
       )
    })
    }, [])


    return(
        <SeatContext.Provider value={{seats, reserveSeat, loadingState}}>
            {children}
        </SeatContext.Provider>
    )
}