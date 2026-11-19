import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import { site, navLinks } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Softdestiny builds affordable, fast-to-deploy websites and web applications that help your business run and grow — from Kerala to the world.
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
            <li className="flex items-center gap-2"><Mail size={16} className="text-brand-500" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-brand-500" /><a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-white">{site.phone}</a></li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-brand-500" />{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
