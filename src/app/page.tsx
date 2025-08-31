import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Process } from "@/components/process";
import { Comparison } from "@/components/comparison";
import { Services } from "@/components/services";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen luxury-bg">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Process />
        <Comparison />
        <Services />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
