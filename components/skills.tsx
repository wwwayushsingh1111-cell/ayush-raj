import { Braces, Cpu, Globe, Wrench } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { skillGroups } from "@/lib/portfolio-data"

const icons = [Braces, Cpu, Globe, Wrench]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Technologies I'm learning & working with"
        description="A snapshot of the languages and tools I'm actively building with as a student."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={group.category} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold">{group.category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
