import { MapPin, Mail, Phone, MessageCircle, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { site } from '../data/site.js'

export default function Contact() {
  const rows = [
    { icon: MapPin, label: 'Location', value: site.location },
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
    { icon: MessageCircle, label: 'WhatsApp', value: site.phone, href: `https://wa.me/${site.whatsapp}` },
  ]
  return (
    <>
      <PageHeader eyebrow="Contact us" title="Let's talk about your project"
        text="Share a few details and we'll respond with a tailored solution, a project estimate and next steps." />
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-3"><ContactForm /></div>
          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl bg-slate-950 p-7 text-slate-300">
              <h2 className="text-xl font-bold !text-white">Get in touch</h2>
              <ul className="mt-5 space-y-4 text-sm">
                {rows.map(({ icon: I, label, value, href }) => (
                  <li key={label} className="flex gap-3">
                    <I size={18} className="mt-0.5 shrink-0 text-brand-500" />
                    <div><p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
                      {href ? <a href={href} className="text-white hover:underline" {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>{value}</a> : <p className="text-white">{value}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 p-7">
              <h2 className="flex items-center gap-2 text-lg font-bold"><Clock size={18} className="text-brand-600" /> Business hours</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {site.hours.map((h) => <li key={h.days} className="flex justify-between gap-4"><span>{h.days}</span><span className="font-medium text-slate-900">{h.time}</span></li>)}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
