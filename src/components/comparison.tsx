import { Check, X } from "lucide-react";

export function Comparison() {
  const traditionalProblems = [
    {
      title: "6-month timelines",
      description: "By the time they ship, the market's moved on",
    },
    {
      title: "Bloated teams & invoices",
      description: "You&apos;re paying for their office ping pong table",
    },
    {
      title: "Legacy everything",
      description: "Old tech, old thinking, old pace",
    },
  ];

  const ourAdvantages = [
    {
      title: "Ship in weeks",
      description: "Get to market while your idea is still fresh",
    },
    {
      title: "AI-augmented efficiency",
      description: "Smaller team, bigger output, smarter solutions",
    },
    {
      title: "Modern stack, modern pace",
      description: "Latest tools, fastest workflows, best practices",
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-3xl mb-8 text-red-400 font-semibold">
              Traditional agencies are stuck in 2010
            </h3>
            {traditionalProblems.map((problem, index) => (
              <div key={index} className="flex gap-3 mb-5">
                <X className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-1 text-white">
                    {problem.title}
                  </strong>
                  <span className="text-gray-300 text-sm">
                    {problem.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-3xl mb-8 text-cyan-400 font-semibold">
              We&apos;re built for now
            </h3>
            {ourAdvantages.map((advantage, index) => (
              <div key={index} className="flex gap-3 mb-5">
                <Check className="text-cyan-500 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-1 text-white">
                    {advantage.title}
                  </strong>
                  <span className="text-gray-300 text-sm">
                    {advantage.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
