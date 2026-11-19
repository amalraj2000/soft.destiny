import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Button from './Button.jsx'

export default function ContactBanner() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-16">
      <Reveal dir="zoom" className="mx-auto max-w-6xl 2xl:max-w-7xl overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-violet-600 px-5 py-10 text-center text-white sm:px-12">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold !text-white sm:text-4xl">Ready to build something that works for your business?</h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-100">Tell us about your idea. Get a tailored solution, a clear project estimate and a free consultation.</p>
        <div className="mt-8 flex justify-center">
          <Button to="/contact" variant="light">Contact Us <ArrowRight size={16} /></Button>
        </div>
      </Reveal>
    </section>
  )
}
