import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-28 text-center">
      <p className="text-6xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you're looking for doesn't exist.</p>
      <Button to="/" className="mt-8">Back to Home</Button>
    </section>
  )
}
