import { useEffect, useRef } from 'react'
import { X, Check, ExternalLink } from 'lucide-react'
import Button from './Button.jsx'

export default function WorkModal({ work, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!work) return
    const prev = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); prev?.focus?.() }
  }, [work, onClose])

  if (!work) return null
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="work-title">
      <div className="absolute inset-0 animate-fade-up bg-slate-900/60" onClick={onClose} />
      <div className="relative max-h-[92dvh] w-full max-w-2xl animate-fade-up overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
        <div className={`flex h-40 items-center justify-center bg-gradient-to-br ${work.gradient}`}>
          {work.image && <img src={work.image} alt={`${work.title} logo`} className={`h-32 w-32 ${work.imageShape === 'square' ? 'rounded-2xl' : 'rounded-full'} shadow-md`} />}
        </div>
        <button ref={closeRef} onClick={onClose} aria-label="Close" className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-slate-800 hover:bg-white"><X size={18} /></button>
        <div className="p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{work.type}</p>
          <h2 id="work-title" className="mt-1 text-2xl font-bold">{work.title}</h2>
          <p className="mt-3 text-slate-600">{work.summary}</p>

          <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-slate-900">The challenge</h3>
          <p className="mt-1 text-slate-600">{work.challenge}</p>

          <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-slate-900">Highlights</h3>
          <ul className="mt-2 space-y-2">
            {work.highlights.map((h) => <li key={h} className="flex gap-2 text-sm"><Check size={18} className="mt-0.5 shrink-0 text-sky-500" />{h}</li>)}
          </ul>

          <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-slate-900">Outcome</h3>
          <p className="mt-1 text-slate-600">{work.outcome}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {work.tech.map((t) => <li key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium">{t}</li>)}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {work.url && <Button as="a" className="w-full sm:w-auto" href={work.url} target="_blank" rel="noreferrer">Visit live site <ExternalLink size={16} /></Button>}
            <Button to="/contact" variant="secondary" className="w-full sm:w-auto">Start a similar project</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
