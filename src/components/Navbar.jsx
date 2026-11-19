import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { navLinks } from '../data/site.js'

const linkCls = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition ${isActive ? 'text-brand-700' : 'text-slate-600 hover:text-slate-900'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkCls}>{l.label}</NavLink>)}
        </nav>
        <div className="hidden md:block"><Button to="/contact">Contact Us</Button></div>
        <button className="rounded-md p-2 text-slate-700 md:hidden" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 md:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-slate-900/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} />
        <aside className={`absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col bg-white p-5 shadow-xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mb-6 flex items-center justify-between">
            <Logo />
            <button className="rounded-md p-2" onClick={() => setOpen(false)} aria-label="Close menu" tabIndex={open ? 0 : -1}><X size={22} /></button>
          </div>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} tabIndex={open ? 0 : -1}
                className={({ isActive }) => `rounded-lg px-3 py-3 text-base font-medium ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'}`}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <Button to="/contact" className="mt-auto" tabIndex={open ? 0 : -1}>Contact Us</Button>
        </aside>
      </div>
    </header>
  )
}
