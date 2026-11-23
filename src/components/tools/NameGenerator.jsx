import { useState } from 'react'
import { Copy, Check, Loader2 } from 'lucide-react'

const prefixes = ['Get', 'My', 'The', 'Smart', 'Pure', 'Prime', 'Bright', 'Swift', 'Nova', 'Urban']
const suffixes = ['Hub', 'Studio', 'Works', 'Co', 'Point', 'Lab', 'Nest', 'Zone', 'Kart', 'Wise']
const tlds = ['.com', '.in', '.co.in']

const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '')
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1)
const pick = (arr, n) => [...arr].sort(() => Math.random() - 0.5).slice(0, n)

function makeNames(keyword, city) {
  const k = cap(clean(keyword)), c = city ? cap(clean(city)) : ''
  if (!k) return []
  const names = [
    ...pick(prefixes, 4).map((p) => p + k),
    ...pick(suffixes, 4).map((s) => k + s),
    k + 'ly', k + 'ify', 'Go' + k,
  ]
  if (c) names.push(k + c, c + k, c + k + 'Co')
  return [...new Set(names)].slice(0, 12)
}

// DNS lookup over HTTPS: a domain with no name servers (NXDOMAIN) is very likely unregistered.
async function isTaken(domain) {
  const res = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=NS`, { headers: { accept: 'application/dns-json' } })
  const d = await res.json()
  return d.Status !== 3
}

export default function NameGenerator() {
  const [keyword, setKeyword] = useState('')
  const [city, setCity] = useState('')
  const [names, setNames] = useState([])
  const [avail, setAvail] = useState({}) // domain -> 'checking' | 'free' | 'taken' | 'unknown'
  const [copied, setCopied] = useState('')

  const generate = (e) => {
    e?.preventDefault()
    setNames(makeNames(keyword, city)); setAvail({})
  }
  const check = async (name) => {
    const base = clean(name)
    for (const t of tlds) {
      const d = base + t
      setAvail((a) => ({ ...a, [d]: 'checking' }))
      try { const taken = await isTaken(d); setAvail((a) => ({ ...a, [d]: taken ? 'taken' : 'free' })) }
      catch { setAvail((a) => ({ ...a, [d]: 'unknown' })) }
    }
  }
  const copy = async (n) => { try { await navigator.clipboard.writeText(n); setCopied(n); setTimeout(() => setCopied(''), 1200) } catch { /* ignore */ } }

  const input = 'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20'
  const badge = { free: 'bg-emerald-100 text-emerald-800', taken: 'bg-slate-200 text-slate-600 line-through', unknown: 'bg-amber-100 text-amber-800', checking: 'bg-slate-100 text-slate-500' }

  return (
    <div>
      <form onSubmit={generate} className="grid gap-3 sm:grid-cols-5">
        <label className="sm:col-span-2 text-sm font-medium text-slate-800">What does your business do?
          <input className={`${input} mt-1.5`} value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="e.g. bakery, fitness, tailor" required />
        </label>
        <label className="sm:col-span-2 text-sm font-medium text-slate-800">City or place (optional)
          <input className={`${input} mt-1.5`} value={city} onChange={(e) => setCity(e.target.value)} placeholder="e.g. Kozhikode" />
        </label>
        <button type="submit" className="self-end rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:py-2.5">{names.length ? 'Shuffle' : 'Get ideas'}</button>
      </form>

      {names.length > 0 && (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {names.map((n) => {
            const doms = tlds.map((t) => clean(n) + t)
            const started = doms.some((d) => avail[d])
            return (
              <li key={n} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-lg font-bold text-slate-900">{n}</span>
                  <button onClick={() => copy(n)} aria-label={`Copy ${n}`} className="rounded-md p-1.5 text-slate-500 hover:text-brand-600">{copied === n ? <Check size={16} /> : <Copy size={16} />}</button>
                </div>
                {started ? (
                  <ul className="mt-3 flex flex-wrap gap-1.5 text-xs font-medium">
                    {doms.map((d) => <li key={d} className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 ${badge[avail[d] || 'checking']}`}>
                      {avail[d] === 'checking' && <Loader2 size={11} className="animate-spin" />}{d}{avail[d] === 'free' ? ' ✓' : ''}</li>)}
                  </ul>
                ) : (
                  <button onClick={() => check(n)} className="mt-3 text-xs font-semibold text-brand-700 hover:underline">Check domains</button>
                )}
              </li>
            )
          })}
        </ul>
      )}
      {names.length > 0 && <p className="mt-4 text-xs text-slate-500">✓ means the domain looks unregistered. Always confirm with a domain registrar before you buy.</p>}
    </div>
  )
}
