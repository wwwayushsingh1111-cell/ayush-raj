import { Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"
import { EMAIL_ADDRESS, GITHUB_PROFILE_URL, LINKEDIN_URL, profile, navLinks } from "@/lib/portfolio-data"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
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
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          &copy; {year} {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
