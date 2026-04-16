import ScrollReveal from "./ScrollReveal";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "Rails", "PostgreSQL", "GraphQL"] },
  { category: "Tools", items: ["Claude Code", "Cursor", "Copilot", "Docker"] },
];

export default function About() {
  return (
    <section className="py-20">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-gray-700 to-transparent" />
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-12">
        <ScrollReveal className="md:col-span-2" delay={0.1}>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I'm a Senior Frontend / Product Engineer with 8+ years of experience
              building scalable web applications using React and TypeScript. I have
              a proven track record leading UI architecture, shipping high-impact
              product features, and collaborating closely with design and product
              teams to deliver user-focused experiences.
            </p>
            <p>
              My toolkit spans the full stack—from React, Next.js, and TypeScript on
              the frontend to Node.js, Ruby on Rails, and PostgreSQL on the backend.
              I'm also deeply invested in AI-assisted development workflows using
              tools like Claude Code, Cursor, and GitHub Copilot.
            </p>
            <p>
              Currently, I'm leading engineering for{" "}
              <span className="text-gray-900 dark:text-white font-medium">Dignifi</span>, an
              AI-powered Reentry Navigator helping formerly incarcerated individuals
              discover housing, employment, and essential services.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
