import Image from "next/image";
import { asHeardOn } from "@/lib/media";

const credentials = [
  "Founder of Fitness Monkey",
  "AI builder",
  "Speaker",
  "Last Mile mentor",
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-base)";

const primaryBtn = `inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-(--color-fm) text-(--color-fm-navy-dark) hover:bg-(--color-amber-hover) active:bg-(--color-amber-press) transition-colors ${focusRing}`;

const secondaryBtn = `inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-(--color-surface-card) text-(--color-text-primary) border border-(--color-border-strong) hover:bg-(--color-surface-elevated) hover:border-fm/50 transition-colors ${focusRing}`;

export default function Hero() {
  return (
    <section className="full-bleed -mt-12 relative min-h-[92vh] flex flex-col justify-center overflow-hidden py-20 md:py-28">
      {/* Full-width ambient gradient wash */}
      <div className="absolute inset-0 -z-10">
        <div className="animate-gradient absolute -top-48 -right-32 w-160 h-160 rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle,var(--color-fm),transparent_65%)]" />
        <div className="animate-gradient absolute -bottom-48 -left-32 w-160 h-160 rounded-full blur-3xl opacity-15 bg-[radial-gradient(circle,var(--color-accent),transparent_65%)]" />
      </div>

      {/* Inner content — centered in the same container as every other section */}
      <div className="w-full max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:gap-14">
          {/* Photo */}
          <div className="mb-10 md:mb-0 md:order-2 flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-linear-to-br from-(--color-accent) to-(--color-fm) rounded-2xl rotate-6 opacity-30" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-(--color-border-strong) shadow-xl bg-(--color-surface-card)">
                <Image
                  src="/headshot.jpg"
                  alt="Chris Schuhmacher"
                  fill
                  sizes="(min-width: 768px) 256px, 192px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="md:order-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--color-text-muted) mb-4">
              Chris Schuhmacher
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-(--color-text-primary) leading-[1.05] mb-6">
              From rock bottom to{" "}
              <span className="text-(--color-fm-light)">building second chances.</span>
            </h1>

            {/* Credential line */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base md:text-lg text-(--color-text-secondary) mb-8">
              {credentials.map((item, i) => (
                <span key={item} className="flex items-center gap-3">
                  {i > 0 && <span className="text-(--color-border-strong)">·</span>}
                  {item}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="#story" className={primaryBtn}>
                My Story
              </a>
              <a href="#fitness-monkey" className={secondaryBtn}>
                Fitness Monkey
              </a>
              <a href="#contact" className={secondaryBtn}>
                Get in Touch
              </a>
            </div>

            {/* As heard on */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-(--color-text-muted) mb-2">
                As heard on
              </p>
              <p className="text-sm text-(--color-text-secondary)">{asHeardOn.join("  ·  ")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
