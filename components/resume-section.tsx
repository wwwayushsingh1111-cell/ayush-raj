import { Download, FileText } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { RESUME_URL } from "@/lib/portfolio-data"

export function ResumeSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Reveal>
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card p-8 sm:flex-row sm:p-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileText className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-lg font-semibold">Want the full details?</h2>
              <p className="text-sm text-muted-foreground">Download my resume to learn more about my journey.</p>
            </div>
          </div>
          <Button asChild size="lg" className="gap-2">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
