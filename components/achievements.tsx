import { Trophy } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { achievements } from "@/lib/portfolio-data"

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading eyebrow="Achievements" title="Recognition along the way" />

      <div className="mx-auto max-w-2xl">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8">
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
              />
              <div className="relative flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent-2 text-primary-foreground">
                  <Trophy className="h-6 w-6" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
