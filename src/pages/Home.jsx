import { ArrowRight, MapPin } from 'lucide-react'
import Button from '../components/Button.jsx'
import Services from '../components/Services.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import WorkCard from '../components/WorkCard.jsx'
import WorkModal from '../components/WorkModal.jsx'
import ContactBanner from '../components/ContactBanner.jsx'
import { works } from '../data/works.js'
import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])
  const featured = works

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="mx-auto inline-flex animate-fade-up items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-semibold text-brand-700">
            <MapPin size={14} /> Web development company in Kerala, India
          </p>
          <h1 className="mt-6 animate-fade-up text-4xl font-extrabold leading-tight sm:text-6xl">
            Affordable websites for <span className="text-brand-600">your business</span>, deployed fast
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            We build modern websites, online stores and web apps at a price that works for you — and deploy them fast, so you can start running your business online.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/contact">Contact Us <ArrowRight size={16} /></Button>
            <Button to="/works" variant="secondary">View Our Works</Button>
          </div>
          <dl className="mx-auto mt-14 grid max-w-xl grid-cols-3 gap-4 text-center">
            {[['Affordable', 'Fair pricing'], ['Fast', 'Quick deployment'], ['Local', 'Kerala-based team']].map(([a, b]) => (
              <div key={a}><dt className="text-2xl font-bold text-slate-900">{a}</dt><dd className="text-xs text-slate-500">{b}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <Services />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Our works" title="Our latest work" text="Real projects we have built and launched." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((w) => <WorkCard key={w.id} work={w} onOpen={setActive} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/works" className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline">See all projects <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
      <WorkModal work={active} onClose={close} />
      <ContactBanner />
    </>
  )
}
