import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, text, center = true }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base text-slate-600 sm:text-lg">{text}</p>}
    </Reveal>
  )
}
