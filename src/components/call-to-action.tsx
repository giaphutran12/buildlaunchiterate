import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";

export function CallToAction() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss the challenges you're facing and how we can help you
            build, launch, and iterate your way to success.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
