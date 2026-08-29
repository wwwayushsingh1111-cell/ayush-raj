import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Learning } from "@/components/learning"
import { Achievements } from "@/components/achievements"
import { ExtraCurricular } from "@/components/extra-curricular"
import { Certifications } from "@/components/certifications"
import { GitHubSection } from "@/components/github-section"
import { ResumeSection } from "@/components/resume-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Learning />
        <Achievements />
        <ExtraCurricular />
        <Certifications />
        <GitHubSection />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
