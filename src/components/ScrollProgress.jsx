import { useEffect, useRef } from 'react'

// Thin gradient bar at the top showing page scroll progress.
export default function ScrollProgress() {
  const bar = useRef(null)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? window.scrollY / h : 0
      if (bar.current) bar.current.style.transform = `scaleX(${p})`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [])
  return <div ref={bar} aria-hidden className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-600 via-violet-500 to-cyan-400" />
}
