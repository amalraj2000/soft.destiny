import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2 font-bold" aria-label="Softdestiny home">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-lg text-white shadow-sm">S</span>
      <span className={`text-xl tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        Soft<span className="text-brand-500">destiny</span>
      </span>
    </Link>
  )
}
