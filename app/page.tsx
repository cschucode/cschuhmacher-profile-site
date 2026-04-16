import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Hero />
      <About />
      <Experience />
      <Contact />
      <footer className="py-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Chris Schuhmacher
      </footer>
    </main>
  );
}
