"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiGo, SiRust, SiDocker, SiPostgresql } from "react-icons/si";

export default function HomeArsenal() {
    const systemLayers = [
        {
            layer: "LAYER 01 // LOW-LEVEL SYSTEMS & CONCURRENCY",
            badge: "KERNEL & RUNTIME",
            description: "Zero-copy shared memory, multi-threaded agent coordination, and lockless ring buffers.",
            items: [
                { name: "Go", icon: SiGo, spec: "Goroutines • Atomic Channels", metric: "O(1) Dispatch" },
                { name: "Rust", icon: SiRust, spec: "Borrow Checker • Zero-Cost SIMD", metric: "Zero Overhead" },
                { name: "Docker", icon: SiDocker, spec: "Isolated Micro-VM Environments", metric: "Reproducible" },
            ],
        },
        {
            layer: "LAYER 02 // DISTRIBUTED FABRIC & STATE STORAGE",
            badge: "PERSISTENCE & CACHE",
            description: "Prefix-tree attention caching, transactional ledgers, and relational persistence.",
            items: [
                { name: "KV-Cache", icon: SiPostgresql, spec: "Radix Prefix Engine", metric: "99.3% Hit Rate" },
                { name: "PostgreSQL", icon: SiPostgresql, spec: "Strict ACID Two-Phase Commit", metric: "Strict Linear" },
                { name: "gRPC / IPC", icon: SiGo, spec: "Protobuf HTTP/2 Multiplexing", metric: "<1.2ms P99" },
            ],
        },
        {
            layer: "LAYER 03 // FULL-STACK WEB RUNTIMES & COMPILERS",
            badge: "USER & COMPILER INTERFACES",
            description: "Server-side streaming architectures, type-safe APIs, and responsive rendering engines.",
            items: [
                { name: "Next.js", icon: SiNextdotjs, spec: "React Server Components • SSG", metric: "Edge Deployed" },
                { name: "TypeScript", icon: SiTypescript, spec: "Static Analysis & Type Soundness", metric: "Zero Type Drift" },
                { name: "Node.js", icon: SiNodedotjs, spec: "High-Concurrency Event Loop", metric: "Non-Blocking" },
            ],
        },
    ];

    return (
        <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-[#0a0a0d] border-t-4 border-white/10 relative overflow-hidden">
            {/* Background Engineering Blueprint Grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Ghost Background Typography */}
            <div className="absolute top-4 left-6 text-[14vw] font-sans font-black text-white/[0.015] pointer-events-none select-none leading-none z-0">
                STACK
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-white/10 pb-6 mb-12">
                    <div>
                        <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-emerald-400 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-400" />
                            <span>// 02 — SUBSYSTEM ARSENAL</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight">
                            Engineering <span className="stroke">Topology.</span>
                        </h2>
                    </div>

                    <div className="font-mono text-xs text-gray-400 text-right hidden sm:block">
                        <div className="text-white font-bold uppercase">[SYS_ARCH: MODULAR]</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">COMPILED FOR HIGH-PERFORMANCE WORKLOADS</div>
                    </div>
                </div>

                {/* Subsystem Layers Stack */}
                <div className="space-y-6 mb-14">
                    {systemLayers.map((sys, idx) => (
                        <motion.div
                            key={sys.layer}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="border-2 border-white/10 bg-[#0e0e12] p-5 sm:p-7 shadow-[6px_6px_0_rgba(255,255,255,0.04)]"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                                        {sys.layer}
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 uppercase tracking-widest">
                                    {sys.badge}
                                </span>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-400 font-sans mb-5 leading-relaxed">
                                {sys.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {sys.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="border border-white/10 bg-black/40 p-4 hover:border-white/30 hover:bg-black/70 transition-all flex flex-col justify-between"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2.5">
                                                <item.icon className="w-5 h-5 text-gray-300" />
                                                <span className="font-mono text-xs sm:text-sm font-bold text-white uppercase">
                                                    {item.name}
                                                </span>
                                            </div>
                                            <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-1.5 py-0.5 border border-emerald-500/20">
                                                {item.metric}
                                            </span>
                                        </div>
                                        <div className="text-[10px] font-mono text-gray-400 truncate">
                                            {item.spec}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA & Verification Strip */}
                <div className="flex flex-wrap items-center justify-between gap-6 border-t-2 border-white/10 pt-6">
                    <div className="font-mono text-xs text-gray-400">
                        <span className="text-emerald-400 font-bold">ALL DEPENDENCIES:</span> AUDITED & PRODUCTION-PROVEN
                    </div>
                    <Link
                        href="/skills"
                        className="inline-flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white border-2 border-white/20 bg-white/5 px-8 py-3.5 hover:bg-white hover:text-black hover:border-white transition-all shadow-[4px_4px_0_rgba(255,255,255,0.1)]"
                    >
                        Inspect Full Technical Matrix <span>&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
