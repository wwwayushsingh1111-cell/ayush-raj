import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { about } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading eyebrow="About Me" title="A student engineer, building the fundamentals" />

      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="h-full rounded-2xl border border-border bg-card p-8">
            <p className="text-pretty leading-relaxed text-muted-foreground">{about.paragraph}</p>

            <p className="mt-6 mb-3 text-sm font-semibold text-foreground">I&apos;m interested in</p>
            <ul className="flex flex-wrap gap-2">
              {about.interests.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {about.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                <span className="bg-gradient-to-r from-primary to-accent-2 bg-clip-text text-lg font-bold text-transparent">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
