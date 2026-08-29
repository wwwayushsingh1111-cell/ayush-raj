import { ExternalLink, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { certifications } from "@/lib/portfolio-data"

export function Certifications() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Certifications"
        title="Courses & certificates"
        description="Cyber security certifications I've completed."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name + i} delay={i * 80}>
            <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="text-balance font-semibold leading-snug">{cert.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              <div className="mt-auto flex items-center justify-between pt-5">
                <span className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground">
                  {cert.year}
                </span>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
                >
                  View Certificate
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
