"use client"

import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typewriter } from "./typewriter"
import Link from "next/link"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/5">
            Bienvenue sur mon portfolio
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Je suis </span>
          <span className="text-primary">Franck AYENAN</span>
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 h-12">
          <Typewriter
            words={[
              "Développeur Backend",
              "Spécialisé en Laravel & Node.js",
              "Data Enthusiast",
            ]}
          />
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionné par la création de solutions backend robustes et performantes,
          je transforme vos idées en applications fluides et flexibles.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="min-w-[180px]">
            <Link href="#contact">
              <Mail className="w-5 h-5 mr-2" />
              Me contacter
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[180px] border-primary/50 hover:bg-primary/10">
            <a href="/Cv_Franck_AYENAN.pdf" download className="flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Télécharger CV
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="https://github.com/Dieudonne6/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300 border border-transparent hover:border-primary/30"
          >
            <Github className="w-6 h-6" />
          </Link>

          <Link
            href="mailto:kossoufranck6@gmail.com"
            className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300 border border-transparent hover:border-primary/30"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </Link>
    </section>
  )
}
