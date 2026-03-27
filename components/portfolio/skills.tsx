"use client"

const skillCategories = [
  {
    title: "Languages & Core",
    skills: [
      { name: "PHP", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 85 },
      { name: "HTML/CSS", level: 85 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Laravel", level: 90 },
      { name: "Node.js", level: 75 },
      { name: "RESTful APIs", level: 90 },
      { name: "NumPy/Pandas", level: 70 },
      { name: "MatPlotLib", level: 65 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 70 },
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Swagger UI", level: 80 },
      { name: "Jupyter", level: 75 },
    ],
  },
  {
    title: "Databases & BI",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "Power BI", level: 65 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">{"Compétences"}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
            Mes compétences techniques
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-card border border-border rounded-xl"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
