import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import CostCalculator from '../components/tools/CostCalculator.jsx'
import WordCounter from '../components/tools/WordCounter.jsx'
import PasswordGenerator from '../components/tools/PasswordGenerator.jsx'
import MockupPreview from '../components/tools/MockupPreview.jsx'
import NameGenerator from '../components/tools/NameGenerator.jsx'
import { tools } from '../data/tools.js'

const panels = { cost: CostCalculator, words: WordCounter, password: PasswordGenerator, mockup: MockupPreview, names: NameGenerator }

export default function Tools() {
  const [active, setActive] = useState('cost')
  const Panel = panels[active]
  const tool = tools.find((t) => t.id === active)
  return (
    <>
      <PageHeader eyebrow="Free tools" title="Handy tools, free to use"
        text="Small tools we built for business owners and developers. No sign-up, and everything runs in your browser." />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div role="tablist" aria-label="Tools" className="flex flex-wrap justify-center gap-2">
            {tools.map((t) => (
              <button key={t.id} role="tab" aria-selected={active === t.id} onClick={() => setActive(t.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${active === t.id ? 'bg-brand-600 text-white shadow-sm' : 'border border-slate-300 text-slate-700 hover:border-brand-500 hover:text-brand-700'}`}>
                {t.title}
              </button>
            ))}
          </div>
          <div role="tabpanel" className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold sm:text-2xl">{tool.title}</h2>
            <p className="mb-6 mt-1 text-sm text-slate-600">{tool.text}</p>
            <Panel />
          </div>
        </div>
      </section>
    </>
  )
}
