import { useState } from 'react'

export default function WordCounter() {
  const [text, setText] = useState('')
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const sentences = (text.match(/[^.!?]+[.!?]+/g) || []).length
  const stats = [
    ['Words', words],
    ['Characters', text.length],
    ['No spaces', text.replace(/\s/g, '').length],
    ['Sentences', sentences],
    ['Reading time', words ? `${Math.max(1, Math.round(words / 200))} min` : '0 min'],
  ]
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-800" htmlFor="wc">Paste or type your text</label>
      <textarea id="wc" value={text} onChange={(e) => setText(e.target.value)} rows={8}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
      <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {stats.map(([k, v]) => (
          <div key={k} className="rounded-xl bg-brand-50 p-3 text-center"><dt className="text-xs text-slate-600">{k}</dt><dd className="text-xl font-bold text-brand-700">{v}</dd></div>
        ))}
      </dl>
    </div>
  )
}
