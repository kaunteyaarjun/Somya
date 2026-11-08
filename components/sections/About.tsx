"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiGo, SiRust, SiDocker, SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";

export default function About() {
    const mathematicalAxioms = [
        {
            formula: "∑(t_prefill) → 0",
            title: "01. LATENCY BOUNDS & RADIX CACHING",
            body: "Eliminating redundant prefill compute across agent prompt streams. Engineered KV-Cache Fabric to achieve 53% lower TTFT via lock-coupled radix prefix caching.",
            metric: "53% TTFT DROP",
        },
        {
            formula: "P(deadlock) = 0",
            title: "02. CONCURRENCY & ZERO-LOCK WAIT",
            body: "Strict unidirectional hierarchical locks and lockless atomics. Validated in 16-agent concurrent stress environments with zero thread deadlocks or OOM crashes.",
            metric: "0 DEADLOCKS",
        },
        {
            formula: "O(1) Pool Indexing",
            title: "03. ZERO-COPY DISAGREGATED MEMORY",
            body: "Direct VRAM-to-DRAM PCIe DMA tiering using lockless ring buffers. Bypasses host OS paging overhead to spare 80GB+ GPU VRAM under peak agent swarm load.",
            metric: "99.3% REUSE",
        },
        {
            formula: "∀ AST ∈ Source : Soundness",
            title: "04. DETERMINISTIC STATIC VERIFICATION",
            body: "Abstract Syntax Tree dataflow analysis across JavaScript, TypeScript, and Python with CodeSentry. Security enforcement must be mathematical, repeatable, and zero-false-positive.",
            metric: "OWASP VERIFIED",
        },
    ];

    const milestones = [
        {
            year: "Jul 2023 – Present",
            role: "Full-Stack Developer & Founder",
            org: "Independent / Pole Studios",
            points: [
                "Built and maintained full-stack web applications and client projects end-to-end, taking products from requirements gathering to production deployment and post-launch maintenance.",
                "Designed and implemented responsive user interfaces, REST and GraphQL APIs, authentication flows, and database schemas across PostgreSQL, MongoDB, and modern serverless platforms.",
                "Engineered developer tooling, automated CI/CD pipelines, and internal utilities to streamline development workflows, reduce deployment friction, and improve software delivery speed.",
                "Collaborated with clients and stakeholders to gather specifications, translate business requirements into technical architectures, and deliver reliable, maintainable software within project timelines."
            ]
        },
        {
            year: "2024 – 2025",
            role: "Systems Engineer & Architect",
            org: "KV-Cache Fabric Core",
            points: [
                "Architected a disaggregated memory engine for multi-agent LLM swarms in Go, Rust, and gRPC.",
                "Delivered 53% lower TTFT on partial cache hits and 99.3% prefix-cache reuse in 16-agent swarm benchmarks.",
                "Eliminated GPU VRAM exhaustion by building host DRAM offload ring buffers over PCIe DMA."
            ]
        },
        {
            year: "2024 – 2025",
            role: "Lead Developer (Team of 4)",
            org: "CodeSentry DevSecOps (kaunteyaarjun/code_inspection_tool)",
            points: [
                "Led an engineering team of 4 to design a zero-dependency DevSecOps code inspection engine in pure Node.js (zero Docker).",
                "Implemented multi-language AST taint parsing (JS, TS, Python) detecting OWASP vulnerabilities and algorithmic memory leaks.",
                "Engineered AutoGrad continuous risk grading with local offline self-learning memory resolving repeat flaws with 0ms latency.",
                "Architected DeployGuard and ModelShield to enforce pre-deployment container gates and AI prompt/deserialization guards with 97 passing test suites."
            ]
        }
    ];

    return (
        <section id="about" className="py-16 px-6 sm:px-10 lg:px-16 bg-[#08080b] relative overflow-hidden text-white border-t-2 border-white/10">
            {/* Background Engineering Grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />

            {/* Top Coordinate Header Rail */}
            <div className="max-w-7xl mx-auto mb-16 border-b-2 border-white/10 pb-4 flex flex-wrap items-center justify-between font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest select-none">
                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
                    <span className="text-white font-bold">CREATIVE DEVELOPER · AI-ASSISTED BACKEND</span>
                    <span className="text-white/20">|</span>
                    <span className="text-emerald-400">SPEC_ID: 0x7F4A</span>
                </div>
                <div className="hidden md:flex items-center gap-6 text-gray-500">
                    <span>LOCATION: INDIA (REMOTE WORLDWIDE)</span>
                    <span>•</span>
                    <span>EXPERIENCE: 3+ YEARS</span>
                    <span>•</span>
                    <span>FOCUS: LOW-LATENCY RUNTIMES</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 space-y-20">
                {/* Section 1: Main Bio & Display Blueprint */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Display Manifesto */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                            <span>About Somya Prasad Sethy</span>
                        </div>

                        <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tight leading-[1.05] uppercase">
                            I create AI-assisted <br />
                            <span className="stroke">backend development</span> <br />
                            & agentic runtimes.
                        </h2>

                        <div className="font-sans text-base sm:text-lg text-gray-300 font-normal leading-relaxed space-y-4 pt-2">
                            <p>
                                Creative developer specializing in <strong className="text-white font-semibold">AI-assisted backend development</strong> and systems architectures. I bridge deep systems research with prompt-driven engineering velocity to build robust, scalable services.
                            </p>
                            <p>
                                Founder of <strong className="text-white font-semibold">Pole Studios</strong>, an independent creative studio operating on zero external capital. Designed streamlined software delivery protocols that cut turnaround time by 15%.
                            </p>
                            <p>
                                Focused on Python systems, Linux networking, Model Context Protocol (MCP) tool integrations, RAG pipelines, and disaggregated memory tiering (<Link href="/kv-cache" className="text-emerald-400 underline underline-offset-4 hover:text-white">KV-Cache Fabric</Link>).
                            </p>
                        </div>

                        {/* Systems Badges */}
                        <div className="pt-4 flex flex-wrap gap-2 font-mono text-[11px]">
                            {["Python", "Linux Systems", "Networking", "AI Architecture", "MCP", "RAG", "Agent Swarms", "Vector Search"].map((tag) => (
                                <span key={tag} className="border border-white/15 bg-white/[0.03] px-3 py-1 font-bold text-gray-300 uppercase tracking-wider">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Mathematical Axioms & Guarantees Card */}
                    <div className="lg:col-span-6 bg-[#0e0e12] border-2 border-white/15 p-6 sm:p-8 shadow-[8px_8px_0_rgba(255,255,255,0.06)] space-y-6">
                        <div className="flex items-center justify-between border-b-2 border-white/10 pb-3 font-mono text-xs">
                            <span className="text-white font-bold uppercase tracking-wider">
                                FIG 02.0 // COMPUTATIONAL PRINCIPLES
                            </span>
                            <span className="text-emerald-400 text-[10px] font-bold bg-emerald-950/60 px-2 py-0.5 border border-emerald-500/20">
                                AUDITED INVARIANTS
                            </span>
                        </div>

                        <div className="space-y-4">
                            {mathematicalAxioms.map((axiom) => (
                                <div key={axiom.title} className="bg-black/60 border border-white/10 p-4 space-y-2 font-mono">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-white font-bold tracking-tight uppercase">
                                            {axiom.title}
                                        </span>
                                        <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 border border-emerald-500/30 font-bold">
                                            {axiom.formula}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-300 font-sans leading-relaxed">
                                        {axiom.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 2: Concrete Timeline & Production Track Record */}
                <div className="pt-12 border-t-2 border-white/10">
                    <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-white/10 pb-4 mb-8 font-mono">
                        <div>
                            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-1">
                                // 02 — CHRONOLOGY & RECORD
                            </span>
                            <h3 className="text-2xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight">
                                Professional <span className="stroke">Milestones.</span>
                            </h3>
                        </div>
                        <div className="text-xs text-gray-400 font-mono">
                            VERIFIABLE PRODUCTION WORK
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {milestones.map((m, idx) => (
                            <div
                                key={m.org}
                                className="border-2 border-white/15 bg-[#0e0e12] p-6 flex flex-col justify-between shadow-[6px_6px_0_rgba(255,255,255,0.04)]"
                            >
                                <div>
                                    <div className="flex items-center justify-between font-mono text-[10px] text-gray-400 border-b border-white/10 pb-2 mb-3">
                                        <span className="text-emerald-400 font-bold">MILESTONE 0{idx + 1}</span>
                                        <span>{m.year}</span>
                                    </div>
                                    <h4 className="text-lg font-sans font-bold text-white uppercase tracking-tight mb-1">
                                        {m.role}
                                    </h4>
                                    <div className="text-xs font-mono text-emerald-300 font-bold mb-4">
                                        {m.org}
                                    </div>
                                    <ul className="space-y-2.5 text-xs text-gray-300 font-sans leading-relaxed">
                                        {m.points.map((pt, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-2">
                                                <span className="text-emerald-400 font-mono mt-0.5">•</span>
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Callout Banner to Case Studies */}
                <div className="border-2 border-white/20 bg-[#121217] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0_rgba(255,255,255,0.08)]">
                    <div className="space-y-1 text-center md:text-left">
                        <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
                            ✦ EXPLORE THE WORK
                        </span>
                        <h4 className="text-2xl sm:text-3xl font-sans font-black text-white uppercase tracking-tight">
                            Inspect Live Benchmarks & Systems Architecture
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400 font-sans">
                            Detailed breakdowns for KV-Cache Fabric, CodeSentry DevSecOps, and Loan Disbursement Engine.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                        <Link
                            href="/work"
                            className="px-6 py-3.5 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-emerald-400 hover:text-black transition-all shadow-md"
                        >
                            View All Projects &rarr;
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-3.5 border-2 border-white/30 text-white font-mono text-xs font-bold uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all"
                        >
                            Initiate Contact
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
