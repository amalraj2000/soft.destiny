import { Link } from 'react-router-dom'

const styles = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-600/30',
  secondary: 'border border-slate-300 bg-white text-slate-800 hover:border-brand-500 hover:text-brand-700',
  light: 'bg-white text-brand-700 hover:bg-brand-50',
  outlineLight: 'border border-white/40 text-white hover:bg-white/10',
}

export default function Button({ to, as, variant = 'primary', className = '', children, ...props }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${styles[variant]} ${className}`
  if (as === 'a') return <a className={cls} {...props}>{children}</a>
  return to
    ? <Link to={to} className={cls} {...props}>{children}</Link>
    : <button className={cls} {...props}>{children}</button>
}
