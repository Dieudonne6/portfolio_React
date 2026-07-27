"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import fr from "@/messages/fr.json"
import en from "@/messages/en.json"

type Locale = "fr" | "en"

const messages: Record<Locale, any> = { fr, en }

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Récupère une valeur imbriquée via une clé du type "nav.home"
function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr")
  const [mounted, setMounted] = useState(false)

  // Au premier chargement : on relit la langue choisie précédemment
  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null
    if (saved === "fr" || saved === "en") {
      setLocaleState(saved)
    }
    setMounted(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
    document.documentElement.lang = newLocale
  }

  const t = (key: string) => {
    const value = getNestedValue(messages[locale], key)
    return value !== undefined ? value : key
  }

  // Évite un flash de contenu mal traduit pendant l'hydratation
  if (!mounted) {
    return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
  }

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage doit être utilisé à l'intérieur d'un LanguageProvider")
  }
  return context
}
