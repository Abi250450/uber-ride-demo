import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookingContext } from '../App.jsx'

const quickDistances = [
  { label: 'Within city', km: 8 },
  { label: 'Airport drop', km: 22 },
  { label: 'Outskirts', km: 35 },
]

const RideForm = () => {
  const navigate = useNavigate()
  const { setBooking } = useContext(BookingContext)
  const [form, setForm] = useState({
    pickup: '',
    drop: '',
    when: 'now',
    distanceKm: 8,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: name === 'distanceKm' ? Number(value) : value,
    }))
  }

  const handleQuickDistance = (km) => {
    setForm((prev) => ({ ...prev, distanceKm: km }))
  }

  const estimateFare = (km) => {
    const baseFare = 40
    const perKm = 14
    const surgeMultiplier = form.when === 'now' ? 1.2 : 1
    return Math.round((baseFare + km * perKm) * surgeMultiplier)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.pickup || !form.drop) return

    const fare = estimateFare(form.distanceKm)
    const etaMinutes = Math.max(4, Math.round(form.distanceKm / 2))

    setBooking({
      ...form,
      fare,
      etaMinutes,
      createdAt: new Date().toISOString(),
      status: 'quote',
    })

    navigate('/booking')
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-5 space-y-4">
      <div className="flex items-center justify-between gap-3 mb-1">
        <h2 className="text-lg font-semibold text-slate-50">Book your next ride</h2>
        <span className="badge border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
          Live fare estimate
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-xs text-slate-400">Pickup location</label>
          <input
            name="pickup"
            value={form.pickup}
            onChange={handleChange}
            placeholder="Enter pickup (e.g. Home, Office)"
            className="mt-1 w-full rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
          />
        </div>

        <div>
          <label className="text-xs text-slate-400">Drop location</label>
          <input
            name="drop"
            value={form.drop}
            onChange={handleChange}
            placeholder="Enter destination (e.g. Airport, Mall)"
            className="mt-1 w-full rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
          />
        </div>

        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-[140px]">
            <label className="text-xs text-slate-400">When</label>
            <select
              name="when"
              value={form.when}
              onChange={handleChange}
              className="mt-1 w-full rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
            >
              <option value="now">Ride now (instant)</option>
              <option value="schedule-evening">Today evening</option>
              <option value="schedule-later">Schedule for later</option>
            </select>
          </div>

          <div className="flex-1 min-w-[140px]">
            <label className="text-xs text-slate-400 flex items-center justify-between">
              <span>Approx. distance (km)</span>
              <span className="text-[10px] text-slate-500">demo only</span>
            </label>
            <input
              type="number"
              name="distanceKm"
              value={form.distanceKm}
              onChange={handleChange}
              min={1}
              max={120}
              className="mt-1 w-full rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          {quickDistances.map((q) => (
            <button
              type="button"
              key={q.label}
              onClick={() => handleQuickDistance(q.km)}
              className="badge bg-slate-900 hover:bg-slate-800 border border-slate-700/80"
            >
              {q.label} • {q.km} km
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
            Est. fare
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-semibold text-emerald-400">
              ₹{estimateFare(form.distanceKm)}
            </span>
            <span className="text-xs text-slate-500">All inclusive • demo</span>
          </div>
        </div>
        <button type="submit" className="btn-primary text-sm">
          Get ride options
        </button>
      </div>
    </form>
  )
}

export default RideForm
