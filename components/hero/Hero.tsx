"use client";

import { motion } from "framer-motion";
import ArchitectureDiagram from "@/components/hero/ArchitectureDiagram";

export default function Hero() {
    return (
        <section id="hero" className="relative w-full bg-[#0a0a0a] text-white border-b-4 border-white/10 overflow-hidden pt-20">
            {/* Top Ticker Marquee */}
            <div className="w-full bg-[#141416] border-b-2 border-white/10 py-2.5 overflow-hidden whitespace-nowrap select-none font-mono text-xs font-bold tracking-[0.15em] text-white/90">
                <div className="inline-block animate-marquee">
                    <span>✦ SOMYA PRASAD SETHY</span>
                    <span className="mx-6 text-emerald-400">•</span>
                    <span>FULL-STACK DEVELOPER & BACKEND ENGINEER</span>
                    <span className="mx-6 text-emerald-400">•</span>
                    <span>I BUILD BACKEND SYSTEMS, DEVELOPER TOOLING & FAST WEB PRODUCTS</span>
                    <span className="mx-6 text-emerald-400">•</span>
                    <span>FOUNDER OF POLE STUDIOS</span>
                    <span className="mx-6 text-emerald-400">•</span>
                    <span>GO • RUST • TYPESCRIPT • NEXT.JS • gRPC</span>
                    <span className="mx-6 text-emerald-400">•</span>
                    <span>OPEN TO REMOTE ROLES WORLDWIDE</span>
                    <span className="mx-6 text-emerald-400">•</span>
                    <span>✦ SOMYA PRASAD SETHY</span>
                    <span className="mx-6 text-emerald-400">•</span>
                    <span>FULL-STACK DEVELOPER & BACKEND ENGINEER</span>
                    <span className="mx-6 text-emerald-400">•</span>
                    <span>I BUILD BACKEND SYSTEMS, DEVELOPER TOOLING & FAST WEB PRODUCTS</span>
                    <span className="mx-6 text-emerald-400">•</span>
                </div>
            </div>

            {/* Hero Main Grid (Inspired by 'It Was Never A Competition') */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-130px)]">
                {/* Left Column: Editorial Information */}
                <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center relative lg:border-r-4 border-white/10 z-10">
                    {/* Ghost Background Typography */}
                    <div className="absolute top-2 left-2 text-[14vw] lg:text-[10vw] font-sans font-black text-white/[0.025] pointer-events-none select-none leading-none z-0">
                        SYSTEMS
                    </div>

                    <div className="relative z-10 space-y-6 max-w-2xl">
                        {/* Section Tag Chip */}
                        <div className="inline-flex items-center gap-2 border-2 border-white/20 bg-white/5 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            <span>✦ Full-Stack Developer | Backend Engineer | Creative Developer</span>
                        </div>

                        {/* Heavy Display Title */}
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-sans font-black tracking-tighter leading-[0.9] text-white uppercase">
                            <span>SOMYA</span><br />
                            <span>PRASAD</span><br />
                            <span className="stroke">SETHY.</span>
                        </h1>

                        {/* Concrete Copy & Tightened Bio */}
                        <div className="space-y-4 pt-2">
                            <p className="font-mono text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                                // I build backend systems, developer tooling and fast web products.
                            </p>
                            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                                Self-taught, AI-assisted full-stack and backend developer with 3+ years of experience building production-grade web applications and developer tooling. Founder of Pole Studios, a branding and web development studio operating on zero external capital. Open to remote roles worldwide.
                            </p>
                        </div>

                        {/* Action Chips (Rectangular Brutalist, NO PILL ICONS) */}
                        <div className="flex flex-wrap items-center gap-3 pt-4">
                            <a
                                href="/Somya_Prasad_Sethy_Resume.pdf"
                                download="Somya_Prasad_Sethy_Resume.pdf"
                                className="border-2 border-white bg-white text-black font-mono font-bold text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-transparent hover:text-white transition-all duration-200 shadow-[4px_4px_0_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                            >
                                [ ⬇ DOWNLOAD CV ]
                            </a>
                            <a
                                href="#work"
                                className="border-2 border-white/30 text-white font-mono font-bold text-xs uppercase tracking-widest px-6 py-3.5 hover:border-white hover:bg-white/10 transition-all duration-200 shadow-[4px_4px_0_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                            >
                                [ FEATURED WORK ]
                            </a>
                            <a
                                href="#contact"
                                className="border-2 border-white/30 text-white font-mono font-bold text-xs uppercase tracking-widest px-6 py-3.5 hover:border-white hover:bg-white/10 transition-all duration-200 shadow-[4px_4px_0_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                            >
                                [ GET IN TOUCH ]
                            </a>
                        </div>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap gap-2 pt-4">
                            {["Next.js", "Go", "Rust", "TypeScript", "Node.js", "gRPC", "PostgreSQL", "Docker"].map((tech) => (
                                <span
                                    key={tech}
                                    className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-white/15 bg-white/[0.02] text-gray-300"
                                >
                                    #{tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Interactive Systems Architecture Topology */}
                <div className="lg:col-span-5 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center bg-[#0d0d10] relative z-10 border-t-4 lg:border-t-0 border-white/10">
                    {/* Ghost Background Typography */}
                    <div className="absolute bottom-4 right-4 text-[12vw] lg:text-[8vw] font-sans font-black text-white/[0.02] pointer-events-none select-none leading-none z-0">
                        SYSTEMS
                    </div>

                    <div className="w-full relative z-10 flex justify-center">
                        <ArchitectureDiagram />
                    </div>
                </div>
            </div>
        </section>
    );
}
