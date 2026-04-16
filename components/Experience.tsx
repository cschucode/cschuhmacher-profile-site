const experiences = [
  {
    title: "Engineering Lead (Volunteer)",
    company: "Dignifi",
    period: "Jan 2025 - Present",
    description:
      "Leading engineering for an AI-powered Reentry Navigator helping formerly incarcerated individuals discover housing, employment, and essential services. Architecting React + TypeScript frontend for LLM-powered resource discovery.",
    tags: ["React", "TypeScript", "AI/LLM", "Leadership"],
  },
  {
    title: "Senior Software Engineer",
    company: "Fanstake",
    period: "Oct 2024 - Nov 2025",
    description:
      "Delivered end-to-end product features across athlete, team, and school profile surfaces. Built responsive TypeScript interfaces using HTMX and Alpine.js in an early-stage startup environment.",
    tags: ["TypeScript", "HTMX", "Alpine.js"],
  },
  {
    title: "Software Engineer II",
    company: "Checkr",
    period: "Oct 2021 - Apr 2024",
    description:
      "Led migration of legacy Angular app to React + TypeScript, reducing development time by ~30%. Mentored 5+ engineers and drove DORA metrics improvements for deployment velocity.",
    tags: ["React", "TypeScript", "Mentorship", "DORA"],
  },
  {
    title: "Software Engineer",
    company: "FANDOM",
    period: "Oct 2017 - Apr 2021",
    description:
      "Built interactive React + Redux features powering real-time engagement across high-traffic fandom communities. Led HTTPS migration ensuring zero-downtime transition for millions of daily users.",
    tags: ["React", "Redux", "Scale"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
      </div>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative pl-8 border-l-2 border-gray-200 hover:border-blue-400 transition-colors"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-blue-400 group-hover:bg-blue-50 transition-colors" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.title}
                </h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
              </div>
              <span className="text-gray-400 text-sm mt-1 md:mt-0">
                {exp.period}
              </span>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
