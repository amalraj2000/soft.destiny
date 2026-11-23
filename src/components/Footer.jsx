import { Link } from 'react-router-dom'
import { MapPin, Mail } from 'lucide-react'
import Logo from './Logo.jsx'
import { site, navLinks } from '../data/site.js'

const icons = {
  youtube: <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2C.5 9.1.5 12 .5 12s0 2.9.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8ZM9.8 15.4V8.6l5.9 3.4-5.9 3.4Z" />,
  facebook: <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />,
  instagram: <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />,
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto grid max-w-6xl 2xl:max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 sm:py-14 lg:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-2 text-sm font-medium text-sky-300">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            softDestiny builds affordable, fast-to-deploy websites and web applications that help your business run and grow — from Kerala to the world.
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm"><MapPin size={16} className="text-brand-500" /> Proudly based in {site.location}</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => <li key={l.to}><Link to={l.to} className="transition hover:text-white">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-brand-500" />{site.location}</li>
            <li className="flex items-center gap-2"><Mail size={16} className="shrink-0 text-brand-500" /><a href={`mailto:${site.email}`} className="break-all transition hover:text-white">{site.email}</a></li>
          </ul>
          <div className="mt-5 flex gap-3">
            {Object.entries(site.social).map(([name, href]) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`softDestiny on ${name}`}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-slate-300 transition hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">{icons[name]}</svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
