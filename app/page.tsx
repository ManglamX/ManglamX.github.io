import { SiteHeader } from "@/components/site-header"
import { CyberHero } from "@/components/cyber-hero"
import { About } from "@/components/about"
import { ProjectsGrid } from "@/components/projects-grid"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Certifications } from "@/components/certifications"
import { Activities } from "@/components/activities"
import { MatrixBackground } from "@/components/ui/matrix-background"

export default function Page() {
  return (
    <>
      <MatrixBackground />
      <div className="scanline"></div>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-3 py-2 rounded-md font-mono"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="min-h-dvh relative z-10">
        <CyberHero />
        <About />
        <Skills />
        <ProjectsGrid />
        <Experience />
        <Education />
        <Certifications />
        <Activities />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
