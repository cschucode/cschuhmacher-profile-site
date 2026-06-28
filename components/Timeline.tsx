import ScrollReveal from "./ScrollReveal";

const milestones = [
  {
    year: "June 26, 2000",
    title: "Rock bottom — and day one",
    body: "The day alcohol took me to my lowest point — and to prison — was also the day I got clean and sober. I haven't had a drink since.",
  },
  {
    year: "2012",
    title: "A degree, earned the hard way",
    body: "Graduated valedictorian with an AA in Liberal Arts from Mt. Tam College — earned inside San Quentin.",
  },
  {
    year: "2014",
    title: "I learned to code",
    body: "Joined The Last Mile, San Quentin's software engineering program, and found a craft that would change everything.",
  },
  {
    year: "2017",
    title: "Came home",
    body: "Paroled after 17 years. Started my software career at FANDOM within weeks of release.",
  },
  {
    year: "2017 – today",
    title: "A decade in tech",
    body: "FANDOM → Checkr → Fanstake → Dignifi. From frontend engineer to AI builder.",
  },
  {
    year: "Today",
    title: "Building second chances",
    body: "AI products for reentry at Dignifi, founder of Fitness Monkey, and a Last Mile mentor — giving back the gift I was given.",
  },
];

export default function Timeline() {
  return (
    <section className="full-bleed bg-(--color-surface-raised) py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-(--color-fm-light) mb-10">
            The path back
          </p>
        </ScrollReveal>

        <div className="space-y-10 max-w-[68ch]">
          {milestones.map((m, index) => (
            <ScrollReveal key={m.title} delay={index * 0.05}>
              <div className="group relative pl-8 border-l-2 border-(--color-border-strong) hover:border-(--color-fm) transition-colors">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-(--color-surface-raised) border-2 border-(--color-border-strong) group-hover:border-(--color-fm) group-hover:bg-fm/25 transition-colors" />
                <div className="text-sm font-semibold uppercase tracking-wider text-(--color-fm-light) mb-1">
                  {m.year}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-(--color-text-primary) mb-1">
                  {m.title}
                </h3>
                <p className="text-(--color-text-secondary) leading-relaxed">
                  {m.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
