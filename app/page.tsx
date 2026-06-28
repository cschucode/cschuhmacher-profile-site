import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Timeline from "@/components/Timeline";
import Featured from "@/components/Featured";
import WhatIDo from "@/components/WhatIDo";
import FitnessMonkey from "@/components/FitnessMonkey";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 md:px-8 py-12">
        <Hero />
        <Story />
        <Timeline />
        <Featured />
        <WhatIDo />
        <FitnessMonkey />
        <About />
        <Experience />
        <Contact />
        <footer className="full-bleed bg-(--color-surface-footer) border-t border-(--color-border) mt-12">
          <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 text-center text-(--color-text-muted) text-sm">
            &copy; {new Date().getFullYear()} Chris Schuhmacher
          </div>
        </footer>
      </main>
    </>
  );
}
