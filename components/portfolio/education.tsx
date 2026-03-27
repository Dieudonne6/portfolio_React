"use client"

import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    période: "2020 - 2023",
    Niveau: "Licence en Système informatique et logiciel",
    Ecole: "Institut Universitaire Les Cours SONOU",
    localisation: "Benin, Abomey-Calavi",
    description:
      "Formation en developpement logiciel, bases de donnees, algorithmique, gestion de projets informatiques, etc.",
    Mémoire: "Mise en place d'une plateforme d'offres de services et de produts pour artisan: cas du Bénin",
    Notes_Memoire: "16/20 T.Bien",
    Cours_Principale: ["Mathématiques Générales", "Algorithmique", "Algorithme avancé", "Algèbre linéaire", "Système de numération", "Recherche Opérationnelle", "Structure de données", "POO", "Base de donnees Relationnelles", "Langage UML", "Base de données et SQL", "Gestion de projet"],
  },
  {
    période: "2016 - 2020",
    Niveau: "Baccalaureat Scientifique",
    Ecole: "College d'Enseignement Général de Dassa-Zoumé",
    localisation: "Benin, Dassa-Zoumé",
    description: "Obtention du baccalaureat D.",
    Cours_Principale: ["Mathematiques", "Physique", "Sciences"],
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Formation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
            Mon parcours academique
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Cards - Vertical Timeline Style */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.Niveau}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 top-8 -translate-x-1/2 hidden md:flex">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 ring-4 ring-background" />
                </div>

                {/* Card */}
                <div className="md:ml-16 bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left: Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.période}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full">
                          <MapPin className="w-3.5 h-3.5" />
                          {edu.localisation}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {edu.Niveau}
                      </h3>
                      <p className="text-primary font-medium mb-4">
                        {edu.Ecole}
                      </p>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {edu.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {edu.Cours_Principale.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
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
