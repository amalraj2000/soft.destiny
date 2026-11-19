import SectionHeading from './SectionHeading.jsx'
import Icon from './Icon.jsx'
import { services } from '../data/content.js'

export default function Services() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="What we build" title="Affordable websites for your business"
          text="We build quality websites and web apps at a fair price, and deploy them fast so you can focus on running your business." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon name={s.icon} size={24} /></span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
