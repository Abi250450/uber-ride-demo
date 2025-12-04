import React, { useState } from 'react'

const DriverSignup = () => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    carModel: '',
    carNumber: '',
    experience: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-3xl mx-auto mt-4 space-y-6">
      <div className="space-y-2">
        <div className="text-xs text-slate-400 uppercase tracking-[0.22em]">
          Partner with us
        </div>
        <h2 className="text-2xl font-semibold text-slate-50">Become a demo driver</h2>
        <p className="text-sm text-slate-400 max-w-lg">
          This is a frontend-only form that you can later connect to your backend or Firebase.
          Right now it only simulates a successful submission for portfolio purposes.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="glass rounded-3xl p-5 grid gap-4 md:grid-cols-2 text-sm"
      >
        <div className="md:col-span-2 text-xs text-slate-400 mb-1">
          Basic information
        </div>

        <div>
          <label className="block text-xs text-slate-400">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
            required
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
            required
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400">City</label>
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className="mt-1 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
          />
        </div>

        <div className="md:col-span-2 text-xs text-slate-400 mt-2 mb-1">
          Vehicle details
        </div>

        <div>
          <label className="block text-xs text-slate-400">Car model</label>
          <input
            name="carModel"
            value={form.carModel}
            onChange={handleChange}
            className="mt-1 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400">Car number</label>
          <input
            name="carNumber"
            value={form.carNumber}
            onChange={handleChange}
            className="mt-1 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs text-slate-400">Driving experience</label>
          <textarea
            name="experience"
            value={form.experience}
            onChange={handleChange}
            rows={3}
            className="mt-1 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60 resize-none"
          />
        </div>

        <div className="md:col-span-2 flex items-center justify-between pt-2 border-t border-slate-800/80 mt-2">
          <div className="text-xs text-slate-500 max-w-xs">
            In a full-stack version, this would send the data to your API / database and trigger a
            verification flow.
          </div>
          <button type="submit" className="btn-primary text-sm">
            Submit application
          </button>
        </div>
      </form>

      {submitted && (
        <div className="glass rounded-2xl p-4 text-xs text-emerald-200 border border-emerald-500/40">
          Thank you, <span className="font-semibold">{form.name || 'driver'}</span>! In this demo
          project we don&apos;t store data anywhere, but the UI and flow are ready to connect with
          a real backend.
        </div>
      )}
    </div>
  )
}

export default DriverSignup
