import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookingContext } from '../App.jsx'
import RideOptionCard from '../components/RideOptionCard.jsx'

const rideTypes = [
  {
    id: 'go',
    name: 'Uber Go',
    description: 'Affordable hatchbacks for everyday rides.',
    multiplier: 1,
  },
  {
    id: 'premier',
    name: 'Premier',
    description: 'Sedans with extra comfort & space.',
    multiplier: 1.35,
  },
  {
    id: 'xl',
    name: 'XL',
    description: '6-seater SUVs for bigger groups.',
    multiplier: 1.8,
  },
]

const Booking = () => {
  const { booking, setBooking } = useContext(BookingContext)
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState('premier')

  useEffect(() => {
    if (!booking) navigate('/')
  }, [booking, navigate])

  if (!booking) return null

  const handleConfirm = () => {
    const selectedRideType = rideTypes.find((r) => r.id === selectedId)
    const updated = {
      ...booking,
      rideType: selectedRideType,
      finalFare: Math.round(booking.fare * selectedRideType.multiplier),
      status: 'confirmed',
    }
    setBooking(updated)
    navigate('/track')
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto mt-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <div className="text-xs text-slate-400 uppercase tracking-[0.22em]">
            Step 2 • Choose your cab
          </div>
          <h2 className="text-2xl font-semibold text-slate-50 mt-1">Ride options</h2>
        </div>
        <div className="glass rounded-2xl px-4 py-2 text-xs">
          <div className="text-slate-400">Pickup in about</div>
          <div className="text-slate-100 font-medium">
            {booking.etaMinutes}–{booking.etaMinutes + 3} minutes
          </div>
        </div>
      </div>

      <div className="glass rounded-3xl p-4 flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[180px]">
          <div className="text-xs text-slate-400 uppercase tracking-[0.22em] mb-1">
            Trip summary
          </div>
          <div className="text-sm text-slate-300">
            <span className="font-medium text-slate-50">{booking.pickup || 'Pickup'}</span>
            <span className="mx-1 text-slate-500">→</span>
            <span className="font-medium text-slate-50">{booking.drop || 'Drop'}</span>
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Approx. distance {booking.distanceKm} km • this is a demo estimation only.
          </div>
        </div>
        <div className="flex items-end gap-4">
          <div className="text-right">
            <div className="text-xs text-slate-400">Base est. fare</div>
            <div className="text-xl font-semibold text-emerald-400">₹{booking.fare}</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {rideTypes.map((ride) => (
          <RideOptionCard
            key={ride.id}
            name={ride.name}
            description={ride.description}
            multiplier={ride.multiplier}
            baseFare={booking.fare}
            eta={booking.etaMinutes}
            selected={selectedId === ride.id}
            onSelect={() => setSelectedId(ride.id)}
          />
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-xs text-slate-400 hover:text-slate-200"
        >
          ← Change pickup / drop
        </button>
        <button onClick={handleConfirm} className="btn-primary">
          Confirm & go to live tracking
        </button>
      </div>
    </div>
  )
}

export default Booking
