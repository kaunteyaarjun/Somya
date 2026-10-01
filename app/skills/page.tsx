import Arsenal from "@/components/sections/Arsenal";
import Footer from "@/components/sections/Footer";

export const metadata = {
    title: "Skills & Tools | Somya Prasad Sethy",
    description: "The backend, systems, and frontend technologies I use to build fast web products.",
};

export default function SkillsPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white pt-24">

            <Arsenal />
            
            <Footer />
        </main>
    );
}
