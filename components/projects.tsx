import { ArrowUpRight, Check } from "lucide-react"
import { Github } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Things I've built while learning"
        description="Practical projects exploring AI/ML, IoT and web development."
      />

      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal as="article" key={project.title} delay={i * 80}>
            <div className="grid gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 sm:p-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="sm" variant="secondary" className="gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                  {project.demo && (
                    <Button asChild size="sm" className="gap-2">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background/40 p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Key features
                </p>
                <ul className="space-y-2.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
