import { useState } from 'react'
import Button from '../Button.jsx'
import { pricing } from '../../data/tools.js'

const fmt = (n) => '₹' + (Math.round(n / 500) * 500).toLocaleString('en-IN')
const box = 'rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20'

export default function CostCalculator() {
  const [type, setType] = useState('business')
  const [pages, setPages] = useState(5)
  const [addons, setAddons] = useState([])
  const [rush, setRush] = useState(false)

  const t = pricing.types.find((x) => x.id === type)
  const extraPages = type === 'webapp' ? 0 : Math.max(0, pages - 5)
  let total = t.base + extraPages * pricing.pagePrice + pricing.addons.filter((a) => addons.includes(a.id)).reduce((s, a) => s + a.price, 0)
  if (rush) total *= 1 + pricing.rush
  const low = total * (1 - pricing.range)
  const high = total * (1 + pricing.range)
  const toggle = (id) => setAddons((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]))

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="space-y-6 lg:col-span-3">
        <fieldset>
          <legend className="text-sm font-semibold text-slate-800">What do you need?</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {pricing.types.map((p) => (
              <label key={p.id} className={`cursor-pointer rounded-lg border px-4 py-3 text-sm font-medium transition ${type === p.id ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-slate-300 text-slate-700 hover:border-brand-500'}`}>
                <input type="radio" name="ptype" className="sr-only" checked={type === p.id} onChange={() => setType(p.id)} />{p.label}
              </label>
            ))}
          </div>
        </fieldset>

        {type !== 'webapp' && (
          <label className="block text-sm font-semibold text-slate-800">Number of pages: <span className="text-brand-600">{pages}</span>
            <input type="range" min="1" max="20" value={pages} onChange={(e) => setPages(+e.target.value)} className="mt-2 w-full accent-indigo-600" />
          </label>
        )}

        <fieldset>
          <legend className="text-sm font-semibold text-slate-800">Extras</legend>
          <div className="mt-2 space-y-2">
            {pricing.addons.map((a) => (
              <label key={a.id} className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
                <input type="checkbox" checked={addons.includes(a.id)} onChange={() => toggle(a.id)} className="h-4 w-4 accent-indigo-600" />{a.label}
              </label>
            ))}
            <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
              <input type="checkbox" checked={rush} onChange={(e) => setRush(e.target.checked)} className="h-4 w-4 accent-indigo-600" />Need it fast (priority delivery)
            </label>
          </div>
        </fieldset>
      </div>

      <aside className="h-fit rounded-2xl border border-brand-100 bg-brand-50 p-6 text-center lg:col-span-2" aria-live="polite">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Estimated cost</p>
        <p className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">{fmt(low)} – {fmt(high)}</p>
        <p className="mt-3 text-xs text-slate-600">A rough guide only. Your final price depends on the details of your project.</p>
        <Button to="/contact" className="mt-5 w-full">Get an exact quote</Button>
      </aside>
    </div>
  )
}
