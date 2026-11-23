import { ArrowRight, MapPin } from 'lucide-react'
import Button from '../components/Button.jsx'
import Stats from '../components/Stats.jsx'
import Services from '../components/Services.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import WorkCard from '../components/WorkCard.jsx'
import WorkModal from '../components/WorkModal.jsx'
import ContactBanner from '../components/ContactBanner.jsx'
import { works } from '../data/works.js'
import { useState, useCallback } from 'react'
import Reveal from '../components/Reveal.jsx'
import Parallax from '../components/Parallax.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])
  const featured = works

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <Parallax aria-hidden speed={0.25} className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2"><div className="h-full w-full animate-pulse rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <Parallax aria-hidden speed={0.5} className="pointer-events-none absolute right-0 top-40 h-64 w-64"><div className="h-full w-full rounded-full bg-cyan-400/15 blur-3xl" /></Parallax>
        <Parallax aria-hidden speed={0.35} className="pointer-events-none absolute bottom-0 left-0 h-64 w-64"><div className="h-full w-full rounded-full bg-violet-400/15 blur-3xl" /></Parallax>
        <div className="relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-28">
          <p className="mx-auto inline-flex animate-fade-up items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-semibold text-brand-700">
            <MapPin size={14} /> Web development company in Kerala, India
          </p>
          <h1 style={{ animationDelay: '120ms' }} className="mt-6 animate-fade-up text-[2rem] font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Affordable websites for <span className="text-shimmer">your business</span>, deployed fast
          </h1>
          <p style={{ animationDelay: '240ms' }} className="mx-auto mt-6 max-w-2xl animate-fade-up text-base sm:text-lg text-slate-600">
            We build modern websites, online stores and web apps at a price that works for you — and deploy them fast, so you can start running your business online.
          </p>
          <div style={{ animationDelay: '360ms' }} className="mt-9 flex animate-fade-up flex-col justify-center gap-3 sm:flex-row">
            <Button to="/contact" className="w-full sm:w-auto">Contact Us <ArrowRight size={16} /></Button>
            <Button to="/works" variant="secondary" className="w-full sm:w-auto">View Our Works</Button>
          </div>
          <dl style={{ animationDelay: '480ms' }} className="mx-auto mt-10 animate-fade-up sm:mt-14 grid max-w-md grid-cols-2 gap-4 text-center">
            {[['Affordable', 'Fair pricing'], ['Fast', 'Quick deployment']].map(([a, b]) => (
              <div key={a}><dt className="text-xl font-bold text-slate-900 sm:text-2xl">{a}</dt><dd className="text-xs text-slate-500">{b}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <Stats />
      <Services />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Our works" title="Our latest work" text="Real projects we have built and launched." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((w, i) => <Reveal key={w.id} delay={i * 100} dir="zoom"><WorkCard work={w} onOpen={setActive} /></Reveal>)}
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/works" className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline">See all projects <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
      <WorkModal work={active} onClose={close} />
      <ContactBanner />
    </>
  )
}
