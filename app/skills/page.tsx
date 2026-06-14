import Arsenal from "@/components/sections/Arsenal";
import Footer from "@/components/sections/Footer";

export const metadata = {
    title: "Skills & Tools | Somya Prasad",
    description: "The technologies and tools I use to build digital experiences.",
};

export default function SkillsPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white pt-24">

            <Arsenal />
            
            <Footer />
        </main>
    );
}
