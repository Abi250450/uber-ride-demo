import React from 'react'
import { Link } from 'react-router-dom'
import RideForm from '../components/RideForm.jsx'

const Home = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start mt-4">
      <section className="space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-[11px] font-medium text-emerald-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE DEMO • NO REAL BOOKINGS
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Uber-style ride booking{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              in a single page demo.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            This is a front-end only project: search rides, see instant fare estimates, choose your
            cab, and watch a simulated driver on the map — perfect for portfolio or learning.
          </p>
        </div>

        <RideForm />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 text-xs">
          <div className="glass rounded-2xl p-3">
            <div className="text-slate-300 font-medium">3 vehicle types</div>
            <div className="text-slate-500 mt-1">Go, Premier, XL with different pricing.</div>
          </div>
          <div className="glass rounded-2xl p-3">
            <div className="text-slate-300 font-medium">Live tracking view</div>
            <div className="text-slate-500 mt-1">
              Simulated map, driver card & countdown ETA.
            </div>
          </div>
          <div className="glass rounded-2xl p-3 hidden md:block">
            <div className="text-slate-300 font-medium">Driver panel</div>
            <div className="text-slate-500 mt-1">Simple form for new driver onboarding.</div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="relative glass rounded-3xl p-4 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-[0.22em]">
                  Sample ride
                </div>
                <div className="text-lg font-semibold text-slate-50">Downtown → Airport</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">Est. fare</div>
                <div className="text-xl font-semibold text-emerald-400">₹420</div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/80 h-44 flex items-center justify-center">
              <div className="text-center text-xs text-slate-400 space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 border border-slate-700/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Simulated mini-map preview
                </div>
                <p className="max-w-[220px] mx-auto">
                  In real projects, plug in Google Maps / Mapbox here using the same layout.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center text-sm">
                  🚘
                </div>
                <div>
                  <div className="text-slate-300 font-medium">Rahul • White Dzire</div>
                  <div className="text-[11px] text-slate-500">MH 12 AB 1234 • 4.92 ⭐</div>
                </div>
              </div>
              <div className="text-right">
                <div>Pickup in 5 min</div>
                <div className="text-[11px] text-emerald-300">Tracking view in /track</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500 text-right">
          Want to see it all at once?{' '}
          <Link to="/admin" className="text-emerald-400 hover:text-emerald-300 underline">
            Open the mini admin dashboard
          </Link>
          .
        </div>
      </section>
    </div>
  )
}

export default Home
