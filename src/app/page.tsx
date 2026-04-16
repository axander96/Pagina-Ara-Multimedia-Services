import { client } from '@/lib/sanity'
import {
  servicesQuery,
  projectsQuery,
  processStepsQuery,
  testimonialsQuery,
  aboutQuery,
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
  // Fetch only dynamic content from Sanity
  const [
    services,
    projects,
    processSteps,
    testimonials,
    about,
  ] = await Promise.all([
    client.fetch(servicesQuery),
    client.fetch(projectsQuery),
    client.fetch(processStepsQuery),
    client.fetch(testimonialsQuery),
    client.fetch(aboutQuery),
  ])

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services services={services} />
      <Projects projects={projects} />
      <Process steps={processSteps} />
      <About about={about} />
      <Testimonials testimonials={testimonials} />
      <Contact />
      <Footer />
    </main>
  )
}
