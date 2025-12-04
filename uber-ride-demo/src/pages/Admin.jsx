import React from 'react'
import StatCard from '../components/StatCard.jsx'

const Admin = () => {
  return (
    <div className="space-y-6 mt-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <div className="text-xs text-slate-400 uppercase tracking-[0.22em]">
            Demo control room
          </div>
          <h2 className="text-2xl font-semibold text-slate-50">Mini admin dashboard</h2>
          <p className="text-xs text-slate-500 mt-1 max-w-xl">
            This page is read-only and uses hardcoded values, but gives you a layout for a real
            analytics & operations dashboard.
          </p>
        </div>
        <div className="glass rounded-2xl px-4 py-2 text-xs text-slate-300">
          Environment: <span className="text-emerald-300">Frontend only</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4 text-sm">
        <StatCard label="Today rides" value="128" chip="+18% vs yesterday" />
        <StatCard label="Online drivers" value="46" chip="Across 3 cities" />
        <StatCard label="Avg. rating" value="4.86" chip="Last 100 trips" />
        <StatCard label="Revenue (demo)" value="₹42.3K" chip="Simulated metric" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-xs">
        <div className="glass rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-slate-300 font-medium">Active trips (sample)</div>
            <span className="badge bg-slate-900/80">Live list UI</span>
          </div>
          <div className="space-y-2">
            {[
              {
                id: '#TRIP-9821',
                route: 'Kothrud → Pune Airport',
                driver: 'Rahul',
                eta: '4 min',
              },
              {
                id: '#TRIP-9820',
                route: 'Andheri East → BKC',
                driver: 'Fatima',
                eta: '12 min',
              },
              {
                id: '#TRIP-9819',
                route: 'HSR Layout → Indiranagar',
                driver: 'Arjun',
                eta: '7 min',
              },
            ].map((trip) => (
              <div
                key={trip.id}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/70 px-3 py-2 flex items-center justify-between gap-3"
              >
                <div>
                  <div className="text-slate-300 font-medium">{trip.route}</div>
                  <div className="text-[11px] text-slate-500">
                    {trip.id} • Driver: {trip.driver}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-300 font-medium">{trip.eta}</div>
                  <div className="text-[11px] text-slate-500">ETA</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-4 space-y-3 lg:col-span-2">
          <div className="flex items-center justify-between gap-2">
            <div className="text-slate-300 font-medium">City wise demand (static)</div>
            <span className="badge bg-slate-900/80">Replace with charts later</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { city: 'Mumbai', demand: 92, surge: '1.4x' },
              { city: 'Pune', demand: 74, surge: '1.2x' },
              { city: 'Bengaluru', demand: 88, surge: '1.3x' },
            ].map((c) => (
              <div
                key={c.city}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3 flex flex-col justify-between"
              >
                <div className="text-slate-300 font-medium">{c.city}</div>
                <div className="mt-2 text-2xl font-semibold text-emerald-400">
                  {c.demand}
                  <span className="text-xs text-slate-500 ml-1">/100</span>
                </div>
                <div className="text-[11px] text-emerald-300 mt-1">Surge {c.surge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-4 text-xs text-slate-400">
        <div className="text-slate-300 font-medium mb-1">How to extend this admin</div>
        <ul className="list-disc list-inside space-y-1">
          <li>Replace static data with API calls from your Node / Next.js backend.</li>
          <li>Add filters for city, date range, driver, and payment type.</li>
          <li>Show charts (rides per hour, revenue etc.) using any chart library.</li>
        </ul>
      </div>
    </div>
  )
}

export default Admin
