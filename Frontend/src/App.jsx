import SeatGrid from './components/SeatGrid'
import { SeatProvider } from './context/SeatContext'
import {Toaster} from 'react-hot-toast'
function App() {

  return (
    <>
      <SeatProvider>
        <Toaster position='top-right'></Toaster>
        <h1>Real-Time Seat Reservation</h1>
      <SeatGrid />
      </SeatProvider>
    </>
  )
}

export default App
