const experiences = [
  {
    title: "Engineering Lead (Volunteer)",
    company: "Dignifi",
    period: "Jan 2025 - Present",
    description:
      "Leading engineering for an AI-powered Reentry Navigator helping formerly incarcerated individuals discover housing, employment, and essential services. Architecting React + TypeScript frontend for LLM-powered resource discovery.",
  },
  {
    title: "Senior Software Engineer",
    company: "Fanstake",
    period: "Oct 2024 - Nov 2025",
    description:
      "Delivered end-to-end product features across athlete, team, and school profile surfaces. Built responsive TypeScript interfaces using HTMX and Alpine.js in an early-stage startup environment.",
  },
  {
    title: "Software Engineer II",
    company: "Checkr",
    period: "Oct 2021 - Apr 2024",
    description:
      "Led migration of legacy Angular app to React + TypeScript, reducing development time by ~30%. Mentored 5+ engineers and drove DORA metrics improvements for deployment velocity.",
  },
  {
    title: "Software Engineer",
    company: "FANDOM",
    period: "Oct 2017 - Apr 2021",
    description:
      "Built interactive React + Redux features powering real-time engagement across high-traffic fandom communities. Led HTTPS migration ensuring zero-downtime transition for millions of daily users.",
  },
];

export default function Experience() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-l-2 border-gray-200 pl-6 hover:border-gray-400 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <span className="text-gray-500 text-sm">{exp.period}</span>
            </div>
            <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
            <p className="text-gray-500">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
