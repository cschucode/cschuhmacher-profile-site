import ScrollReveal from "./ScrollReveal";

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
            Alcohol had driven me to the lowest moment of my life, and to a choice
            I will carry forever. Getting clean is what saved me.
          </p>
          <p>
            I served 17 years. Behind those walls I did the hardest and most
            important work of my life: I got clean, earned a college degree —
            graduating as valedictorian — and learned to write code through{" "}
            <a
              href="https://thelastmile.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-accent-text) hover:text-(--color-fm-light) hover:underline underline-offset-2"
            >
              The Last Mile
            </a>{" "}
            inside San Quentin. I also found running there, finishing{" "}
            <a
              href="https://www.sanquentinmarathon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-accent-text) hover:text-(--color-fm-light) hover:underline underline-offset-2"
            >
              two marathons inside the walls
            </a>{" "}
            — 105 laps of the prison yard, one at a time. I walked out in 2017
            with a new purpose.
          </p>
          <p>
            A decade into a tech career, I now build AI products for reentry at{" "}
            <span className="font-medium text-(--color-text-primary)">Dignifi</span>,
            mentor the next generation of engineers as a Last Mile alumnus, and
            founded{" "}
            <span className="font-medium text-(--color-fm-light)">
              Fitness Monkey
            </span>{" "}
            to help people pair recovery with fitness. I never stopped running,
            either — since coming home I've finished Marin's{" "}
            <a
              href="https://www.dipsea.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-accent-text) hover:text-(--color-fm-light) hover:underline underline-offset-2"
            >
              Dipsea Race
            </a>{" "}
            nine years straight. And from my home there, I still go back inside
            San Quentin to coach the{" "}
            <a
              href="https://www.sanquentinmarathon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--color-accent-text) hover:text-(--color-fm-light) hover:underline underline-offset-2"
            >
              1000 Mile Club
            </a>{" "}
            and remind the team of the best version of themselves. I walked this
            path — now I help build the ladder for the people still on it.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center px-4 py-6 rounded-2xl bg-(--color-surface-card) border border-(--color-border-strong)"
            >
              <div className="text-4xl md:text-5xl font-bold tabular-nums text-(--color-fm-light)">
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
