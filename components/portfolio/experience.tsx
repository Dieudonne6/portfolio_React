"use client"

import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    period: "Fév 2024 – Présent",
    title: "Développeur Web",
    company: "C BOX Sarl",
    description:
      "Conception et développement d'APIs RESTful avec le framework PHP Laravel. Mise en place de solutions backend sécurisées et maintenance d'applications web.",
    achievements: [
      "Développement d’APIs REST avec le framework PHP Laravel",
      "Intégration de services externes (API, notifications, etc.)",
      "Débogage et maintenance d’applications web",
    ],
  },
  {
    period: "Fév 2023 – Mai 2023",
    title: "Stage Académique (Développeur Full Stack)",
    company: "TPAPY Consult",
    description:
      "Développement de solutions hybrides incluant le backend Laravel et des interfaces mobiles.",
    achievements: [
      "Analyse et modélisation des systèmes via des diagrammes UML",
      "Développement d'interfaces mobiles avec Flutter",
      "Développement d’application web avec Laravel",
      "Tests et validation des fonctionnalités",
    ],
  },
  {
    period: "Juin 2022 – Sep 2022",
    title: "Stage Académique (Développeur WordPress)",
    company: "C BOX Sarl",
    description:
      "Gestion et optimisation de plateformes web via CMS et personnalisation technique.",
    achievements: [
      "Création et gestion de sites web avec WordPress",
      "Personnalisation de thèmes et plugins",
      "Optimisation SEO de base et amélioration de la performance web",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">{"Expérience"}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
            Mon parcours professionnel
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 mt-8 z-10 shadow-lg shadow-primary/30" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content */}
                <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-center gap-2 text-primary text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
