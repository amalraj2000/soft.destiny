import { useState } from 'react'
import Button from '../Button.jsx'

// Inline styles are used inside the frame so the sample always looks like a light website, even in dark mode.
const industries = {
  bakery: { label: 'Bakery / Café', emoji: '🥐', tag: 'Freshly baked, every morning', cta: 'Order now', items: ['Cakes', 'Breads', 'Snacks'], blurb: 'Handmade cakes, breads and treats for every celebration.' },
  restaurant: { label: 'Restaurant', emoji: '🍛', tag: 'Real flavour, made with care', cta: 'Book a table', items: ['Menu', 'Specials', 'Reviews'], blurb: 'Traditional recipes served fresh, dine in or take away.' },
  shop: { label: 'Online shop', emoji: '🛍️', tag: 'Shop the latest, delivered fast', cta: 'Shop now', items: ['New', 'Best sellers', 'Offers'], blurb: 'Quality products at fair prices, delivered to your door.' },
  clinic: { label: 'Clinic / Hospital', emoji: '🩺', tag: 'Caring for you and your family', cta: 'Book appointment', items: ['Doctors', 'Services', 'Timings'], blurb: 'Experienced doctors and friendly care, close to home.' },
  gym: { label: 'Gym / Fitness', emoji: '💪', tag: 'Train hard. Feel great.', cta: 'Join today', items: ['Plans', 'Trainers', 'Schedule'], blurb: 'Modern equipment and trainers to help you reach your goals.' },
  school: { label: 'School / Tuition', emoji: '📚', tag: 'Learning that builds the future', cta: 'Enquire now', items: ['Courses', 'Faculty', 'Admissions'], blurb: 'Quality teaching with personal attention for every student.' },
  salon: { label: 'Salon / Beauty', emoji: '💇', tag: 'Look good, feel better', cta: 'Book a slot', items: ['Services', 'Gallery', 'Prices'], blurb: 'Hair, skin and grooming by friendly professionals.' },
}
const colours = ['#4f46e5', '#0ea5e9', '#16a34a', '#e11d48', '#f59e0b', '#7c3aed']

export default function MockupPreview() {
  const [kind, setKind] = useState('bakery')
  const [name, setName] = useState('')
  const [colour, setColour] = useState(colours[0])
  const d = industries[kind]
  const title = name.trim() || 'Your Business'
  const input = 'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20'

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="space-y-5 lg:col-span-2">
        <label className="block text-sm font-semibold text-slate-800">Type of business
          <select className={`${input} mt-1.5`} value={kind} onChange={(e) => setKind(e.target.value)}>
            {Object.entries(industries).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
        </label>
        <label className="block text-sm font-semibold text-slate-800">Your business name
          <input className={`${input} mt-1.5`} value={name} maxLength={30} onChange={(e) => setName(e.target.value)} placeholder="e.g. Sunrise Bakery" />
        </label>
        <fieldset>
          <legend className="text-sm font-semibold text-slate-800">Brand colour</legend>
          <div className="mt-2 flex gap-2">
            {colours.map((c) => (
              <button key={c} type="button" onClick={() => setColour(c)} aria-label={`Colour ${c}`} aria-pressed={colour === c}
                className={`h-9 w-9 rounded-full ring-offset-2 transition ${colour === c ? 'ring-2 ring-slate-900' : ''}`} style={{ background: c }} />
            ))}
          </div>
        </fieldset>
        <p className="text-sm text-slate-600">This is only a sample layout. We design your real website around your brand, photos and content.</p>
        <Button to="/contact">Get this built for me</Button>
      </div>

      <div className="lg:col-span-3">
        <div className="overflow-hidden rounded-xl border border-slate-300 shadow-lg" style={{ background: '#fff' }} aria-label={`Sample website for ${title}`} role="img">
          <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: '#e5e7eb' }}>
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#f87171' }} /><span className="h-2.5 w-2.5 rounded-full" style={{ background: '#fbbf24' }} /><span className="h-2.5 w-2.5 rounded-full" style={{ background: '#4ade80' }} />
            <span className="ml-3 flex-1 truncate rounded-md px-3 py-0.5 text-[11px]" style={{ background: '#fff', color: '#6b7280' }}>www.{(name.trim() || 'yourbusiness').toLowerCase().replace(/[^a-z0-9]/g, '')}.com</span>
          </div>
          <div style={{ background: '#fff', color: '#111827' }}>
            <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: '1px solid #f1f5f9' }}>
              <span className="truncate text-sm font-extrabold" style={{ color: colour }}>{d.emoji} {title}</span>
              <span className="hidden gap-4 text-[11px] sm:flex" style={{ color: '#4b5563' }}>{d.items.map((i) => <span key={i}>{i}</span>)}<span>Contact</span></span>
            </div>
            <div className="px-5 py-9 text-center" style={{ background: `linear-gradient(135deg, ${colour}22, ${colour}08)` }}>
              <p className="text-2xl font-extrabold sm:text-3xl" style={{ color: '#111827' }}>{d.tag}</p>
              <p className="mx-auto mt-2 max-w-sm text-xs sm:text-sm" style={{ color: '#4b5563' }}>{d.blurb}</p>
              <span className="mt-5 inline-block rounded-lg px-5 py-2 text-xs font-semibold sm:text-sm" style={{ background: colour, color: '#fff' }}>{d.cta}</span>
            </div>
            <div className="grid grid-cols-3 gap-3 px-5 py-6">
              {d.items.map((i) => (
                <div key={i} className="rounded-lg p-3 text-center" style={{ border: '1px solid #e5e7eb' }}>
                  <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full text-lg" style={{ background: `${colour}18` }}>{d.emoji}</div>
                  <p className="text-xs font-semibold" style={{ color: '#111827' }}>{i}</p>
                  <div className="mx-auto mt-2 h-1.5 w-3/4 rounded" style={{ background: '#e5e7eb' }} /><div className="mx-auto mt-1 h-1.5 w-1/2 rounded" style={{ background: '#e5e7eb' }} />
                </div>
              ))}
            </div>
            <div className="px-5 py-3 text-center text-[11px]" style={{ background: '#111827', color: '#9ca3af' }}>© {title}. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
