export function Process() {
  const processSteps = [
    {
      number: "1",
      title: "Build",
      description:
        "From zero to working product in days. AI-augmented development means we move at light speed.",
    },
    {
      number: "2",
      title: "Launch",
      description:
        "Get to market fast. Real users, real feedback, real progress. No endless planning phases.",
    },
    {
      number: "3",
      title: "Iterate",
      description:
        "Continuous improvement based on actual data. Your product evolves as your business grows.",
    },
  ];

  return (
    <section id="process" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 luxury-text-gradient">
          Our process is our name
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16">
          Simple. Fast. Effective.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {processSteps.map((step) => (
            <div key={step.number} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold luxury-accent-gradient group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                {step.number}
              </div>
              <h3 className="text-2xl mb-3 text-white">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
