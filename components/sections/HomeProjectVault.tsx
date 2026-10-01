"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";

export default function HomeProjectVault() {
    return (
        <section id="work" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-[#08080b] relative overflow-hidden border-t-4 border-white/10">
            {/* Background Engineering Blueprint Grid */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />

            {/* Ghost Background Typography */}
            <div className="absolute top-4 right-6 text-[14vw] font-sans font-black text-white/[0.015] pointer-events-none select-none leading-none z-0">
                BUILDS
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-white/10 pb-6 mb-12">
                    <div>
                        <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-emerald-400 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-400" />
                            <span>// 03 — PRODUCTION DEPLOYMENTS</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight">
                            Engineered <span className="stroke">Systems.</span>
                        </h2>
                    </div>

                    <div className="font-mono text-xs text-gray-400 text-right hidden sm:block">
                        <div className="text-white font-bold uppercase">[VAULT_STATUS: VERIFIED]</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">BENCHMARKS VERIFIED ACROSS LIVE RUNTIMES</div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-14">
                    {PROJECTS.slice(0, 3).map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col"
                        >
                            <Link
                                href={`/work/${project.slug}`}
                                className="group block relative flex flex-col h-full bg-[#0e0e12] border-2 border-white/15 hover:border-white transition-all duration-300 p-5 shadow-[6px_6px_0_rgba(255,255,255,0.05)]"
                            >
                                {/* Technical Schema ID Header */}
                                <div className="flex items-center justify-between font-mono text-[10px] text-gray-400 border-b border-white/10 pb-2.5 mb-4">
                                    <span className="font-bold text-emerald-400">
                                        SPEC // 0{index + 1}
                                    </span>
                                    <span className="text-gray-500 uppercase tracking-wider">
                                        {project.role}
                                    </span>
                                </div>

                                {/* Preview Image Container */}
                                <div className="relative h-56 w-full overflow-hidden mb-5 bg-black border border-white/10">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-300" />

                                    {/* Status Badge */}
                                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 bg-white text-black font-mono text-[9px] font-bold uppercase tracking-widest">
                                        {project.status}
                                    </div>
                                    {project.video && (
                                        <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 bg-black/85 backdrop-blur-md border border-white/20 text-emerald-400 font-mono text-[9px] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                            Video Architecture Explainer
                                        </div>
                                    )}
                                </div>

                                {/* Title & Concrete Metrics */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-sans font-black text-white group-hover:text-emerald-300 transition-colors uppercase tracking-tight mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-gray-300 font-sans leading-relaxed line-clamp-3 mb-4">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Technical Specification Chips */}
                                    <div className="pt-3 border-t border-white/10 space-y-3">
                                        {/* Core Verified Metric Badge */}
                                        {project.metrics && project.metrics.length > 0 && (
                                            <div className="bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 font-mono text-[10px] text-emerald-300 font-bold uppercase tracking-wider truncate">
                                                ✦ {project.metrics[0].value}
                                            </div>
                                        )}

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border border-white/15 bg-white/[0.02] text-gray-400"
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

                {/* Bottom Strip */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-white/10 pt-6">
                    <div className="font-mono text-xs text-gray-400">
                        SHOWING 3 OF 4 PRODUCTION CASE STUDIES
                    </div>
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white border-2 border-white/20 bg-white/5 px-8 py-3.5 hover:bg-white hover:text-black hover:border-white transition-all shadow-[4px_4px_0_rgba(255,255,255,0.1)]"
                    >
                        Explore All Systems & Case Studies <span>&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
