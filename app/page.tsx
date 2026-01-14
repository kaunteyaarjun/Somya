import Hero from "@/components/hero/Hero";
import InfiniteMarquee from "@/components/sections/InfiniteMarquee";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Arsenal from "@/components/sections/Arsenal";
import ProjectVault from "@/components/sections/ProjectVault";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <InfiniteMarquee />
      <Arsenal />
      <ProjectVault />
      <Experience />
      <Testimonials />
      <Footer />
    </main>
  );
}
