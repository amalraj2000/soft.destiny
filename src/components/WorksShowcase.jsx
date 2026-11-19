import { useState, useCallback } from 'react'
import WorkCard from './WorkCard.jsx'
import WorkModal from './WorkModal.jsx'
import { works } from '../data/works.js'

export default function WorksShowcase() {
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((w) => <WorkCard key={w.id} work={w} onOpen={setActive} />)}
      </div>
      <WorkModal work={active} onClose={close} />
    </>
  )
}
