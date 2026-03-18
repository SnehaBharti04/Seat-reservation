import React, {useState} from "react";
import { useContext } from "react";
import { SeatContext } from "../context/SeatContext";
import "../assets/app.css"

export default function SeatGrid() {
   const {seats, reserveSeat, loading} = useContext(SeatContext)
   const [selectedSeat, setSelectedSeat] = useState(null)

const handleSeatSelect = (seatNumber) =>{
    setSelectedSeat(seatNumber)
}   

const handleConfirm = () =>{
   reserveSeat(selectedSeat)
   setSelectedSeat(null)
}

const handleCancel = () =>{
   setSelectedSeat(null)
}

    return( 
        <>
        <div className="grid">
            {seats.map((seat) => (
                <button
                  key={seat.seatNumber} 
                  className={seat.status === "AVAILABLE" ? 'seat green' : 'seat red'}
                  onClick={() => handleSeatSelect(seat.seatNumber)}
                  disabled = {seat.status == "RESERVED"}
                  > 
                  {loading == seat.seatNumber ? "Processing..." : `Seat ${seat.seatNumber}` }
                  </button>
            ))}
        </div>
        {selectedSeat && (
            <div className="modal-overlay">
                <div className="modal">
                    <p>Are you sure you want to reserve the seat {selectedSeat} ?</p>
                    <div className="modal-buttons">
                    <button className="ok-button" onClick={handleConfirm}>
                        OK
                    </button>
                    <button className="cancel-button" onClick={handleCancel}>
                        Cancel
                    </button>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}
