import { client } from '@/lib/sanity'
import {
  siteConfigQuery,
  heroQuery,
  servicesQuery,
  projectsQuery,
  processStepsQuery,
  testimonialsQuery,
  aboutQuery,
  contactQuery,
} from '@/lib/queries'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const revalidate = 10 // Revalidar cada 10 segundos para ver cambios de Sanity más rápido

export default async function Home() {
  // Fetch all data from Sanity
  const [
    siteConfig,
    hero,
    services,
    projects,
    processSteps,
    testimonials,
    about,
    contact,
  ] = await Promise.all([
    client.fetch(siteConfigQuery),
    client.fetch(heroQuery),
    client.fetch(servicesQuery),
    client.fetch(projectsQuery),
    client.fetch(processStepsQuery),
    client.fetch(testimonialsQuery),
    client.fetch(aboutQuery),
    client.fetch(contactQuery),
  ])

  return (
    <main className="min-h-screen">
      <Navbar siteConfig={siteConfig} heroCta={hero?.ctaPrimary} />
      <Hero hero={hero} siteConfig={siteConfig} />
      <Services services={services} />
      <Projects projects={projects} />
      <Process steps={processSteps} />
      <About about={about} />
      <Testimonials testimonials={testimonials} />
      <Contact contact={contact} siteConfig={siteConfig} />
      <Footer siteConfig={siteConfig} />
    </main>
  )
}
