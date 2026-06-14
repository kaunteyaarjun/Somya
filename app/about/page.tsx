import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import WordScroll from "@/components/ui/WordScroll";

export const metadata = {
    title: "About Me | Somya Prasad",
    description: "Learn more about my background, philosophy, and experience.",
};

const WORKS = [
    "products.",
    "platforms.",
    "web applications.",
    "interfaces.",
    "API platforms.",
    "backend services.",
    "distributed systems.",
    "secure systems.",
    "resilient architectures.",
    "scalable software.",
    "technical foundations."
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white pt-24">
            <div className="max-w-6xl mx-auto px-6 mb-12">
                <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight mb-4">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Me</span>
                </h1>
                <p className="text-gray-400 font-sans uppercase tracking-widest text-sm">The story behind the code</p>
            </div>
            
            <About />
            
            <WordScroll prefix="I build" words={WORKS} />
            
            <Footer />
        </main>
    );
}
