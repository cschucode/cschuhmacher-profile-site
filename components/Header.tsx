"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#fitness-monkey", label: "Fitness Monkey", accent: true },
  { href: "#speaking", label: "Speaking" },
  { href: "#experience", label: "Work" },
  { href: "/resume", label: "Résumé" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface-base/80 backdrop-blur-md border-b border-(--color-border) py-3"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <a
          href="#"
          className={`font-semibold text-(--color-text-primary) transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          CS
        </a>

        <div
          className={`flex items-center gap-6 transition-all duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-base) ${
                link.accent
                  ? "font-medium text-(--color-fm-light) hover:opacity-80"
                  : "text-(--color-text-muted) hover:text-(--color-text-primary)"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
