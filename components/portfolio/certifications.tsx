"use client"

import { Award, ExternalLink, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const certifications = [
  {
    title: "Google Analytics 4",
    issuer: "Google",
    date: "2026",
    credentialId: "GA4-2026",
    link: "/certifications/google_analytic_4_certificate.png",
    icon: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg",
    bgColor: "from-blue-500/20 to-blue-600/10",
    borderColor: "hover:border-blue-500/50",
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "2026",
    credentialId: "PS-INT-2026",
    link: "/certifications/problem_solving_intermediate certificate.pdf",
    icon: null,
    bgColor: "from-green-500/20 to-green-600/10",
    borderColor: "hover:border-green-500/50",
  },
  {
    title: "REST API (Intermediate)",
    issuer: "HackerRank",
    date: "2026",
    credentialId: "API-INT-2026",
    link: "/certifications/rest_api_intermediate certificate.pdf",
    icon: null,
    bgColor: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "hover:border-emerald-500/50",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "2026",
    credentialId: "SQL-INT-2026",
    link: "/certifications/sql_intermediate certificate.pdf",
    icon: null,
    bgColor: "from-teal-500/20 to-teal-600/10",
    borderColor: "hover:border-teal-500/50",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
            Mes certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 ${cert.borderColor} hover:shadow-xl`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative p-6">
                {/* Top Row: Icon and Verified Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verifie
                  </div>
                </div>

                {/* Title and Issuer */}
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Delivre par <span className="text-foreground font-medium">{cert.issuer}</span>
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                  <span>Date: {cert.date}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span>ID: {cert.credentialId}</span>
                </div>

                {/* Action Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl transition-all duration-200 group/btn"
                >
                  <span>Voir la certification</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
