import ProjectVault from "@/components/sections/ProjectVault";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/ui/Navbar";

export const metadata = {
    title: "Work & Production Deployments | Somya Prasad Sethy",
    description: "Featured engineering projects and distributed systems architecture by Somya Prasad Sethy. KV-Cache Fabric, CodeSentry DevSecOps, and AI Loan Disbursement Engine.",
};

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-[#08080b] text-white selection:bg-white/30 selection:text-white pt-20">
            <Navbar />
            <ProjectVault />
            <div className="border-t-2 border-white/10 my-8" />
            <Experience />
            <Footer />
        </main>
    );
}
