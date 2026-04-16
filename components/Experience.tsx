import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "Engineering Lead (Contract)",
    company: "Dignifi",
    period: "Jan 2025 - Present",
    context: "AI-powered platform helping formerly incarcerated individuals find housing, employment, and essential services.",
    description:
      "Leading a small engineering team building an LLM-powered Reentry Navigator. Architecting the React + TypeScript frontend, guiding product direction, and establishing AI-assisted development workflows to accelerate iteration on a mission-driven platform serving the last mile.",
    tags: ["React", "TypeScript", "AI/LLM", "Leadership"],
  },
  {
    title: "Senior Software Engineer",
    company: "Fanstake",
    period: "Oct 2024 - Nov 2025",
    context: "Early-stage startup building fan engagement tools for athletes, teams, and schools.",
    description:
      "Shipped end-to-end product features across athlete and team profiles in a fast-moving startup environment. Partnered closely with product and design to build responsive TypeScript interfaces using HTMX and Alpine.js, balancing speed with reliability during launch prep.",
    tags: ["TypeScript", "HTMX", "Alpine.js", "Startup"],
  },
  {
    title: "Software Engineer II",
    company: "Checkr",
    period: "Oct 2021 - Apr 2024",
    context: "Enterprise background check platform processing millions of checks for companies like Uber, Instacart, and DoorDash.",
    description:
      "Led the migration from Angular to React + TypeScript, establishing component architecture that reduced dev time by ~30%. Drove DORA metrics improvements to increase deployment velocity and mentored 5+ engineers on frontend best practices.",
    tags: ["React", "TypeScript", "Mentorship", "Enterprise"],
  },
  {
    title: "Software Engineer",
    company: "FANDOM",
    period: "Oct 2017 - Apr 2021",
    context: "The world's largest fan platform, home to 250K+ wikis and 350M+ monthly visitors.",
    description:
      "Built interactive React + Redux features powering real-time engagement across high-traffic communities. Led the HTTPS migration and domain consolidation to fandom.com—zero-downtime transition for millions of daily users. Won company hackathon for improving user registration flow.",
    tags: ["React", "Redux", "Scale", "Performance"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-gray-700 to-transparent" />
        </div>
      </ScrollReveal>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="group relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-400 dark:text-gray-500 text-sm mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-3">
                {exp.context}
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
