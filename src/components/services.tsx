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
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">What we build</h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Full-stack solutions powered by AI
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:border-purple-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
