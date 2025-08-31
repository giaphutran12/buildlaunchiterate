import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-40 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-purple-600 font-medium text-sm tracking-widest uppercase mb-4">
          Software & Strategy for Future-Forward Businesses
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Ship in weeks,
          <br />
          <span className="bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
            not months.
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          AI-powered development at startup speed. We build, launch, and iterate
          faster than any traditional agencies ever could.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button asChild size="lg">
            <a href="#contact">Start Building →</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#process">See How We Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
