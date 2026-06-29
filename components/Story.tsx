import ScrollReveal from "./ScrollReveal";
import { FITNESS_MONKEY_SITE } from "@/lib/links";

const stats = [
  { value: "26", label: "Years sober" },
  { value: "17", label: "Years served" },
  { value: "10", label: "Years in tech" },
  { value: "2017", label: "Came home" },
];

export default function Story() {
  return (
    <section id="story" className="py-20 md:py-28">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-(--color-text-primary)">
            My Story
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-(--color-border-strong) to-transparent" />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="space-y-5 text-lg md:text-xl text-(--color-text-secondary) leading-relaxed max-w-[68ch]">
          <p>
            My sobriety date is June 26, 2000 — the same day I went to prison.
            Alcohol had taken me to the lowest moment of my life, and to a choice
            I&apos;ll carry forever. Getting clean is what saved me, and it has
            been the foundation of everything since.
          </p>
          <p>
            I served 17 years. Behind those walls I did the hardest and most
            important work of my life: I got sober, earned a college degree —
            graduating as valedictorian — and learned to write code through{" "}
            <a
              href="https://thelastmile.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-accent-text) hover:text-(--color-fm-light) hover:underline underline-offset-2"
            >
              The Last Mile
            </a>{" "}
            inside San Quentin. I found running there too, finishing{" "}
            <a
              href="https://www.sanquentinmarathon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-accent-text) hover:text-(--color-fm-light) hover:underline underline-offset-2"
            >
              two marathons in the yard
            </a>{" "}
            — 105 laps at a time. I walked out in 2017 with a craft and a
            purpose, and started my software career within weeks.
          </p>
          <p>
            A decade into that career, the work closest to my heart is{" "}
            <a
              href={FITNESS_MONKEY_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-fm-light) hover:text-(--color-fm) hover:underline underline-offset-2"
            >
              Fitness Monkey
            </a>{" "}
            — a recovery-and-fitness app I first dreamed up inside San Quentin
            and am finally building for real, to help people pair sobriety with
            fitness. It will always be free to people coming home through The
            Last Mile. I speak about what I&apos;ve lived — recovery,
            incarceration and reentry, technology, and the partnerships that
            change lives — and I still go back inside San Quentin to coach
            the{" "}
            <a
              href="https://www.sanquentinmarathon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-accent-text) hover:text-(--color-fm-light) hover:underline underline-offset-2"
            >
              1000 Mile Club
            </a>
            . I walked this path; now I help build the ladder for the people
            still on it.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group text-center px-4 py-6 rounded-2xl bg-(--color-surface-card) border border-(--color-border-strong) hover:bg-(--color-surface-elevated) hover:border-fm/50 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(242,165,60,0.25)] transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold tabular-nums text-(--color-fm-light) transition-transform group-hover:scale-105">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-(--color-text-muted)">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
