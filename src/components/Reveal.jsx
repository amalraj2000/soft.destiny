import { useEffect, useRef } from 'react'

// Fades/slides children in when they scroll into view. Plays once.
// dir: 'up' (default) | 'left' | 'right' | 'zoom'. delay in ms (use for staggering).
export default function Reveal({ as: Tag = 'div', dir = 'up', delay = 0, className = '', children, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { el.classList.add('in'); return }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} data-dir={dir} style={{ '--d': `${delay}ms` }} className={`reveal ${className}`} {...props}>
      {children}
    </Tag>
  )
}
