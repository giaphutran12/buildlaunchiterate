import { ContactForm } from "@/components/contact-form";

export function CallToAction() {
  return (
    <section id="call-to-action" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Move Fast?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us your problems, we&apos;ll help you solve them.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
