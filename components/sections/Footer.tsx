"use client";

export default function Footer() {
    return (
        <footer id="contact" className="py-16 px-6 border-t border-white/5 bg-black text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 blur-3xl opacity-10 pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
                <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-mono font-bold tracking-widest text-white uppercase">
                        SOMYA PRASAD SETHY
                    </h2>
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400">
                        Creative Developer · AI-Assisted Backend Development · Python & Systems
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-xs font-mono uppercase tracking-[0.2em] text-gray-400">
                    <a
                        href="https://github.com/kaunteyaarjun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        GitHub
                    </a>
                    <span className="opacity-20">•</span>
                    <a
                        href="https://linkedin.com/in/somyaprasadsethy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        LinkedIn
                    </a>
                    <span className="opacity-20">•</span>
                    <a
                        href="https://twitter.com/kaunteyaarjun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        Twitter
                    </a>
                    <span className="opacity-20">•</span>
                    <a
                        href="mailto:somya5400840@gmail.com"
                        className="hover:text-white transition-colors"
                    >
                        somya5400840@gmail.com
                    </a>
                </div>

                <div className="pt-4 text-xs font-mono text-gray-600">
                    © {new Date().getFullYear()} Somya Prasad Sethy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
