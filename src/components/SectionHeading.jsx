export default function SectionHeading({ eyebrow, title, text, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-slate-600">{text}</p>}
    </div>
  )
}
