import { Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { learning } from "@/lib/portfolio-data"

export function Learning() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Learning & Development"
        title="How I'm growing as an engineer"
        description="I'm a student, so this is where I invest my time instead of listing job titles."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {learning.map((item, i) => (
          <Reveal key={item} delay={i * 60}>
            <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sparkles className="h-[18px] w-[18px]" />
              </span>
              <p className="text-sm leading-relaxed text-foreground">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
