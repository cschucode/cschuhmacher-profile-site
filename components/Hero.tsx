export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center">
      <p className="text-gray-600 mb-2">Hi, I'm</p>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        Chris Schuhmacher
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
        Software Engineer
      </h2>
      <p className="text-lg text-gray-500 max-w-xl">
        {/* Add your tagline here */}
        Building thoughtful software solutions.
      </p>
    </section>
  );
}
