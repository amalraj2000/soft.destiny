import PageHeader from '../components/PageHeader.jsx'
import WorksShowcase from '../components/WorksShowcase.jsx'
import ContactBanner from '../components/ContactBanner.jsx'

export default function Works() {
  return (
    <>
      <PageHeader eyebrow="Our works" title="Websites we have built for businesses"
        text="A look at the websites and web apps we have delivered. More projects are added as we launch them." />
      <section className="py-14">
        <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-4 sm:px-6"><WorksShowcase /></div>
      </section>
      <ContactBanner />
    </>
  )
}
