import ProjectVault from "@/components/sections/ProjectVault";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";

export const metadata = {
    title: "Work & Experience | Somya Prasad",
    description: "Featured projects and professional timeline.",
};

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white pt-24">
            
            <ProjectVault />
            
            <div className="border-t border-white/5 my-12" />
            
            <Experience />
            
            <Footer />
        </main>
    );
}
