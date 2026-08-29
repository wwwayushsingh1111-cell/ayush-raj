"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    setDark(root.classList.contains("dark"))
  }, [])

  const toggle = () => {
    const root = document.documentElement
    const next = !dark
    root.classList.toggle("dark", next)
    root.classList.toggle("light", !next)
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-colors hover:bg-accent/20 hover:text-accent"
    >
      {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  )
}
