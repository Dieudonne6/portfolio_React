import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Education } from "@/components/portfolio/education"
import { Certifications } from "@/components/portfolio/certifications"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { ParticlesBackground } from "@/components/portfolio/particles"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ParticlesBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
