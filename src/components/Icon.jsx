import { Rocket, Zap, Code2, ShieldCheck, TrendingUp, Globe, ShoppingCart, LayoutDashboard } from 'lucide-react'

// Explicit map (instead of importing all icons) keeps the bundle small.
const icons = { Rocket, Zap, Code2, ShieldCheck, TrendingUp, Globe, ShoppingCart, LayoutDashboard }

export default function Icon({ name, ...props }) {
  const C = icons[name]
  return C ? <C {...props} /> : null
}
