import Reveal from './Reveal.jsx'
import CountUp from './CountUp.jsx'
import { works } from '../data/works.js'
import { services } from '../data/content.js'
import { tools } from '../data/tools.js'

// Edit these numbers as the company grows.
const stats = [
  { value: works.length, label: 'Projects launched' },
  { value: services.length, label: 'Services we offer' },
  { value: tools.length, label: 'Free tools' },
  { value: 1, suffix: ' day', label: 'Reply time on enquiries' },
]

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white py-10 sm:py-12">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 text-center sm:px-6 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <dt className="text-3xl font-extrabold text-brand-600 sm:text-4xl"><CountUp to={s.value} suffix={s.suffix} /></dt>
            <dd className="mt-1 text-sm text-slate-600">{s.label}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
