import { useEffect, useRef } from 'react'

// Moves its content vertically at a fraction of scroll speed (speed 0.2 = drifts slower).
export default function Parallax({ speed = 0.2, className = '', children, ...props }) {
  const ref = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      raf = 0
      if (ref.current) ref.current.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [speed])
  return <div ref={ref} className={className} {...props}>{children}</div>
}
