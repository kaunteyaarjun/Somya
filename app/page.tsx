import Loader from "@/components/hero/Loader";
import CreativeNavbar from "@/components/creative/CreativeNavbar";
import CreativeHero from "@/components/creative/CreativeHero";
import CreativeWorks from "@/components/creative/CreativeWorks";
import CreativeExperience from "@/components/creative/CreativeExperience";
import CreativeTools from "@/components/creative/CreativeTools";
import CreativeContact from "@/components/creative/CreativeContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-white selection:bg-neutral-300 selection:text-neutral-900">
      <Loader />
      <CreativeNavbar />
      <CreativeHero />
      <CreativeWorks />
      <CreativeExperience />
      <CreativeTools />
      <CreativeContact />
    </main>
  );
}
