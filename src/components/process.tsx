import Image from "next/image";

export function Process() {
  const processSteps = [
    {
      icon: (
        <Image
          src="/computer.svg"
          alt="1. Build"
          width={48}
          height={48}
          className="text-purple-600"
        />
      ),
      title: "Build",
      description:
        "From zero to working product in days. AI-augmented development means we move at light speed.",
    },
    {
      icon: (
        <Image
          src="/rocket.svg"
          alt="2. Launch"
          width={48}
          height={48}
          className="text-purple-600"
        />
      ),
      title: "Launch",
      description:
        "Get to market fast. Real users, real feedback, real progress. No endless planning phases.",
    },
    {
      icon: (
        <Image
          src="/loop.svg"
          alt="3. Iterate"
          width={48}
          height={48}
          className="text-purple-600"
        />
      ),
      title: "Iterate",
      description:
        "Continuous improvement based on actual data. Your product evolves as your business grows.",
    },
  ];

  return (
    <section id="process" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our process is our name
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Simple. Fast. Effective.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl flex items-center justify-center mx-auto mb-6 border-2 border-purple-100 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-purple-200">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
