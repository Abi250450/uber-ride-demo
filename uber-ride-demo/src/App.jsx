import React, { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Booking from './pages/Booking.jsx'
import Tracking from './pages/Tracking.jsx'
import DriverSignup from './pages/DriverSignup.jsx'
import Admin from './pages/Admin.jsx'

export const BookingContext = createContext(null)

const App = () => {
  const [booking, setBooking] = useState(null)

  return (
    <BookingContext.Provider value={{ booking, setBooking }}>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-slate-50">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 pb-10 pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/track" element={<Tracking />} />
            <Route path="/driver" element={<DriverSignup />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </div>
    </BookingContext.Provider>
  )
}

export default App
