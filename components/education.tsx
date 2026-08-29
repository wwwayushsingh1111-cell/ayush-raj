import { Award, GraduationCap } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { educationTimeline } from "@/lib/portfolio-data"

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading eyebrow="Education" title="My academic journey" />

      <div className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <div
          aria-hidden
          className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-[23px]"
        />

        <ul className="space-y-8">
          {educationTimeline.map((item, i) => {
            const Icon = item.type === "achievement" ? Award : GraduationCap
            return (
              <Reveal as="li" key={item.institution} delay={i * 100} className="relative pl-14 sm:pl-16">
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{item.institution}</h3>
                    <span className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-primary">{item.degree}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
