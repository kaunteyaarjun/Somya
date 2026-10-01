import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/ui/Navbar";

export const metadata = {
    title: "About | Somya Prasad Sethy — Full-Stack & Backend Developer",
    description: "Learn more about Somya Prasad Sethy — Full-Stack Developer, Backend Engineer, and Founder of Pole Studios. Mathematical invariants, systems architecture, and production track record.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#08080b] text-white selection:bg-white/30 selection:text-white pt-20">
            <Navbar />
            <About />
            <Footer />
        </main>
    );
}
