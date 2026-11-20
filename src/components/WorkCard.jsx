import { ArrowUpRight } from 'lucide-react'

export default function WorkCard({ work, onOpen }) {
  return (
    <button onClick={() => onOpen(work)} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
      <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${work.gradient} p-5`}>
        {work.image
          ? <img src={work.image} alt={`${work.title} logo`} className={`h-full w-auto ${work.imageShape === 'square' ? 'rounded-2xl' : 'rounded-full'} shadow-md`} loading="lazy" />
          : <span className="text-2xl font-extrabold text-white drop-shadow">{work.title}</span>}
        <ArrowUpRight className="absolute right-4 top-4 text-white opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{work.type}</p>
        <p className="mt-2 flex-1 text-sm text-slate-600">{work.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {work.tech.map((t) => <li key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{t}</li>)}
        </ul>
      </div>
    </button>
  )
}
