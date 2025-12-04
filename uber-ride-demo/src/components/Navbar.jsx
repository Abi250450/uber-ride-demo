import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm font-medium px-3 py-1.5 rounded-full transition ${
        isActive ? 'bg-slate-800 text-emerald-400' : 'text-slate-300 hover:bg-slate-800/60'
      }`
    }
  >
    {children}
  </NavLink>
)

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-30 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-2xl bg-emerald-500 flex items-center justify-center font-black text-slate-950 text-lg">
            U
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-slate-50 tracking-tight">ABHI Uber</span>
            <span className="text-[11px] text-slate-400 uppercase tracking-[0.2em]">
              Ride booking
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <NavItem to="/">Book ride</NavItem>
          <NavItem to="/driver">Become a driver</NavItem>
          <NavItem to="/admin">Admin</NavItem>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
