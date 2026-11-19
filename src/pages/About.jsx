import { Check } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import ContactBanner from '../components/ContactBanner.jsx'
import { values, process, skills } from '../data/content.js'
import { site } from '../data/site.js'

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About softDestiny" title="Engineering practical web solutions from Kerala"
        text="We are a software and web development company in Kerala helping local businesses and global clients turn ideas into reliable digital products." />

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl 2xl:max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2">
          <Reveal dir="left">
            <h2 className="text-3xl font-bold">Our story</h2>
            <p className="mt-4 text-slate-600">softDestiny started with a simple observation: businesses in Kerala, big and small, deserved the same quality of web engineering as companies anywhere in the world — without the complexity or inflated cost.</p>
            <p className="mt-4 text-slate-600">Today we work with business owners who want an affordable website, an online store or a custom web app. The approach is always the same: understand the business, build it cleanly, deploy it fast.</p>
          </Reveal>
          <Reveal dir="right" className="rounded-2xl bg-brand-50 p-8">
            <h3 className="text-xl font-bold">Our engineering approach</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {['Modern stack: React, Next.js, Node.js, Laravel and PHP', 'Performance budgets from day one', 'Modular, documented, test-friendly code', 'Affordable pricing, transparent communication and clear estimates'].map((t) => (
                <li key={t} className="flex gap-2"><Check size={18} className="mt-0.5 shrink-0 text-brand-600" />{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="What we stand for" title="Speed, clean code, reliability, results" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal delay={i * 100} key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon name={v.icon} size={22} /></span>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Our skills" title="The technologies we build with"
            text="Whatever your business needs, we pick the right tool and deliver it fast, at an affordable price." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {skills.map((k, i) => (
              <Reveal as="li" dir="zoom" delay={i * 90} key={k.name} className="rounded-2xl border border-slate-200 p-6 text-center">
                <h3 className="text-lg font-bold text-brand-700">{k.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{k.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading eyebrow="Leadership" title="Led by an engineer" />
          <Reveal className="mt-10 flex flex-col items-center gap-5 rounded-2xl border border-slate-200 p-8 text-center sm:flex-row sm:text-left">
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-brand-600 text-2xl font-bold text-white" aria-hidden>
              {site.ceo.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
            </span>
            <div>
              <h3 className="text-xl font-bold">{site.ceo.name}</h3>
              <p className="text-sm font-medium text-brand-600">{site.ceo.role} · {site.ceo.title}</p>
              <p className="mt-2 text-sm text-slate-600">softDestiny is run by a working software engineer, so every project gets hands-on technical leadership, clear communication and clean engineering from day one.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="How we work" title="A simple, transparent process" />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <Reveal as="li" delay={i * 120} key={s.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-sm font-bold text-brand-600">0{i + 1}</span>
                <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <ContactBanner />
    </>
  )
}
