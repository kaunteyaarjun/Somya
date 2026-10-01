"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";

export default function ProjectVault() {
    return (
        <section id="work" className="py-20 px-6 sm:px-10 lg:px-16 bg-[#08080b] relative overflow-hidden text-white border-t-2 border-white/10">
            {/* Background Engineering Blueprint Grid */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />

            {/* Top Coordinate Header Rail */}
            <div className="max-w-7xl mx-auto mb-14 border-b-2 border-white/10 pb-4 flex flex-wrap items-center justify-between font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest select-none">
                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
                    <span className="text-white font-bold">PRODUCTION SYSTEMS VAULT</span>
                    <span className="text-white/20">|</span>
                    <span className="text-emerald-400">ARCHIVES: 4 ACTIVE ARCHITECTURES</span>
                </div>
                <div className="hidden md:flex items-center gap-6 text-gray-500">
                    <span>RUNTIME SLA: 99.9%</span>
                    <span>•</span>
                    <span>MEMORY SAFETY: VERIFIED</span>
                    <span>•</span>
                    <span>BENCHMARKS: REPRODUCIBLE</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-white/10 pb-6 mb-12">
                    <div>
                        <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-emerald-400 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-400" />
                            <span>// 01 — ARCHITECTURES & CODEBASES</span>
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-sans font-black text-white uppercase tracking-tight">
                            Engineered <span className="stroke">Systems.</span>
                        </h2>
                    </div>

                    <div className="font-mono text-xs text-gray-400 text-right hidden sm:block">
                        <div className="text-white font-bold uppercase">[FILTER: ALL PRODUCTION WORK]</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">LOW-LATENCY CACHE • AST SECURITY • FINTECH</div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col"
                        >
                            <Link
                                href={project.slug === "kv-cache-fabric" ? "/work/kv-cache-fabric" : `/work/${project.slug}`}
                                className="group block relative flex flex-col h-full bg-[#0e0e12] border-2 border-white/15 hover:border-white transition-all duration-300 p-6 shadow-[8px_8px_0_rgba(255,255,255,0.05)]"
                            >
                                {/* Technical Schema ID Header */}
                                <div className="flex items-center justify-between font-mono text-[10px] text-gray-400 border-b border-white/10 pb-3 mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-emerald-400">SPEC_ID // 0{index + 1}</span>
                                        <span className="text-white/30">•</span>
                                        <span className="text-white font-bold">{project.year}</span>
                                    </div>
                                    <span className="text-gray-400 uppercase tracking-wider">
                                        {project.role}
                                    </span>
                                </div>

                                {/* Preview Image Container */}
                                <div className="relative h-64 md:h-72 w-full overflow-hidden mb-5 bg-black border border-white/10">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-300" />

                                    {/* Status Badge */}
                                    <div className="absolute top-3 right-3 px-3 py-1 bg-white text-black font-mono text-[10px] font-bold uppercase tracking-widest">
                                        {project.status}
                                    </div>

                                    {project.video && (
                                        <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/90 backdrop-blur-md border border-white/20 text-emerald-400 font-mono text-[10px] uppercase tracking-wider flex items-center gap-2 font-bold">
                                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                            Watch Video Explainer
                                        </div>
                                    )}
                                </div>

                                {/* Title & Concrete Metrics */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-sans font-black text-white group-hover:text-emerald-300 transition-colors uppercase tracking-tight mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed line-clamp-3 mb-4">
                                            {project.longDescription || project.description}
                                        </p>
                                    </div>

                                    {/* Verified Performance Metrics Strip */}
                                    <div className="pt-4 border-t border-white/10 space-y-3">
                                        {project.metrics && project.metrics.length > 0 && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[10px]">
                                                {project.metrics.slice(0, 2).map((m) => (
                                                    <div key={m.label} className="bg-emerald-950/40 border border-emerald-500/30 p-2">
                                                        <span className="text-emerald-300 font-bold block">{m.value}</span>
                                                        <span className="text-gray-400 text-[9px] uppercase tracking-wider truncate block">{m.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 border border-white/15 bg-white/[0.02] text-gray-400"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
