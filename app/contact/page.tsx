"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { VscCopy, VscCheck, VscMail, VscArrowRight } from "react-icons/vsc";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function ContactPage() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("teams@polestudios.in");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const inquiryTypes = [
        { code: "01", label: "Full-Stack & Backend Roles", spec: "Distributed systems, Go/Rust/TypeScript, Remote Worldwide" },
        { code: "02", label: "Developer Tooling Engineering", spec: "DevSecOps pipelines, compilers, AST analysis, CLI tools" },
        { code: "03", label: "Distributed Memory / Cache Systems", spec: "LLM inference optimization, prefix cache, low-latency architectures" },
        { code: "04", label: "Pole Studios Client Projects", spec: "Custom web applications, production infrastructure, branding" },
    ];

    return (
        <main className="min-h-screen bg-[#08080b] text-white selection:bg-white/30 selection:text-white pt-20 flex flex-col justify-between">
            <Navbar />

            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-16 lg:py-24">
                {/* Top Telemetry Header Rail */}
                <div className="border-b-2 border-white/10 pb-4 mb-12 flex flex-wrap items-center justify-between font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest select-none">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
                        <span className="text-white font-bold">SIGNAL ROUTER // DIRECT TRANSMISSION PROTOCOL</span>
                        <span className="text-white/20">|</span>
                        <span className="text-emerald-400">CHANNEL: ONLINE</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-gray-500">
                        <span>AVAILABILITY: OPEN FOR ROLES WORLDWIDE</span>
                        <span>•</span>
                        <span>SLA: &lt; 24H RESPONSE</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Heading & Communications Dispatch */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                            <span>Initiate Transmission</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight leading-[1.05] uppercase">
                            Let&apos;s build <br />
                            <span className="stroke">high-performance</span> <br />
                            systems.
                        </h1>

                        <p className="font-sans text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
                            Open to remote full-stack and backend roles worldwide, systems engineering collaborations, and ambitious digital product builds. Reach out directly via email or inspect the verified socials below.
                        </p>

                        {/* Interactive Direct Email Card */}
                        <div className="pt-4 max-w-xl">
                            <div className="bg-[#0e0e12] border-2 border-white/20 p-5 sm:p-6 shadow-[8px_8px_0_rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-3.5">
                                    <div className="w-10 h-10 rounded-none bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                        <VscMail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                                            PRIMARY CONTACT ENDPOINT
                                        </div>
                                        <a
                                            href="mailto:teams@polestudios.in"
                                            className="font-mono text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors"
                                        >
                                            teams@polestudios.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handleCopy}
                                        className="flex-1 sm:flex-initial px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                                    >
                                        {copied ? (
                                            <>
                                                <VscCheck className="w-3.5 h-3.5 text-emerald-400" />
                                                <span className="text-emerald-400">COPIED</span>
                                            </>
                                        ) : (
                                            <>
                                                <VscCopy className="w-3.5 h-3.5" />
                                                <span>COPY</span>
                                            </>
                                        )}
                                    </button>
                                    <a
                                        href="mailto:teams@polestudios.in"
                                        className="px-4 py-2.5 bg-white hover:bg-emerald-400 text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                                    >
                                        <span>LAUNCH</span>
                                        <VscArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Networks Hub */}
                        <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
                            <a
                                href="https://github.com/kaunteyaarjun"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white/15 bg-white/[0.02] hover:border-white hover:bg-white/[0.06] p-3.5 flex items-center justify-between transition-all group"
                            >
                                <div className="flex items-center gap-2.5">
                                    <SiGithub className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                    <span className="font-mono text-xs font-bold text-gray-300 group-hover:text-white uppercase">GitHub</span>
                                </div>
                                <span className="font-mono text-[10px] text-gray-500 group-hover:text-emerald-400">@kaunteyaarjun</span>
                            </a>

                            <a
                                href="https://linkedin.com/in/somyaprasadsethy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white/15 bg-white/[0.02] hover:border-white hover:bg-white/[0.06] p-3.5 flex items-center justify-between transition-all group"
                            >
                                <div className="flex items-center gap-2.5">
                                    <SiLinkedin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                    <span className="font-mono text-xs font-bold text-gray-300 group-hover:text-white uppercase">LinkedIn</span>
                                </div>
                                <span className="font-mono text-[10px] text-gray-500 group-hover:text-emerald-400">/in/somya</span>
                            </a>

                            <a
                                href="https://twitter.com/kaunteyaarjun"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white/15 bg-white/[0.02] hover:border-white hover:bg-white/[0.06] p-3.5 flex items-center justify-between transition-all group"
                            >
                                <div className="flex items-center gap-2.5">
                                    <SiX className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                    <span className="font-mono text-xs font-bold text-gray-300 group-hover:text-white uppercase">Twitter</span>
                                </div>
                                <span className="font-mono text-[10px] text-gray-500 group-hover:text-emerald-400">@kaunteyaarjun</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Inquiry Routing & Telemetry Spec Sheet */}
                    <div className="lg:col-span-5 bg-[#0e0e12] border-2 border-white/15 p-6 sm:p-8 shadow-[8px_8px_0_rgba(255,255,255,0.06)] space-y-6">
                        <div className="flex items-center justify-between border-b-2 border-white/10 pb-3 font-mono text-xs">
                            <span className="text-white font-bold uppercase tracking-wider">
                                FIG 04.0 // INQUIRY ROUTING MATRIX
                            </span>
                            <span className="text-emerald-400 text-[10px] font-bold bg-emerald-950/60 px-2 py-0.5 border border-emerald-500/20">
                                ACTIVE DISPATCH
                            </span>
                        </div>

                        <div className="space-y-3">
                            {inquiryTypes.map((item) => (
                                <a
                                    key={item.code}
                                    href={`mailto:teams@polestudios.in?subject=${encodeURIComponent(`[${item.code}] Inquiry: ${item.label}`)}`}
                                    className="block border border-white/10 bg-black/60 p-3.5 hover:border-white/40 hover:bg-black/80 transition-all font-mono group"
                                >
                                    <div className="flex items-center justify-between text-xs mb-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-emerald-400 font-bold">TYPE {item.code} //</span>
                                            <span className="text-white font-bold group-hover:text-emerald-300 transition-colors uppercase">
                                                {item.label}
                                            </span>
                                        </div>
                                        <VscArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                                        {item.spec}
                                    </p>
                                </a>
                            ))}
                        </div>

                        {/* Engineering Availability Telemetry Box */}
                        <div className="border-t border-white/10 pt-4 font-mono text-[10px] space-y-2">
                            <div className="flex items-center justify-between text-gray-400">
                                <span>STATUS:</span>
                                <span className="text-emerald-400 font-bold">OPEN TO OFFERS WORLDWIDE</span>
                            </div>
                            <div className="flex items-center justify-between text-gray-400">
                                <span>TIMEZONE:</span>
                                <span className="text-white font-bold">UTC+05:30 (OVERLAPPING EMEA & US)</span>
                            </div>
                            <div className="flex items-center justify-between text-gray-400">
                                <span>STUDIO:</span>
                                <span className="text-white font-bold">POLE STUDIOS (FOUNDER)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
