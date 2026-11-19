import { ArrowRight } from 'lucide-react'
import Button from './Button.jsx'

export default function ContactBanner() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-violet-600 px-6 py-14 text-center text-white sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold !text-white sm:text-4xl">Ready to build something that works for your business?</h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-100">Tell us about your idea. Get a tailored solution, a clear project estimate and a free consultation.</p>
        <div className="mt-8 flex justify-center">
          <Button to="/contact" variant="light">Contact Us <ArrowRight size={16} /></Button>
        </div>
      </div>
    </section>
  )
}
