import React from 'react'

const RideOptionCard = ({ name, description, multiplier, baseFare, eta, onSelect, selected }) => {
  const price = Math.round(baseFare * multiplier)
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left rounded-2xl border px-4 py-3 transition ${
        selected
          ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/20'
          : 'border-slate-700/80 bg-slate-900/60 hover:border-slate-500'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-slate-800 flex items-center justify-center text-lg">
            🚗
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-50">{name}</div>
            <div className="text-xs text-slate-400">{description}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-emerald-400">₹{price}</div>
          <div className="text-[11px] text-slate-500">{eta} min pickup</div>
        </div>
      </div>
    </button>
  )
}

export default RideOptionCard
