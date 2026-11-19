export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>
        <h1 className="mt-2 animate-fade-up text-3xl font-bold sm:text-5xl">{title}</h1>
        <p style={{ animationDelay: '150ms' }} className="mt-5 animate-fade-up text-base text-slate-600 sm:text-lg">{text}</p>
      </div>
    </section>
  )
}
