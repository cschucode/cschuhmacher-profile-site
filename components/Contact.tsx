import ScrollReveal from "./ScrollReveal";
import SocialIcon from "./SocialIcons";
import { professionalLinks, fitnessMonkeyLinks, type SiteLink } from "@/lib/links";

function LinkGroup({ title, links }: { title: string; links: SiteLink[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-(--color-text-muted) uppercase tracking-wider mb-4">
        {title}
      </h3>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        {links.map((link) => {
          const isMail = link.href.startsWith("mailto:");
          return (
            <a
              key={link.label}
              href={link.href}
              {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-(--color-border-strong) text-(--color-text-secondary) font-medium hover:border-(--color-fm) hover:text-(--color-text-primary) hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-base)"
            >
              <SocialIcon name={link.icon} className="w-5 h-5 flex-shrink-0" />
              <span className="flex flex-col leading-tight">
                <span>{link.label}</span>
                {link.handle && (
                  <span className="text-xs text-(--color-text-muted) font-normal">
                    {link.handle}
                  </span>
                )}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-3xl border border-(--color-border-strong) bg-linear-to-br from-(--color-surface-elevated) to-(--color-surface-raised)">
          {/* Accent glows */}
          <div className="absolute -top-1/3 -right-10 w-96 h-96 -z-0 rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle,var(--color-accent),transparent_70%)]" />
          <div className="absolute -bottom-1/3 -left-10 w-80 h-80 -z-0 rounded-full blur-3xl opacity-15 bg-[radial-gradient(circle,var(--color-fm),transparent_70%)]" />

          <div className="relative px-8 py-12 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-(--color-text-primary) mb-4">
              Let's Connect
            </h2>
            <p className="text-(--color-text-secondary) mb-10 max-w-[68ch] leading-relaxed">
              Whether you want to talk engineering and consulting, train together,
              or follow along with Fitness Monkey — I'd love to hear from you.
            </p>

            <div className="space-y-10">
              <LinkGroup title="Work with me" links={professionalLinks} />
              <LinkGroup title="Fitness Monkey" links={fitnessMonkeyLinks} />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
