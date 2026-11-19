import { useState, useCallback } from 'react'
import Reveal from './Reveal.jsx'
import WorkCard from './WorkCard.jsx'
import WorkModal from './WorkModal.jsx'
import { works } from '../data/works.js'

export default function WorksShowcase() {
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((w, i) => <Reveal key={w.id} delay={i * 100} dir="zoom"><WorkCard work={w} onOpen={setActive} /></Reveal>)}
      </div>
      <WorkModal work={active} onClose={close} />
    </>
  )
}
