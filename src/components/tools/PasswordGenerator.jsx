import { useState, useCallback } from 'react'
import { Copy, RefreshCw, Check } from 'lucide-react'

const sets = {
  lower: 'abcdefghijkmnopqrstuvwxyz',
  upper: 'ABCDEFGHJKLMNPQRSTUVWXYZ',
  digits: '23456789',
  symbols: '!@#$%^&*()-_=+?',
}

function generate(length, opts) {
  const chosen = Object.keys(sets).filter((k) => opts[k])
  if (!chosen.length) return ''
  const pool = chosen.map((k) => sets[k]).join('')
  const rand = (max) => { // unbiased random int using the browser's crypto
    const limit = Math.floor(0x100000000 / max) * max
    const a = new Uint32Array(1)
    do { crypto.getRandomValues(a) } while (a[0] >= limit)
    return a[0] % max
  }
  const out = chosen.map((k) => sets[k][rand(sets[k].length)]) // at least one of each kind
  while (out.length < length) out.push(pool[rand(pool.length)])
  for (let i = out.length - 1; i > 0; i--) { const j = rand(i + 1); [out[i], out[j]] = [out[j], out[i]] }
  return out.join('')
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(16)
  const [opts, setOpts] = useState({ lower: true, upper: true, digits: true, symbols: true })
  const [pw, setPw] = useState(() => generate(16, { lower: true, upper: true, digits: true, symbols: true }))
  const [copied, setCopied] = useState(false)

  const make = useCallback((l = length, o = opts) => { setPw(generate(l, o)); setCopied(false) }, [length, opts])
  const copy = async () => {
    try { await navigator.clipboard.writeText(pw); setCopied(true); setTimeout(() => setCopied(false), 1500) } catch { /* ignore */ }
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white p-3">
        <output className="min-w-0 flex-1 break-all font-mono text-base text-slate-900 sm:text-lg" aria-live="polite">{pw || 'Select at least one option'}</output>
        <button onClick={() => make()} aria-label="Generate new password" className="rounded-md p-2 text-slate-600 hover:text-brand-600"><RefreshCw size={18} /></button>
        <button onClick={copy} aria-label="Copy password" className="rounded-md p-2 text-slate-600 hover:text-brand-600">{copied ? <Check size={18} /> : <Copy size={18} />}</button>
      </div>
      <label className="mt-5 block text-sm font-semibold text-slate-800">Length: <span className="text-brand-600">{length}</span>
        <input type="range" min="8" max="48" value={length} onChange={(e) => { const l = +e.target.value; setLength(l); make(l) }} className="mt-2 w-full accent-indigo-600" />
      </label>
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
        {[['lower', 'Lowercase'], ['upper', 'Uppercase'], ['digits', 'Numbers'], ['symbols', 'Symbols']].map(([k, label]) => (
          <label key={k} className="flex cursor-pointer items-center gap-2">
            <input type="checkbox" checked={opts[k]} className="h-4 w-4 accent-indigo-600"
              onChange={(e) => { const o = { ...opts, [k]: e.target.checked }; setOpts(o); make(length, o) }} />{label}
          </label>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate-500">Generated in your browser — nothing is sent or stored.</p>
    </div>
  )
}
