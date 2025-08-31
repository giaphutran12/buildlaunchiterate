import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section id="contact" className="py-20 bg-black text-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-6">Ready to move fast?</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Let&apos;s talk about your project. No lengthy discovery phase, no
          bullshit.
          <br />
          Just a conversation about how to get you to market faster.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="secondary" size="lg" asChild>
            <a href="mailto:hello@buildlaunchiterate.com">
              hello@buildlaunchiterate.com
            </a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="#">Schedule a Call</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
