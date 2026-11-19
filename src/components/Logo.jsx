import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="softDestiny home">
      <img src="/logo-mark.png" alt="" className="h-10 w-auto" />
      <span className="text-xl font-semibold tracking-tight">
        <span className={light ? 'text-sky-300' : 'text-sky-500'}>soft</span>
        <span className={`font-bold ${light ? 'text-white' : 'text-sky-700'}`}>Destiny</span>
      </span>
    </Link>
  )
}
