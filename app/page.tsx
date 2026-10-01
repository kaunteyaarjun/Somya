import Loader from "@/components/hero/Loader";
import Hero from "@/components/hero/Hero";
import HomeAbout from "@/components/sections/HomeAbout";
import InfiniteMarquee from "@/components/sections/InfiniteMarquee";
import HomeArsenal from "@/components/sections/HomeArsenal";
import HomeProjectVault from "@/components/sections/HomeProjectVault";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Loader />
      <Hero />
      <HomeAbout />
      <InfiniteMarquee />
      <HomeArsenal />
      <HomeProjectVault />
      <Footer />
    </main>
  );
}
