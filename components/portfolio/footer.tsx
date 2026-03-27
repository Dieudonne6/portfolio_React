"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/Dieudonne6/", label: "GitHub" },
  { icon: Mail, href: "mailto:kossoufranck6@gmail.com", label: "Email" },
]

const quickLinks = [
  { name: "Accueil", href: "#home" },
  { name: "A propos", href: "#about" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#home" className="text-2xl font-bold text-primary font-mono">
              {"<FA />"}
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Développeur Backend passionné par la création de solutions robustes et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Technologies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Laravel & PHP</li>
              <li>Node.js</li>
              <li>PostgreSQL & MySQL</li>
              <li>Python & Data Analytics</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Suivez-moi</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {currentYear} Franck AYENAN, au Benin
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
