"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="relative w-full bg-[#08080a] text-white border-b-4 border-white/10 overflow-hidden py-20 lg:py-28">
      {/* Background Coordinate Grid & Ruler Lines */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top Technical Section Header Rail */}
      <div className="w-full border-y-2 border-white/10 bg-[#0e0e12] px-6 sm:px-12 py-2 flex flex-wrap items-center justify-between font-mono text-[10px] sm:text-xs text-gray-400 select-none uppercase tracking-widest mb-12 lg:mb-16">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 font-bold">SEC_01 //</span>
          <span className="text-white font-bold">SYSTEM_PHILOSOPHY & ARCHITECTURAL INVARIANTS</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[10px] text-gray-500">
          <span>COORD: [37.7749° N, 122.4194° W]</span>
          <span>•</span>
          <span>COMPLEXITY: O(k) BOUNDED</span>
          <span>•</span>
          <span>SPEC_VER: 2026.1</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Mathematical & System Design Blueprint Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#0e0e12] border-2 border-white/15 p-6 sm:p-8 relative shadow-[8px_8px_0_rgba(255,255,255,0.06)]"
          >
            {/* Blueprint Header */}
            <div className="flex items-center justify-between border-b-2 border-white/10 pb-3 mb-5 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
                <span className="font-bold text-white uppercase tracking-wider">
                  FIG 01.0 // COMPUTATIONAL MANIFESTO
                </span>
              </div>
              <span className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 border border-white/10">
                ACTIVE
              </span>
            </div>

            {/* Mathematical Formulas & System Axioms */}
            <div className="space-y-4 font-mono text-xs">
              <div className="bg-black/60 border border-white/10 p-3.5 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                  <span>01. LATENCY BOUNDS</span>
                  <span>∑(t_prefill) → 0</span>
                </div>
                <p className="text-[11px] text-gray-300 font-sans leading-relaxed">
                  TTFT cut by <span className="text-white font-mono font-bold">53%</span> via prefix radix caching. Compute should never be re-evaluated for known attention states.
                </p>
              </div>

              <div className="bg-black/60 border border-white/10 p-3.5 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                  <span>02. CONCURRENCY INVARIANT</span>
                  <span>P(deadlock) = 0</span>
                </div>
                <p className="text-[11px] text-gray-300 font-sans leading-relaxed">
                  Lockless atomics and reference-counted buffer pools. Validated across <span className="text-white font-mono font-bold">16 concurrent agents</span> with 0 OOMs.
                </p>
              </div>

              <div className="bg-black/60 border border-white/10 p-3.5 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                  <span>03. VERIFIABLE STATE</span>
                  <span>∀ tx : Balance = 0 Drift</span>
                </div>
                <p className="text-[11px] text-gray-300 font-sans leading-relaxed">
                  Strict 2-phase commit ledgers and deterministic AST security analysis. Software must remain mathematically auditable under stress.
                </p>
              </div>
            </div>

            {/* Mini Dataflow ASCII / Schematic Graphic */}
            <div className="mt-5 pt-4 border-t border-white/10 font-mono text-[10px] text-gray-400 bg-black/40 p-3 flex flex-col gap-1.5">
              <div className="text-gray-500 uppercase tracking-widest text-[9px]">
                DATA TRANSFORMATION TOPOLOGY:
              </div>
              <div className="text-white/80 font-bold flex items-center justify-between">
                <span>[STREAM]</span>
                <span className="text-emerald-400 font-normal">──(O(k) Radix)──&gt;</span>
                <span>[SHM FABRIC]</span>
                <span className="text-emerald-400 font-normal">──(Zero-Copy)──&gt;</span>
                <span>[OUTPUT]</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Vision, Concrete Bio & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              <span className="w-2 h-2 bg-emerald-400" />
              <span>// ABOUT & PHILOSOPHY</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight leading-[1.05] text-white uppercase">
              I build backend systems, developer tooling <br />
              <span className="stroke">and fast web products.</span>
            </h2>

            {/* Tightened Concrete Bio */}
            <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              Self-taught, AI-assisted full-stack and backend developer with 3+ years of experience building production-grade web applications and developer tooling. Founder of Pole Studios, a branding and web development studio. Open to remote roles worldwide.
            </p>

            {/* Engineering Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
              <div className="border border-white/15 bg-white/[0.02] p-3">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">PARADIGM</div>
                <div className="text-sm font-bold text-white mt-1">SYSTEMS-FIRST</div>
              </div>
              <div className="border border-white/15 bg-white/[0.02] p-3">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">FOCUS</div>
                <div className="text-sm font-bold text-emerald-400 mt-1">LOW-LATENCY</div>
              </div>
              <div className="border border-white/15 bg-white/[0.02] p-3">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">ENTERPRISE</div>
                <div className="text-sm font-bold text-white mt-1">POLE STUDIOS</div>
              </div>
              <div className="border border-white/15 bg-white/[0.02] p-3">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">AVAILABILITY</div>
                <div className="text-sm font-bold text-emerald-400 mt-1">WORLDWIDE</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-[0.2em] bg-white text-black border-2 border-white px-8 py-4 hover:bg-transparent hover:text-white transition-all shadow-[4px_4px_0_rgba(255,255,255,0.15)]"
              >
                Read Full Story <span>&rarr;</span>
              </Link>
              <Link
                href="/work/kv-cache-fabric"
                className="inline-flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white border-2 border-white/20 bg-white/5 px-8 py-4 hover:border-white hover:bg-white/10 transition-all"
              >
                Inspect KV-Cache Case Study <span>✦</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Technical Ruler Divider */}
      <div className="w-full border-t-2 border-white/10 mt-16 pt-3 px-6 sm:px-12 flex items-center justify-between font-mono text-[9px] text-gray-500 uppercase tracking-widest select-none">
        <div className="flex items-center gap-4">
          <span>| 0000</span>
          <span>| 0128</span>
          <span>| 0256</span>
          <span>| 0512</span>
          <span>| 1024</span>
          <span>| 2048</span>
          <span>| 4096</span>
        </div>
        <div className="hidden sm:inline">
          [SYSTEM STATE: NOMINAL • ALL NODES PASSING HEALTH CHECK]
        </div>
      </div>
    </section>
  );
}
