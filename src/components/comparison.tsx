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
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl mb-8">
              Traditional agencies are stuck in 2010
            </h3>
            {traditionalProblems.map((problem, index) => (
              <div key={index} className="flex gap-3 mb-5">
                <X className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-1">{problem.title}</strong>
                  <span className="text-gray-600 text-sm">
                    {problem.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-3xl mb-17">
              We&apos;re built for{" "}
              <span className="bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
                now
              </span>
            </h3>
            {ourAdvantages.map((advantage, index) => (
              <div key={index} className="flex gap-3 mb-5">
                <Check className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-1">{advantage.title}</strong>
                  <span className="text-gray-600 text-sm">
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
