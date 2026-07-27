"use client"

import { useLanguage } from "@/contexts/language-context"

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border bg-background/50 p-1">
      <button
        onClick={() => setLocale("fr")}
        aria-label="Passer en français"
        className={`flex items-center gap-1 rounded-full text-xs font-medium transition-colors ${
          compact ? "px-1.5 py-1" : "px-2.5 py-1"
        } ${
          locale === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span aria-hidden="true">🇫🇷</span>
        {!compact && "FR"}
      </button>
      <button
        onClick={() => setLocale("en")}
        aria-label="Switch to English"
        className={`flex items-center gap-1 rounded-full text-xs font-medium transition-colors ${
          compact ? "px-1.5 py-1" : "px-2.5 py-1"
        } ${
          locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span aria-hidden="true">🇬🇧</span>
        {!compact && "EN"}
      </button>
    </div>
  )
}