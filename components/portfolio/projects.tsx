"use client"

import { tr } from "date-fns/locale"
import { ExternalLink, Github, Folder } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "ProjetLivre API",
    description:
      "API REST pour une plateforme d'e-commerce de livres. Authentification Sanctum, gestion du panier, paiement et transfert automatique du solde.",
    tech: ["Laravel 10", "Docker", "PostgreSQL", "Sanctum", "Swagger"],
    featured: false,
    internal: false,
    links: {
      demo: "https://projetlivre-3.onrender.com/api/documentation",
      github: "https://github.com/Dieudonne6/ProjetLivre.git",
    },
  },
  {
    title: "ForYou API",
    description:
      "API pour application VTC complete. Calcul de distance GPS via Google Maps, estimation de prix, paiements multi-methodes et notifications FCM avec Firebase, etc.",
    tech: ["Laravel", "FCM", "Google Maps", "Firebase", "Payment Gateway", "Swagger"],
    internal: true,
    featured: true,
    links: {
      demo: null,
      github: null,
    },
  },
  {
    title: "SchoolBox",
    description:
      "Une application web de gestion scolaire complète (de l'inscription jusqu'à l'émission des bulletins de notes) avec l'intégration de l'API de facturation de la DGI du Bénin pour les factures normalisées.",
    tech: ["Laravel", "MySQL", "API e-mecef DGI"],
    internal: true,
    featured: true,
    links: {
      demo: null,
      github: null,
    },
  },
  {
    title: "EcoTrack API",
    description:
      "Systeme de tracabilite supply chain avec QR codes et checkpoints GPS. Detection de fraude logistique et support IoT.",
    tech: ["Laravel 12", "PostgreSQL", "UUID", "QR Code"],
    featured: false,
    links: {
      demo: "#",
      github: "https://github.com/Dieudonne6/eco_track_api",
    },
  },
  {
    title: "Smart Mobility Analytics",
    description:
      "Plateforme d'analyse de donnees de trajets de taxis NYC. Pipeline ETL complet et dashboard Power BI montrant les resultats.",
    tech: ["Laravel 12", "Python", "Pandas", "Power BI", "Swagger"],
    featured: false,
    links: {
      demo: null,
      github: "https://github.com/Dieudonne6/smart_mobility_api",
    },
  },
  {
    title: "GesCom",
    description:
      "Système de gestion commerciale pour boutiques permettant le suivi des stocks en temps réel, la gestion des entrées/sorties et la facturation, avec alertes pour prévenir les ruptures de stock.",
    tech: ["Laravel", "MySQL", "API e-mecef DGI"],
    featured: false,
    internal: true,
    links: {
      demo: null,
      github: "https://github.com/Dieudonne6/GestionCommerciale",
    },
  },
  // {
  //   title: "Pomemon API",
  //   description:
  //     "CRUD en node js avec Sequelize pour une application de collection de cartes. Authentification JWT et documentation Swagger.",
  //   tech: ["node js", "JavaScript", "Sequelize", "Swagger"],
  //   featured: false,
  //   links: {
  //     demo: "#",
  //     github: "https://github.com/Dieudonne6/",
  //   },
  // },
]

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">{"Projets"}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
            Mes réalisations
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Une selection de projets demontrant mes competences en conception d&apos;APIs et architecture backend.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.links.demo && (
                      <div
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    )}
                    <div
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* <span className="inline-block px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded mb-3">
                  Featured
                </span> */}

                <div className="flex gap-2 mb-3">
                  {project.featured && (
                    <span className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded">
                      Featured
                    </span>
                  )}

                  {project.internal && (
                    <span className="px-2 py-1 text-xs font-medium text-yellow-400 bg-yellow-400/10 rounded">
                      Projet interne
                    </span>
                  )}
                </div>  

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-3">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 bg-primary text-white rounded hover:bg-primary/90"
                  >
                    Demo
                  </a>
                )}

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 border border-border rounded hover:border-primary"
                  >
                    Code
                  </a>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
          Autres projets
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              rel="noopener noreferrer"
              className="group p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <Folder className="w-8 h-8 text-primary/70" />
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {project.internal && (
                <span className="inline-block px-2 py-1 text-[10px] font-medium text-yellow-400 bg-yellow-400/10 rounded mb-2">
                  Projet interne
                </span>
              )}

              <h4 className="font-semibold text-foreground mb-2 text-sm group-hover:text-primary transition-colors">
                {project.title}
              </h4>

              <p className="text-xs text-muted-foreground mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground bg-secondary rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-3">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-2 py-1 bg-primary text-white rounded hover:bg-primary/90"
                >
                  Demo
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-2 py-1 border border-border rounded hover:border-primary"
                >
                  Code
                </a>
              )}
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
