import { Github } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { GITHUB_PROFILE_URL } from "@/lib/portfolio-data"

export function GitHubSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-2/10"
          />
          <div className="relative mx-auto max-w-xl">
            <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent-2 text-primary-foreground">
              <Github className="h-7 w-7" />
            </span>
            <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">Building. Learning. Improving.</h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Explore my projects, experiments and learning journey on GitHub.
            </p>
            <Button asChild size="lg" className="mt-7 gap-2">
              <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
