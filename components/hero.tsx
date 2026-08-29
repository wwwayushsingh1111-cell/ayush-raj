import Image from "next/image"
import { ArrowRight, FileText, Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { EMAIL_ADDRESS, GITHUB_PROFILE_URL, LINKEDIN_URL, RESUME_URL, profile } from "@/lib/portfolio-data"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="reveal is-visible flex flex-col items-start">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.statusBadge}
          </span>

          <h1 className="text-balance font-mono text-4xl font-bold tracking-tight sm:text-6xl">
            {profile.name.toUpperCase()}
          </h1>
          <p className="mt-4 bg-gradient-to-r from-primary via-accent to-accent-2 bg-clip-text text-lg font-semibold text-transparent sm:text-xl">
            {profile.role}
          </p>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <a href="#projects">
                View My Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { icon: Github, href: GITHUB_PROFILE_URL, label: "GitHub" },
              { icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${EMAIL_ADDRESS}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="reveal is-visible relative mx-auto w-full max-w-md">
          <div className="animate-float relative aspect-square overflow-hidden rounded-3xl border border-border glass">
            <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent-2/10" />
            <Image
              src="/hero-ai-visual.png"
              alt="Abstract AI neural network visualization"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
          {/* accent code chip */}
          <div className="glass absolute -bottom-4 -left-4 hidden rounded-xl border border-border px-4 py-3 font-mono text-xs text-muted-foreground sm:block">
            <span className="text-accent">const</span> focus ={" "}
            <span className="text-primary">{"'AI/ML'"}</span>
          </div>
          <div className="glass absolute -right-4 top-8 hidden rounded-xl border border-border px-4 py-3 font-mono text-xs text-muted-foreground sm:block">
            <span className="text-accent-2">CGPA</span> {profile.cgpa}
          </div>
        </div>
      </div>
    </section>
  )
}
