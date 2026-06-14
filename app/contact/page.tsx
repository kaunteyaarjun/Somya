import Footer from "@/components/sections/Footer";

export const metadata = {
    title: "Contact | Somya Prasad",
    description: "Get in touch for collaborations and opportunities.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white flex flex-col justify-between pt-32">
            <div className="max-w-4xl mx-auto px-6 w-full text-center flex-grow flex flex-col justify-center pb-20">
                <h1 className="text-5xl md:text-8xl font-sans font-bold tracking-tight mb-8">
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Connect</span>
                </h1>
                
                <p className="text-gray-400 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto">
                    Currently open for new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to drop a message.
                </p>
                
                <a 
                    href="mailto:teams@polestudios.in"
                    className="inline-block mx-auto px-12 py-6 bg-white text-black font-sans font-bold text-xl uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
                >
                    teams@polestudios.in
                </a>
                
                <div className="mt-24 flex justify-center gap-8">
                    <a href="https://github.com/kaunteyaarjun" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors font-sans uppercase tracking-widest text-sm">GitHub</a>
                    <a href="https://linkedin.com/in/somyaprasadsethy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors font-sans uppercase tracking-widest text-sm">LinkedIn</a>
                    <a href="https://twitter.com/kaunteyaarjun" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors font-sans uppercase tracking-widest text-sm">Twitter</a>
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
