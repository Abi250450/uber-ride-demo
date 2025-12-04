import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookingContext } from '../App.jsx'

const Tracking = () => {
  const { booking, setBooking } = useContext(BookingContext)
  const navigate = useNavigate()
  const [eta, setEta] = useState(booking ? booking.etaMinutes : 5)

  useEffect(() => {
    if (!booking) {
      navigate('/')
      return
    }
  }, [booking, navigate])

  useEffect(() => {
    if (!booking) return
    setEta(booking.etaMinutes)
  }, [booking])

  useEffect(() => {
    if (!booking) return
    const timer = setInterval(() => {
      setEta((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setBooking((b) => (b ? { ...b, status: 'arrived' } : b))
          return 0
        }
        return prev - 1
      })
    }, 60000)

    return () => clearInterval(timer)
  }, [booking, setBooking])

  if (!booking) return null

  const statusLabel =
    booking.status === 'arrived'
      ? 'Driver has arrived'
      : eta === 0
      ? 'Reaching now'
      : `Driver on the way`

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] mt-4">
      <section className="glass rounded-3xl p-4 md:p-5 space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-[0.22em]">Live tracking</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-slate-300">{statusLabel}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400">ETA</div>
            <div className="text-2xl font-semibold text-emerald-400">
              {eta === 0 ? '< 1' : eta} min
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-950 h-64 md:h-80 flex items-center justify-center">
          <div className="text-center text-xs text-slate-400 space-y-2 max-w-xs mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 border border-slate-700/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Map placeholder • plug Google Maps / Mapbox here
            </div>
            <p>
              Replace this block with an actual map component. Use the booking pickup & drop
              locations from context to draw the route.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 flex-wrap gap-3">
          <div>
            <div className="text-slate-300 font-medium">
              {booking.pickup} → {booking.drop}
            </div>
            <div>
              {booking.distanceKm} km •{' '}
              {booking.rideType ? booking.rideType.name : 'Selected ride'} • Demo only
            </div>
          </div>
          <div className="flex gap-2">
            <button className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs hover:bg-slate-800">
              Contact driver
            </button>
            <button className="rounded-full border border-slate-800/80 bg-slate-900 px-4 py-2 text-xs text-rose-300 hover:border-rose-500/60 hover:bg-rose-500/10">
              Cancel trip
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="glass rounded-3xl p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-slate-800 flex items-center justify-center text-xl">
              🚘
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-50">Rahul Patil</div>
              <div className="text-xs text-slate-400">4.92 ⭐ • 3,240 trips</div>
            </div>
            <div className="ml-auto text-right text-xs text-slate-400">
              <div>White Dzire • MH 12 AB 1234</div>
              <div className="text-emerald-300 mt-0.5">Verified partner</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-3">
              <div className="text-slate-400 mb-1">Total fare</div>
              <div className="text-base font-semibold text-emerald-400">
                ₹{booking.finalFare ?? booking.fare}
              </div>
            </div>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-3">
              <div className="text-slate-400 mb-1">Payment</div>
              <div className="text-slate-200">Cash (demo)</div>
            </div>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-3">
              <div className="text-slate-400 mb-1">Safety PIN</div>
              <div className="text-slate-200">4829</div>
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl p-4 text-xs text-slate-400 space-y-2">
          <div className="text-slate-300 font-medium">How this helps your portfolio</div>
          <ul className="list-disc list-inside space-y-1">
            <li>Global app state for ride details using React Context.</li>
            <li>Multi-step booking flow: search → select cab → tracking.</li>
            <li>Layout ready to connect with real APIs (maps, payments, auth).</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Tracking
