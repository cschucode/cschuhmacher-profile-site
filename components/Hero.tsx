import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-gradient-to-tr from-gray-100 to-slate-200 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="flex flex-col md:flex-row md:items-center md:gap-12">
        {/* Photo */}
        <div className="mb-8 md:mb-0 md:order-2 flex-shrink-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl rotate-6 opacity-20" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-100 shadow-lg bg-gradient-to-br from-gray-100 to-gray-200">
              {/* Replace with your headshot: /public/headshot.jpg */}
              <Image
                src="/headshot.jpg"
                alt="Chris Schuhmacher"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="md:order-1">
          <p className="text-blue-600 font-medium mb-2">Hi, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Chris Schuhmacher
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Senior Frontend / Product Engineer
          </h2>
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            8+ years building scalable web applications with React and TypeScript.
            Passionate about UI architecture, high-impact product features, and
            user-focused experiences.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#experience"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
