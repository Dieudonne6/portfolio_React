// avant modif fonctionnalité de traduction
// "use client"

// const skillCategories = [
//   {
//     title: "Languages et Core Tech",
//     icon: "code",
//     skills: [
//       { name: "PHP", level: "proficient" },
//       { name: "JavaScript", level: "proficient" },
//       { name: "SQL", level: "intermediate" },
//       { name: "HTML", level: "proficient" },
//       { name: "CSS", level: "proficient" },
//       { name: "Python", level: "intermediate" },
//     ],
//   },
//   {
//     title: "Frameworks et Architecture",
//     icon: "layers",
//     skills: [
//       { name: "Laravel", level: "proficient" },
//       { name: "Node.js", level: "intermediate" },
//       { name: "RESTful APIs", level: "proficient" },
//       { name: "Pandas", level: "intermediate" },
//       { name: "NumPy", level: "intermediate" },
//       { name: "Matplotlib", level: "intermediate" },
//       { name: "Swagger", level: "intermediate" },
//       { name: "Docker", level: "intermediate" },
//     ],
//   },
//   {
//     title: "Base de données & Analytics",
//     icon: "chart",
//     skills: [
//       { name: "MySQL", level: "proficient" },
//       { name: "MongoDB", level: "proficient" },
//       { name: "PostgreSQL", level: "proficient" },
//       { name: "Power BI", level: "intermediate" },
//       { name: "Data Modeling", level: "intermediate" },
//       { name: "Query Optimization", level: "exploring" },
//     ],
//   },
//   {
//     title: "DevOps & Outils",
//     icon: "tools",
//     skills: [
//       { name: "Git/GitHub", level: "proficient" },
//       { name: "Postman", level: "proficient" },
//       { name: "Insomnia", level: "proficient" },
//       { name: "VS Code", level: "proficient" },
//       { name: "Jupyter", level: "intermediate" },
//       { name: "CI/CD", level: "intermediate" },
//       // { name: "Testing", level: "intermediate" },
//     ],
//   },
// ]

// const levelLabel = {
//   proficient: "Compétent",
//   intermediate: "Intermédiaire",
//   exploring: "Explorer",
//   familiar: "Familier",
// } as const

// const levelClass = {
//   proficient: "bg-emerald-500/15 text-emerald-700 border-emerald-500/20",
//   intermediate: "bg-blue-500/15 text-blue-700 border-blue-500/20",
//   exploring: "bg-amber-500/15 text-amber-700 border-amber-500/20",
//   familiar: "bg-slate-500/15 text-slate-700 border-slate-500/20",
// } as const

// function CategoryIcon({ icon }: { icon: string }) {
//   return (
//     <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
//       {icon === "code" && <span className="text-lg font-bold">&lt;/&gt;</span>}
//       {icon === "layers" && <span className="text-lg font-bold">◫</span>}
//       {icon === "chart" && <span className="text-lg font-bold">▣</span>}
//       {icon === "tools" && <span className="text-lg font-bold">⚙</span>}
//     </div>
//   )
// }

// export function Skills() {
//   return (
//     <section id="skills" className="py-24 bg-card/30">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-16 text-center">
//           <span className="font-mono text-sm text-primary">Compétences</span>
//           <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
//             Mes compétences techniques
//           </h2>
//           <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
//         </div>

//         <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
//           {(["proficient", "intermediate", "exploring", "familiar"] as const).map(
//             (level) => (
//               <div
//                 key={level}
//                 className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur"
//               >
//                 <span
//                   className={`h-2.5 w-2.5 rounded-full ${
//                     level === "proficient"
//                       ? "bg-emerald-500"
//                       : level === "intermediate"
//                         ? "bg-blue-500"
//                         : level === "exploring"
//                           ? "bg-amber-500"
//                           : "bg-slate-500"
//                   }`}
//                 />
//                 <span className="text-muted-foreground">{levelLabel[level]}</span>
//               </div>
//             )
//           )}
//         </div>

//         <div className="grid gap-8 md:grid-cols-2">
//           {skillCategories.map((category) => (
//             <div
//               key={category.title}
//               className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
//             >
//               <div className="mb-6 flex items-center gap-4">
//                 <CategoryIcon icon={category.icon} />
//                 <div>
//                   <h3 className="text-lg font-semibold text-foreground">
//                     {category.title}
//                   </h3>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 {category.skills.map((skill) => (
//                   <span
//                     key={skill.name}
//                     className={`inline-flex items-center gap-2 rounded-[6px] border px-4 py-2 text-sm font-medium transition-colors ${levelClass[skill.level as keyof typeof levelClass]}`}
//                   >
//                     <span
//                       className={`h-2 w-2 rounded-full ${
//                         skill.level === "proficient"
//                           ? "bg-emerald-500"
//                           : skill.level === "intermediate"
//                             ? "bg-blue-500"
//                             : skill.level === "exploring"
//                               ? "bg-amber-500"
//                               : "bg-slate-500"
//                       }`}
//                     />
//                     {skill.name}
//                   </span>
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

import { useLanguage } from "@/contexts/language-context"

const skillCategories = [
  {
    icon: "code",
    skills: [
      { name: "PHP", level: "proficient" },
      { name: "JavaScript", level: "proficient" },
      { name: "TypeScript", level: "intermediate" },
      { name: "SQL", level: "intermediate" },
      { name: "HTML", level: "proficient" },
      { name: "CSS", level: "proficient" },
      { name: "Python", level: "intermediate" },
    ],
  },
  {
    icon: "layers",
    skills: [
      { name: "Laravel", level: "proficient" },
      { name: "Node.js", level: "intermediate" },
      { name: "React.js", level: "intermediate" },
      { name: "FastAPI", level: "intermediate" },
      { name: "RESTful APIs", level: "proficient" },
      { name: "Pandas", level: "intermediate" },
      { name: "NumPy", level: "intermediate" },
      { name: "Matplotlib", level: "intermediate" },
      { name: "XGBoost", level: "exploring" },
      { name: "Swagger", level: "intermediate" },
      { name: "Docker", level: "intermediate" },
    ],
  },
  {
    icon: "chart",
    skills: [
      { name: "MySQL", level: "proficient" },
      { name: "MongoDB", level: "proficient" },
      { name: "PostgreSQL", level: "proficient" },
      { name: "Power BI", level: "intermediate" },
      { name: "Data Modeling", level: "intermediate" },
      { name: "Query Optimization", level: "intermediate" },
    ],
  },
  {
    icon: "tools",
    skills: [
      { name: "Git/GitHub", level: "proficient" },
      { name: "Postman", level: "proficient" },
      { name: "Insomnia", level: "proficient" },
      { name: "VS Code", level: "proficient" },
      { name: "Jupyter", level: "intermediate" },
      { name: "CI/CD", level: "intermediate" },
    ],
  },
]

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
  const { t } = useLanguage()
  const categoryTranslations: { title: string }[] = t("skills.categories")
  const levelLabel: Record<string, string> = t("skills.levels")

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm text-primary">{t("skills.title")}</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            {t("skills.subtitle")}
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
          {skillCategories.map((category, i) => (
            <div
              key={categoryTranslations[i].title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-6 flex items-center gap-4">
                <CategoryIcon icon={category.icon} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {categoryTranslations[i].title}
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