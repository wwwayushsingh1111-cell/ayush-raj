import { Users } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { extraCurricular } from "@/lib/portfolio-data"

export function ExtraCurricular() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Beyond Academics"
        title="Extra-Curricular Activities"
        description="Placeholders ready for you to add your real activities."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {extraCurricular.map((item, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="flex h-full flex-col rounded-2xl border border-dashed border-border bg-card p-6 transition-colors hover:border-primary/40">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </span>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
