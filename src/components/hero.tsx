import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-40 pb-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p className="text-cyan-400 font-medium text-sm tracking-widest uppercase mb-4">
          Software & Strategy for Future-Forward Businesses
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Ship in weeks,
          <br />
          <span className="luxury-accent-gradient animated-gradient">
            not months.
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
          AI-powered development at startup speed. We build, launch, and iterate
          faster than traditional agencies ever could.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <a href="#contact">Start Building →</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300"
          >
            <a href="#process">See How We Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
