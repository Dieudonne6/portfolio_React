// "use client"

// const skillCategories = [
//   {
//     title: "Languages & Core",
//     skills: [
//       { name: "PHP", level: 90 },
//       { name: "JavaScript", level: 85 },
//       { name: "Python", level: 70 },
//       { name: "SQL", level: 85 },
//       { name: "HTML/CSS", level: 85 },
//     ],
//   },
//   {
//     title: "Frameworks & Libraries",
//     skills: [
//       { name: "Laravel", level: 90 },
//       { name: "Node.js", level: 75 },
//       { name: "RESTful APIs", level: 90 },
//       { name: "NumPy/Pandas", level: 70 },
//       { name: "MatPlotLib", level: 65 },
//     ],
//   },
//   {
//     title: "DevOps & Tools",
//     skills: [
//       { name: "Docker", level: 70 },
//       { name: "Git/GitHub", level: 85 },
//       { name: "VS Code", level: 90 },
//       { name: "Postman", level: 85 },
//       { name: "Swagger UI", level: 80 },
//       { name: "Jupyter", level: 75 },
//     ],
//   },
//   {
//     title: "Databases & BI",
//     skills: [
//       { name: "MySQL", level: 85 },
//       { name: "PostgreSQL", level: 85 },
//       { name: "Power BI", level: 65 },
//     ],
//   },
// ]

// export function Skills() {
//   return (
//     <section id="skills" className="py-24 bg-card/30">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="text-primary font-mono text-sm">{"Compétences"}</span>
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
//             Mes compétences techniques
//           </h2>
//           <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {skillCategories.map((category) => (
//             <div
//               key={category.title}
//               className="p-6 bg-card border border-border rounded-xl"
//             >
//               <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-primary rounded-full" />
//                 {category.title}
//               </h3>
              
//               <div className="space-y-4">
//                 {category.skills.map((skill) => (
//                   <div key={skill.name}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-sm text-foreground">{skill.name}</span>
//                       <span className="text-sm text-primary">{skill.level}%</span>
//                     </div>
//                     <div className="h-2 bg-secondary rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
//                         style={{ width: `${skill.level}%` }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

const skillCategories = [
  {
    title: "Languages et Core Tech",
    icon: "code",
    skills: [
      { name: "PHP", level: "proficient" },
      { name: "JavaScript", level: "proficient" },
      { name: "SQL", level: "intermediate" },
      { name: "HTML", level: "proficient" },
      { name: "CSS", level: "proficient" },
      { name: "Python", level: "intermediate" },
    ],
  },
  {
    title: "Frameworks et Architecture",
    icon: "layers",
    skills: [
      { name: "Laravel", level: "proficient" },
      { name: "Node.js", level: "intermediate" },
      { name: "RESTful APIs", level: "proficient" },
      { name: "Pandas", level: "intermediate" },
      { name: "NumPy", level: "intermediate" },
      { name: "Matplotlib", level: "intermediate" },
      { name: "Swagger", level: "intermediate" },
      { name: "Docker", level: "intermediate" },
    ],
  },
  {
    title: "Base de données & Analytics",
    icon: "chart",
    skills: [
      { name: "MySQL", level: "proficient" },
      { name: "PostgreSQL", level: "proficient" },
      { name: "Power BI", level: "intermediate" },
      { name: "Data Modeling", level: "intermediate" },
      { name: "Query Optimization", level: "exploring" },
    ],
  },
  {
    title: "DevOps & Outils",
    icon: "tools",
    skills: [
      { name: "Git/GitHub", level: "proficient" },
      { name: "Postman", level: "proficient" },
      { name: "Insomnia", level: "proficient" },
      { name: "VS Code", level: "proficient" },
      { name: "Jupyter", level: "intermediate" },
      { name: "CI/CD", level: "exploring" },
      // { name: "Testing", level: "intermediate" },
    ],
  },
]

const levelLabel = {
  proficient: "Compétent",
  intermediate: "Intermédiaire",
  exploring: "Explorer",
  familiar: "Familier",
} as const

const levelClass = {
  proficient: "bg-emerald-500/15 text-emerald-700 border-emerald-500/20",
  intermediate: "bg-blue-500/15 text-blue-700 border-blue-500/20",
  exploring: "bg-amber-500/15 text-amber-700 border-amber-500/20",
  familiar: "bg-slate-500/15 text-slate-700 border-slate-500/20",
} as const

function CategoryIcon({ icon }: { icon: string }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
      {icon === "code" && <span className="text-lg font-bold">&lt;/&gt;</span>}
      {icon === "layers" && <span className="text-lg font-bold">◫</span>}
      {icon === "chart" && <span className="text-lg font-bold">▣</span>}
      {icon === "tools" && <span className="text-lg font-bold">⚙</span>}
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm text-primary">Compétences</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Mes compétences techniques
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          {(["proficient", "intermediate", "exploring", "familiar"] as const).map(
            (level) => (
              <div
                key={level}
                className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    level === "proficient"
                      ? "bg-emerald-500"
                      : level === "intermediate"
                        ? "bg-blue-500"
                        : level === "exploring"
                          ? "bg-amber-500"
                          : "bg-slate-500"
                  }`}
                />
                <span className="text-muted-foreground">{levelLabel[level]}</span>
              </div>
            )
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-6 flex items-center gap-4">
                <CategoryIcon icon={category.icon} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-2 rounded-[6px] border px-4 py-2 text-sm font-medium transition-colors ${levelClass[skill.level as keyof typeof levelClass]}`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        skill.level === "proficient"
                          ? "bg-emerald-500"
                          : skill.level === "intermediate"
                            ? "bg-blue-500"
                            : skill.level === "exploring"
                              ? "bg-amber-500"
                              : "bg-slate-500"
                      }`}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
