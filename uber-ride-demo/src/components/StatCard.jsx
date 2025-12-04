import React from 'react'

const StatCard = ({ label, value, chip }) => (
  <div className="glass rounded-2xl p-4 space-y-1">
    <div className="text-xs text-slate-400 uppercase tracking-[0.22em]">{label}</div>
    <div className="text-2xl font-semibold text-slate-50">{value}</div>
    {chip && <div className="text-[11px] text-emerald-300">{chip}</div>}
  </div>
)

export default StatCard
