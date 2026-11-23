import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const toggle = () => {
    const next = !dark
    setDark(next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch { /* ignore */ }
  }

  return (
    <button onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-md p-2 text-slate-600 transition hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
