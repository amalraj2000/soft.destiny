import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { projectTypes } from '../data/content.js'

const empty = { name: '', company: '', contact: '', type: 'Business website', message: '' }
const field = 'mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-base sm:text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20'

export default function ContactForm() {
  const [data, setData] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!data.name.trim()) e.name = 'Please enter your name.'
    const c = data.contact.trim()
    if (!c) e.contact = 'Enter an email or phone number.'
    else if (!/^\S+@\S+\.\S+$/.test(c) && c.replace(/\D/g, '').length < 8) e.contact = 'Enter a valid email or phone number.'
    if (data.message.trim().length < 10) e.message = 'Tell us a little about your project (10+ characters).'
    return e
  }

  const submit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    setLoading(true)
    // TODO: connect to a real backend / form service (Formspree, Web3Forms, own API).
    await new Promise((r) => setTimeout(r, 700))
    setLoading(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="grid place-items-center rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center" role="status">
        <CheckCircle2 size={48} className="text-emerald-500" />
        <h3 className="mt-4 text-2xl font-bold">Thank you, {data.name.split(' ')[0]}!</h3>
        <p className="mt-2 max-w-sm text-slate-600">We have received your enquiry and will get back to you within one business day.</p>
        <button onClick={() => { setData(empty); setSent(false) }} className="mt-6 text-sm font-semibold text-brand-700 hover:underline">Send another enquiry</button>
      </div>
    )
  }

  const err = (k) => errors[k] && <p id={`${k}-err`} className="mt-1 text-xs text-red-600">{errors[k]}</p>
  const aria = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })

  return (
    <form onSubmit={submit} noValidate className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-800">Name *
          <input className={field} value={data.name} onChange={set('name')} autoComplete="name" {...aria('name')} />{err('name')}
        </label>
        <label className="block text-sm font-medium text-slate-800">Business / Company name
          <input className={field} value={data.company} onChange={set('company')} autoComplete="organization" />
        </label>
      </div>
      <label className="block text-sm font-medium text-slate-800">Email or phone *
        <input className={field} value={data.contact} onChange={set('contact')} autoComplete="email" {...aria('contact')} />{err('contact')}
      </label>
      <fieldset>
        <legend className="text-sm font-medium text-slate-800">What do you need?</legend>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {projectTypes.map((o) => (
            <label key={o} className={`cursor-pointer rounded-lg border px-3 py-2.5 text-center text-sm font-medium transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-500 ${data.type === o ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-slate-300 hover:border-slate-400'}`}>
              <input type="radio" name="type" value={o} checked={data.type === o} onChange={set('type')} className="sr-only" />{o}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block text-sm font-medium text-slate-800">Message *
        <textarea rows={5} className={field} value={data.message} onChange={set('message')} placeholder="What would you like to build?" {...aria('message')} />{err('message')}
      </label>
      <button disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60 sm:w-auto">
        {loading ? 'Sending…' : <>Send enquiry <Send size={16} /></>}
      </button>
    </form>
  )
}
