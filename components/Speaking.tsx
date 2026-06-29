import ScrollReveal from "./ScrollReveal";

interface Topic {
  title: string;
  blurb: string;
}

const topics: Topic[] = [
  {
    title: "Recovery",
    blurb:
      "Getting clean was day one of everything else for me. The role recovery plays in real transformation — and why I'm building technology to help people get sober and stay strong.",
  },
  {
    title: "Incarceration & Reentry",
    blurb:
      "Seventeen years inside San Quentin, and the long road home. What redemption actually asks of a person, where reentry breaks down, and how second chances really get built.",
  },
  {
    title: "Technology & AI",
    blurb:
      "From learning to code in prison to a decade in Silicon Valley to building AI today. Why talent is everywhere — and how technology can open doors that used to stay locked.",
  },
  {
    title: "Partnerships",
    blurb:
      "Nonprofits, employers, and returning citizens, all winning together. What it takes for an organization to bet on overlooked talent — and why that bet pays off.",
  },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-base)";

const bookBtn = `inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-(--color-fm) text-(--color-fm-navy-dark) hover:bg-(--color-amber-hover) active:bg-(--color-amber-press) transition-colors ${focusRing}`;

export default function Speaking() {
  return (
    <section id="speaking" className="py-20 md:py-28">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-(--color-text-primary)">
            Speaking
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-(--color-border-strong) to-transparent" />
        </div>
        <p className="text-(--color-text-secondary) mb-10 max-w-[68ch] leading-relaxed">
          I&apos;ve shared this story on some of the podcasts and stages that
          mean the most to me, and I speak to audiences — companies,
          conferences, nonprofits, and recovery communities — on the themes
          I&apos;ve lived. Here&apos;s where I bring the most:
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {topics.map((topic, index) => (
          <ScrollReveal key={topic.title} delay={index * 0.08}>
            <div className="flex flex-col h-full p-6 rounded-2xl bg-(--color-surface-card) border border-(--color-border-strong)">
              <h3 className="text-lg md:text-xl font-semibold text-(--color-text-primary) mb-2">
                {topic.title}
              </h3>
              <p className="text-(--color-text-secondary) leading-relaxed">
                {topic.blurb}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.1}>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="mailto:chris.r.schuhmacher@gmail.com?subject=Speaking%20inquiry"
            className={bookBtn}
          >
            Book me to speak
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#featured"
            className="text-sm font-medium text-(--color-text-muted) hover:text-(--color-text-primary) transition-colors inline-flex items-center gap-1"
          >
            Hear where I&apos;ve been featured
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
