import ScrollReveal from "./ScrollReveal";

interface Pillar {
  title: string;
  blurb: string;
  href: string;
  cta: string;
  icon: React.ReactNode;
  /** "amber" (lifestyle) or "blue" (tech) icon ring */
  accent: "amber" | "blue";
}

const pillars: Pillar[] = [
  {
    title: "Software & Consulting",
    blurb:
      "Engineering leadership and hands-on product work in React & TypeScript. Available for consulting on frontend architecture and AI-assisted development.",
    href: "#experience",
    cta: "See my work",
    accent: "blue",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Fitness Monkey",
    blurb:
      "The recovery-and-fitness app I founded — pairing sobriety tracking with workouts to help people get clean and get strong, with coaching and community across every channel.",
    href: "#fitness-monkey",
    cta: "Explore the brand",
    accent: "amber",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.5 6.5h11M6.5 17.5h11M5 6.5v11M19 6.5v11M8.5 12h7" />
      </svg>
    ),
  },
  {
    title: "Speaking",
    blurb:
      "Talks for companies, conferences, and nonprofits on recovery, reentry, technology, and partnership — turning a hard story into momentum for the people in the room.",
    href: "#speaking",
    cta: "What I speak on",
    accent: "amber",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-14 0m7 7v3m-4 0h8M12 3a3 3 0 00-3 3v5a3 3 0 006 0V6a3 3 0 00-3-3z" />
      </svg>
    ),
  },
];

const ringStyles = {
  amber: "text-(--color-fm) ring-fm/40",
  blue: "text-(--color-accent-text) ring-accent-text/40",
} as const;

export default function WhatIDo() {
  return (
    <section className="full-bleed bg-(--color-surface-raised) py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-(--color-text-primary)">
              What I Do
            </h2>
            <div className="flex-1 h-px bg-linear-to-r from-(--color-border-strong) to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 0.1}>
              <a
                href={pillar.href}
                className="group flex flex-col h-full p-6 rounded-2xl bg-(--color-surface-card) border border-(--color-border-strong) hover:bg-(--color-surface-elevated) hover:border-fm/60 hover:shadow-[0_10px_30px_-12px_rgba(242,165,60,0.25)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-raised)"
              >
                <div className={`inline-flex w-12 h-12 items-center justify-center rounded-xl ring-1 mb-4 ${ringStyles[pillar.accent]}`}>
                  {pillar.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-(--color-text-primary) mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-(--color-text-secondary) leading-relaxed flex-1">
                  {pillar.blurb}
                </p>
                <span className="mt-4 text-sm font-medium text-(--color-fm-light) inline-flex items-center gap-1">
                  {pillar.cta}
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
