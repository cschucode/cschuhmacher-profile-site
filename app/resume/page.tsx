import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Résumé | Chris Schuhmacher",
  description:
    "Product engineer and AI builder with 10 years in tech — React, TypeScript, and LLM-powered products.",
};

const skills: { category: string; items: string }[] = [
  {
    category: "Frontend",
    items:
      "React, TypeScript, Next.js, Redux, HTML5, CSS3, Tailwind, Sass, Styled Components, HTMX, Alpine.js, Web performance, Accessibility (WCAG), Scalable component architecture",
  },
  { category: "Backend", items: "Node.js, Express, Ruby on Rails, PostgreSQL, REST APIs, GraphQL" },
  { category: "Testing", items: "Jest, React Testing Library, Cypress, RSpec" },
  { category: "Platform & DevOps", items: "AWS (EC2, RDS, SQS), Docker, Kubernetes, Nginx, CI/CD (GitLab, CircleCI)" },
  { category: "Languages", items: "TypeScript, JavaScript (ES6+), Ruby, Python, Scala" },
  { category: "AI-Assisted Development", items: "Claude Code, Cursor, GitHub Copilot" },
];

const experience: { company: string; title: string; period: string; bullets: string[] }[] = [
  {
    company: "Dignifi",
    title: "Engineering Lead (Contract)",
    period: "Jan 2025 – Present",
    bullets: [
      "Leading engineering for an AI-powered Reentry Navigator helping formerly incarcerated individuals discover housing, employment, and essential services through conversational search.",
      "Architected a React + TypeScript frontend for LLM-powered resource discovery, integrating modern AI workflows and structured knowledge retrieval.",
      "Managing engineering contributors, guiding architecture decisions, and shaping product direction for a mission-driven AI platform.",
      "Established AI-assisted development workflows using Cursor, Copilot, and Claude Code to accelerate experimentation and iteration.",
    ],
  },
  {
    company: "Fanstake",
    title: "Senior Software Engineer",
    period: "Oct 2024 – Nov 2025",
    bullets: [
      "Delivered end-to-end product features across athlete, team, and school profile surfaces, building responsive TypeScript interfaces using HTMX and Alpine.js.",
      "Partnered with product and design to ship fan engagement experiences that improved usability and responsiveness across key platform workflows.",
      "Shipped product features rapidly in an early-stage startup environment while balancing speed, reliability, and user experience during launch preparation.",
    ],
  },
  {
    company: "Checkr",
    title: "Software Engineer II",
    period: "Oct 2021 – Apr 2024",
    bullets: [
      "Led migration of a legacy Angular application to React + TypeScript, establishing reusable component architecture that reduced development time by ~30%.",
      "Built real-time text editing workflows through Grammarly SDK integration, enhancing writing quality and user productivity within customer workflows.",
      "Led engineering initiative to improve deployment velocity (DORA metrics), driving process improvements that increased release cadence and reliability.",
      "Mentored 5+ engineers through technical coaching, code reviews, and frontend best practices, improving maintainability across the codebase.",
    ],
  },
  {
    company: "FANDOM",
    title: "Software Engineer",
    period: "Oct 2017 – Apr 2021",
    bullets: [
      "Built interactive React + Redux features (trivia quizzes, message walls) powering real-time engagement across high-traffic fandom communities.",
      "Developed product catalog UI for the Fandom X initiative, delivering performant browsing experiences for large fan audiences.",
      "Led HTTPS migration and domain consolidation to fandom.com, ensuring zero-downtime transition across millions of daily users.",
    ],
  },
];

const education: string[] = [
  "Pragmatic Institute — Product Management Foundations, Focus & Design (2023)",
  "Hack Reactor — Advanced Software Engineering Immersive Program, San Francisco, CA (2021)",
  "The Last Mile — Software Engineering Program, San Quentin, CA",
  "Mt. Tam College — AA in Liberal Arts, Valedictorian, San Quentin, CA (2012)",
  "FANDOM Hackathon Winner — Improved user registration flow, contributing to increased sign-ups and revenue",
];

const linkClass = "text-(--color-fm-dark) hover:underline";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-10 print:hidden">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to site
          </Link>
          <a
            href="mailto:chris.r.schuhmacher@gmail.com"
            className="text-sm px-4 py-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Email me
          </a>
        </div>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Chris Schuhmacher</h1>
          <p className="mt-2 text-gray-600">
            San Anselmo, CA ·{" "}
            <a className={linkClass} href="mailto:chris.r.schuhmacher@gmail.com">
              chris.r.schuhmacher@gmail.com
            </a>
          </p>
          <p className="mt-1 text-gray-600 flex flex-wrap gap-x-3">
            <a className={linkClass} href="https://linkedin.com/in/chrisschuhmacher" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/chrisschuhmacher
            </a>
            <span className="text-gray-300">·</span>
            <a className={linkClass} href="https://github.com/cschucode" target="_blank" rel="noopener noreferrer">
              github.com/cschucode
            </a>
          </p>
          <p className="mt-5 text-gray-700 leading-relaxed">
            Product engineer and AI builder with 10 years in tech, building scalable
            web applications in React and TypeScript and LLM-powered products. Proven
            track record leading UI architecture, shipping high-impact features, and
            partnering closely with design and product to deliver user-focused
            experiences.
          </p>
        </header>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
            Technical Skills
          </h2>
          <dl className="space-y-2">
            {skills.map((s) => (
              <div key={s.category} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-1 sm:gap-4">
                <dt className="font-semibold text-gray-900">{s.category}</dt>
                <dd className="text-gray-700">{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((role) => (
              <div key={role.company}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-gray-900">
                    {role.company} — <span className="font-normal">{role.title}</span>
                  </h3>
                  <span className="text-sm text-gray-500">{role.period}</span>
                </div>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
                  {role.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
            Education &amp; Honors
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {education.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </section>

        <div className="print:hidden">
          <Link href="/" className={`text-sm ${linkClass}`}>
            ← Back to chrisschuhmacher.com
          </Link>
        </div>
      </main>
    </div>
  );
}
