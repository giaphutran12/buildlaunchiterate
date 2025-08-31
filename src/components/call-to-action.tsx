import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Luxury background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10"></div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl font-bold mb-6 luxury-text-gradient">
          Ready to move fast?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s talk about your project. No lengthy discovery phase, no
          bullshit.
          <br />
          Just a conversation about how to get you to market faster.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <a href="mailto:hello@buildlaunchiterate.com">
              hello@buildlaunchiterate.com
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="#">Schedule a Call</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
