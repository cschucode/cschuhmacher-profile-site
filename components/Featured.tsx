import ScrollReveal from "./ScrollReveal";
import { podcasts, press } from "@/lib/media";

function MicIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-14 0m7 7v3m-4 0h8M12 3a3 3 0 00-3 3v5a3 3 0 006 0V6a3 3 0 00-3-3z" />
    </svg>
  );
}

export default function Featured() {
  return (
    <section id="featured" className="py-20 md:py-28">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-(--color-text-primary)">
            As Heard On
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-(--color-border-strong) to-transparent" />
        </div>
        <p className="text-(--color-text-secondary) mb-10 max-w-[68ch]">
          I've been grateful to share this story on some of the conversations and
          publications that mean the most to me.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {podcasts.map((p, index) => (
          <ScrollReveal key={p.href} delay={index * 0.08}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full p-6 rounded-2xl bg-(--color-surface-card) border border-(--color-border-strong) hover:bg-(--color-surface-elevated) hover:border-fm/60 hover:shadow-[0_10px_30px_-12px_rgba(242,165,60,0.25)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-base)"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-2 text-(--color-fm-light) font-semibold">
                  <MicIcon />
                  {p.show}
                </span>
                {p.year && (
                  <span className="text-xs text-(--color-text-muted)">{p.year}</span>
                )}
              </div>
              <p className="text-(--color-text-primary) font-medium leading-snug flex-1">
                {p.title}
              </p>
              <span className="mt-4 text-sm text-(--color-text-muted) inline-flex items-center gap-1">
                {p.host ? `with ${p.host}` : "Listen"}
                <span className="transition-transform group-hover:translate-x-0.5">↗</span>
              </span>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.1}>
        <div className="mt-10">
          <h3 className="text-sm font-semibold text-(--color-text-muted) uppercase tracking-wider mb-4">
            In print
          </h3>
          <div className="flex flex-wrap gap-3">
            {press.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-(--color-border-strong) text-sm text-(--color-text-secondary) hover:border-fm/60 hover:text-(--color-text-primary) transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-base)"
              >
                <span className="font-medium">{item.show}</span>
                <span className="text-(--color-text-muted) hidden sm:inline">— {item.title}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
