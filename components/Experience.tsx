import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "Founder",
    company: "Fitness Monkey",
    url: "https://www.fitnessmonkey.org",
    period: "2025 - Present",
    context: "A recovery-and-fitness app pairing sobriety tracking with workouts — plus a growing community across Instagram, TikTok, YouTube, and Substack.",
    description:
      "Building Fitness Monkey from the ground up: designing and shipping the app (sobriety tracking, workout logging, daily reflections, and AI-powered insights), creating workout and recovery content across four platforms, and coaching clients one-on-one as a personal trainer.",
    tags: ["Founder", "Personal Training", "Content", "Community"],
  },
  {
    title: "Engineering Lead (Contract)",
    company: "Dignifi",
    url: "https://dignifi.org",
    period: "Jan 2025 - Present",
    context: "AI-powered platform helping formerly incarcerated individuals find housing, employment, and essential services.",
    description:
      "Leading a small engineering team building an LLM-powered Reentry Navigator. Architecting the React + TypeScript frontend, guiding product direction, and establishing AI-assisted development workflows to accelerate iteration on a mission-driven platform serving the last mile.",
    tags: ["React", "TypeScript", "AI/LLM", "Leadership"],
  },
  {
    title: "Senior Software Engineer",
    company: "Fanstake",
    url: "https://fanstake.com",
    period: "Oct 2024 - Nov 2025",
    context: "Platform transforming college athletics through fan-driven NIL deals, with $10M+ in stakeholder commitments.",
    description:
      "Shipped end-to-end product features across athlete, team, and school profiles in a fast-moving startup founded by LinkedIn and Headspace veterans. Built responsive TypeScript interfaces using HTMX and Alpine.js, partnering with product and design to launch fan engagement experiences.",
    tags: ["TypeScript", "HTMX", "Alpine.js", "Startup"],
  },
  {
    title: "Software Engineer II",
    company: "Checkr",
    url: "https://checkr.com",
    period: "Oct 2021 - Apr 2024",
    context: "Enterprise background check platform processing millions of checks for companies like Uber, Instacart, and DoorDash.",
    description:
      "Led the migration from Angular to React + TypeScript, establishing component architecture that reduced dev time by ~30%. Drove DORA metrics improvements to increase deployment velocity and mentored 5+ engineers on frontend best practices.",
    tags: ["React", "TypeScript", "Mentorship", "Enterprise"],
  },
  {
    title: "Software Engineer",
    company: "FANDOM",
    url: "https://fandom.com",
    period: "Oct 2017 - Apr 2021",
    context: "The world's largest fan platform, home to 250K+ wikis and 350M+ monthly visitors.",
    description:
      "Built interactive React + Redux features powering real-time engagement across high-traffic communities. Led the HTTPS migration and domain consolidation to fandom.com—zero-downtime transition for millions of daily users. Won company hackathon for improving user registration flow.",
    tags: ["React", "Redux", "Scale", "Performance"],
  },
  {
    title: "Alumnus & Mentor",
    company: "The Last Mile",
    url: "https://thelastmile.org",
    period: "2014 - Present",
    context: "The nonprofit that taught me software engineering inside San Quentin — now I help teach the next class.",
    description:
      "Learned to code through The Last Mile while incarcerated, then turned it into a decade-long tech career. Today I give back as an alumnus mentor, supporting justice-impacted engineers as they build their own paths into the industry.",
    tags: ["Mentorship", "The Last Mile", "Giving Back"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-(--color-text-primary)">
            Work
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-(--color-border-strong) to-transparent" />
        </div>
      </ScrollReveal>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="group relative pl-8 border-l-2 border-(--color-border-strong) hover:border-(--color-accent-text) transition-colors">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-(--color-surface-base) border-2 border-(--color-border-strong) group-hover:border-(--color-accent-text) group-hover:bg-accent-text/20 transition-colors" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-(--color-text-primary)">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--color-accent-text) font-medium hover:text-(--color-fm-light) hover:underline underline-offset-2"
                  >
                    {exp.company} ↗
                  </a>
                </div>
                <span className="text-(--color-text-muted) text-sm mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-(--color-text-muted) italic mb-3">
                {exp.context}
              </p>

              <p className="text-(--color-text-secondary) mb-4 leading-relaxed max-w-[68ch]">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-(--color-text-secondary) bg-white/5 border border-(--color-border) rounded-full"
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
