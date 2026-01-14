"use client";

import { motion } from "framer-motion";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="py-12 px-6 border-t border-white/5 bg-black text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gold/5 blur-3xl opacity-20 pointer-events-none" />

            <div className="relative z-10 space-y-8">
                <h2 className="text-2xl font-sans font-bold tracking-widest text-gold opacity-80">
                    SOMYA PRASAD
                </h2>

                <div className="flex justify-center space-x-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-mono text-gray-500">
                        <div>SYSTEM_ID: SPE_v2.0.77</div>
                        <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full" />
                        <div>© 2024 Somya Prasad. All rights reserved.</div>
                        <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full" />
                        <a href="mailto:polestudios@mail.ru" className="hover:text-gold transition-colors">polestudios@mail.ru</a>
                    </div>
                </div>

                <p className="text-xs font-mono text-gray-600">
                    © {new Date().getFullYear()} All Systems Operational.
                </p>

                <button
                    onClick={scrollToTop}
                    className="group relative px-6 py-2 border border-white/10 hover:border-gold/50 rounded-full transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm rounded-full" />
                    <span className="relative font-mono text-xs uppercase tracking-widest text-gray-400 group-hover:text-gold">
                        Initiate Shutdown (Top)
                    </span>
                </button>
            </div>
        </footer>
    );
}
