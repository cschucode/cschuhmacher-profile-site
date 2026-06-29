import ScrollReveal from "./ScrollReveal";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "Rails", "PostgreSQL", "GraphQL"] },
  { category: "Tools", items: ["Claude Code", "Cursor", "Copilot", "Docker"] },
  { category: "Beyond Code", items: ["Health & Wellness", "Endurance Running", "Mobility", "Content"] },
];

export default function About() {
  return (
    <section className="py-20 md:py-28">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-(--color-text-primary)">
            About
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-(--color-border-strong) to-transparent" />
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-12">
        <ScrollReveal className="md:col-span-2" delay={0.1}>
          <div className="space-y-4 text-(--color-text-secondary) leading-relaxed max-w-[68ch]">
            <p>
              I&apos;m a product engineer and AI builder with 10 years in tech,
              building scalable web applications in React and TypeScript and,
              increasingly, LLM-powered products. I have a proven track record
              leading UI architecture, shipping high-impact features, and
              partnering closely with design and product — work I also take on as
              an independent consultant.
            </p>
            <p>
              My toolkit spans the full stack—from React, Next.js, and TypeScript on
              the frontend to Node.js, Ruby on Rails, and PostgreSQL on the backend.
              I&apos;m also deeply invested in AI-assisted development workflows using
              tools like Claude Code, Cursor, and GitHub Copilot.
            </p>
            <p>
              The project closest to me is{" "}
              <span className="text-(--color-text-primary) font-medium">Fitness Monkey</span>
              {" "}— a recovery-and-fitness app I first imagined inside San
              Quentin and am now building for real as a solo founder and
              engineer. I also mentor new engineers as an alumnus of{" "}
              <span className="text-(--color-text-primary) font-medium">The Last Mile</span>
              {" "}— the program that taught me to code inside San Quentin.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-sm font-semibold text-(--color-text-muted) uppercase tracking-wider mb-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium text-(--color-text-secondary) bg-(--color-surface-card) rounded-lg hover:bg-(--color-surface-elevated) transition-colors"
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
