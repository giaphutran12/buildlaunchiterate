import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "MVP Development",
      description:
        "From idea to working product in record time. Perfect for startups and new ventures.",
    },
    {
      title: "AI Integration",
      description:
        "Add intelligence to your existing products. LLMs, computer vision, predictive analytics.",
    },
    {
      title: "Web Applications",
      description:
        "Modern, scalable web apps that actually ship. React, Next.js, and whatever gets it done.",
    },
    {
      title: "API Development",
      description:
        "Robust backends and integrations that scale. Built for the real world.",
    },
    {
      title: "Product Strategy",
      description:
        "Technical roadmapping and strategic guidance. We think, then we build.",
    },
    {
      title: "Rapid Prototyping",
      description:
        "Test ideas fast before committing resources. Fail fast or scale fast.",
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 luxury-text-gradient">
          What we build
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16">
          Full-stack solutions powered by AI
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-card hover:border-cyan-400/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
