import Hero from "@/components/hero/Hero";
import HyperScroll from "@/components/sections/HyperScroll";
import InfiniteMarquee from "@/components/sections/InfiniteMarquee";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeArsenal from "@/components/sections/HomeArsenal";
import HomeProjectVault from "@/components/sections/HomeProjectVault";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <HyperScroll />
      <HomeAbout />
      <InfiniteMarquee />
      <HomeArsenal />
      <HomeProjectVault />
      <Testimonials />
      <Footer />
    </main>
  );
}
