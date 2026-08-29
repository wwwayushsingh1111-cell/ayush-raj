import { Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { EMAIL_ADDRESS, GITHUB_PROFILE_URL, LINKEDIN_URL } from "@/lib/portfolio-data"

export function Contact() {
  const channels = [
    { icon: Mail, label: "Email", value: EMAIL_ADDRESS, href: `mailto:${EMAIL_ADDRESS}` },
    { icon: Github, label: "GitHub", value: "View Profile", href: GITHUB_PROFILE_URL },
    { icon: Linkedin, label: "LinkedIn", value: "Connect", href: LINKEDIN_URL },
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's connect"
        description="I'm open to internships, projects, and learning opportunities. Feel free to reach out."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {channels.map((channel, i) => (
          <Reveal key={channel.label} delay={i * 80}>
            <a
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <channel.icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold">{channel.label}</span>
              <span className="mt-1 break-all text-sm text-muted-foreground">{channel.value}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
