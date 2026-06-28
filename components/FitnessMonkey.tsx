import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SocialIcon from "./SocialIcons";
import { fitnessMonkeyLinks, FITNESS_MONKEY_SITE } from "@/lib/links";

export default function FitnessMonkey() {
  return (
    <section id="fitness-monkey" className="full-bleed py-24 my-12 relative overflow-hidden">
      {/* Brand navy band */}
      <div className="absolute inset-0 -z-10 bg-(--color-fm-navy)" />
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-(--color-fm-navy) via-(--color-fm-navy) to-(--color-fm-navy-dark)" />
      {/* Subtle amber glow */}
      <div className="animate-gradient absolute -top-1/3 right-0 w-160 h-160 -z-10 rounded-full blur-3xl opacity-20 bg-(--color-fm)" />

      <div className="max-w-3xl mx-auto px-6 text-white">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/fitness-monkey-logo.png"
              alt="Fitness Monkey logo"
              width={72}
              height={72}
              className="rounded-2xl shadow-lg"
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-none">
                Fitness <span className="text-(--color-fm)">Monkey</span> Rising
              </h2>
              <p className="mt-2 uppercase tracking-[0.18em] text-xs sm:text-sm font-semibold text-(--color-fm-light)">
                Recovery · Fitness · Redemption
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mb-2">
            The recovery-and-fitness app I founded, built on a simple truth:
            getting clean and getting strong go hand in hand. It pairs sobriety
            tracking with workout logging, daily reflections, and AI-powered
            insights — helping people build momentum one day at a time.
          </p>
          <p className="text-base text-(--color-fm-light) font-medium mb-8">
            Get clean. Get strong. Day one is always a victory.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {fitnessMonkeyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-2 px-4 py-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/20 hover:border-fm/60 transition-colors"
              >
                <SocialIcon name={link.icon} className="w-7 h-7 text-(--color-fm)" />
                <span className="text-sm font-semibold">{link.label}</span>
                <span className="text-xs text-slate-300">{link.handle}</span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <a
            href={FITNESS_MONKEY_SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-(--color-fm) text-(--color-fm-navy-dark) hover:bg-(--color-fm-light) transition-colors"
          >
            Visit fitnessmonkey.org
            <span aria-hidden="true">↗</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
