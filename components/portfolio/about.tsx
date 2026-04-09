"use client"

import { Code2, Database, Server, LineChart, User } from "lucide-react"

const stats = [
  { value: "6+", label: "Projets" },
  { value: "4", label: "Certifications" },
  { value: "2+", label: "Annees XP" },
]

const expertise = [
  {
    icon: Server,
    title: "Backend Development",
    desc: "APIs RESTful avec Laravel & Node.js",
  },
  {
    icon: Database,
    title: "Base de données",
    desc: "PostgreSQL, MySQL, optimisation",
  },
  {
    icon: Code2,
    title: "Architecture",
    desc: "Clean Code, Design Patterns",
  },
  {
    icon: LineChart,
    title: "Data",
    desc: "Python, Pandas, Power BI",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">{"A propos"}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
            Qui suis-je ?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Avatar/Visual */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-card border border-border flex items-center justify-center">
                  <User className="w-24 h-24 sm:w-32 sm:h-32 text-primary/50" />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-card border border-border rounded-lg shadow-lg">
                <span className="text-sm font-medium text-primary">Laravel</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-card border border-border rounded-lg shadow-lg">
                <span className="text-sm font-medium text-primary">Node.js</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              AYENAN D. K. Franck Dieu-donné
            </h3>
            <p className="text-primary font-medium mb-6">Développeur Backend</p>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Développeur backend avec plus de deux ans d'expérience et passionné par la création d&apos;APIs performantes, mon expertise s'appuie sur la maîtrise de 
                Laravel, Node.js, ainsi que l&apos;analyse de données avec Python et Power BI.
              </p>
              <p>
                Je m’intéresse à la conception d’applications bien structurées, en mettant l’accent sur des architectures propres et maintenables. Mon objectif
                est de concevoir des solutions fiables, évolutives et adaptées aux besoins réels des utilisateurs.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-card/50 border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
