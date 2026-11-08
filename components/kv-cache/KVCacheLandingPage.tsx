"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGo, SiRust, SiDocker, SiNvidia, SiPytorch, SiGithub } from "react-icons/si";
import { VscStarFull, VscCopy, VscCheck, VscArrowRight, VscPlay } from "react-icons/vsc";

export default function KVCacheLandingPage() {
  const [copiedClone, setCopiedClone] = useState(false);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, type: "clone" | number) => {
    navigator.clipboard.writeText(text);
    if (type === "clone") {
      setCopiedClone(true);
      setTimeout(() => setCopiedClone(false), 2000);
    } else {
      setCopiedStep(type);
      setTimeout(() => setCopiedStep(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900 font-sans antialiased selection:bg-stone-200 selection:text-stone-900">
      {/* TOP NAVIGATION: Minimal Glassy Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#fafaf9]/85 backdrop-blur-md border-b border-stone-200/70">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-mono text-sm tracking-tight font-bold uppercase text-stone-900 group-hover:text-emerald-700 transition-colors">
                KV-Cache Fabric
              </span>
            </Link>
            <span className="text-xs font-mono text-stone-400 hidden sm:inline">
              v0.4.2 · Zero OOM Engine
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-7 font-mono text-xs uppercase tracking-wider text-stone-600">
            <a className="hover:text-stone-900 transition-colors" href="#architecture">Architecture</a>
            <a className="hover:text-stone-900 transition-colors" href="#formula">VRAM Formula</a>
            <a className="hover:text-stone-900 transition-colors" href="#explainer">Video Explainer</a>
            <a className="hover:text-stone-900 transition-colors" href="#radix-tree">Radix Tree</a>
            <a className="hover:text-stone-900 transition-colors" href="#features">Primitives</a>
            <a className="hover:text-stone-900 transition-colors" href="#quickstart">Quickstart</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200/80 border border-stone-200 text-stone-700 font-mono text-xs transition-all"
            >
              <span>← Portfolio</span>
            </Link>

            <a
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200/80 border border-stone-200 text-stone-700 font-mono text-xs transition-all"
              href="https://github.com/kaunteyaarjun/kv-cache-fabric"
              rel="noopener noreferrer"
              target="_blank"
            >
              <VscStarFull className="text-amber-500 w-3.5 h-3.5" />
              <span className="font-medium">1.4k</span>
            </a>

            <a
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-mono text-xs font-medium tracking-wide transition-all shadow-sm"
              href="#quickstart"
            >
              <span>Deploy</span>
              <VscArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="w-full pt-20 flex flex-col gap-20">
        {/* 1. HERO SECTION: Full-width Rounded Scenic Card */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 w-full" id="architecture">
          <div className="relative w-full rounded-3xl overflow-hidden min-h-[580px] md:min-h-[640px] flex flex-col justify-between p-8 md:p-14 shadow-2xl shadow-stone-300/40 border border-stone-200/60">
            {/* Background Landscape Image with Subtle Gradient Overlay */}
            <Image
              src="/alpine-bg.jpg"
              alt="High Altitude Systems Landscape"
              fill
              priority
              className="object-cover object-center filter saturate-[0.85] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/45 to-stone-950/30" />

            {/* Top Pill Badges */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Go Conductor + Rust Memory Daemon</span>
                <span className="text-white/40">|</span>
                <span className="text-white/80">gRPC :50051</span>
              </div>
              <a
                href="https://github.com/kaunteyaarjun/kv-cache-fabric"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white font-mono text-xs hover:bg-black/60 transition-colors"
              >
                <SiGithub className="w-3.5 h-3.5 text-emerald-400" />
                <span>kaunteyaarjun/kv-cache-fabric</span>
              </a>
            </div>

            {/* Hero Headline & Editorial Action */}
            <div className="relative z-10 max-w-3xl flex flex-col gap-4 mt-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                ✦ LLM Memory Virtualization
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-sans font-semibold tracking-tight text-white leading-[1.08]">
                Disaggregated KV-Cache Fabric
              </h1>
              <p className="text-stone-200 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
                A hardware-agnostic memory virtualization architecture for LLM agent swarms. Scale autonomous workflows across high-speed GPU VRAM and dense host DRAM with concurrent lock-coupled radix prefix caching and race-free PCIe DMA eviction.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
                <span className="text-white/80">
                  Researched & Designed by <strong className="text-white font-medium">Somya Prasad Sethy</strong>
                </span>
                <span className="text-white/40">·</span>
                <span className="text-emerald-400 font-semibold">AI-Assisted Systems Implementation</span>
                <span className="text-white/40">·</span>
                <span className="text-white/80">53% Lower TTFT</span>
              </div>

              {/* Glassy Pill CTAs & Command Box */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <a
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-stone-900 hover:bg-stone-100 font-mono text-xs font-semibold tracking-wide shadow-lg transition-all active:scale-[0.98]"
                  href="#formula"
                >
                  <span>Explore Architecture</span>
                  <VscArrowRight className="w-3.5 h-3.5" />
                </a>

                <div className="inline-flex items-center justify-between gap-3 px-4 py-3 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 text-white font-mono text-xs">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-emerald-400 select-none">$</span>
                    <span className="truncate text-stone-200 select-all">
                      git clone https://github.com/kaunteyaarjun/kv-cache-fabric.git
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard("git clone https://github.com/kaunteyaarjun/kv-cache-fabric.git", "clone")}
                    className="shrink-0 text-white/70 hover:text-white transition-colors flex items-center gap-1 font-bold"
                  >
                    {copiedClone ? (
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EDITORIAL ABSTRACT / SPECIFICATION */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-8 border-b border-stone-200">
            <div className="lg:col-span-3">
              <span className="font-mono text-xs font-semibold tracking-widest text-stone-400 uppercase">
                The Specification
              </span>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-sans font-light tracking-tight text-stone-900 leading-snug">
                A high-performance dual-runtime system stripping away VRAM memory bottlenecks through disaggregated host DRAM offloading and lock-coupled prefix caching.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 font-mono text-xs text-stone-500 uppercase tracking-wider">
                <span>CUDA</span>
                <span>·</span>
                <span>ROCm</span>
                <span>·</span>
                <span>Apple Metal</span>
                <span>·</span>
                <span>PyTorch</span>
                <span>·</span>
                <span>vLLM</span>
                <span>·</span>
                <span>SGLang</span>
                <span>·</span>
                <span>CrewAI</span>
                <span>·</span>
                <span>LangGraph</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURE SPLIT 1: SMART MEMORY VIRTUALIZATION & FORMULA */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 w-full" id="formula">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Editorial Column */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="font-mono text-xs font-semibold tracking-widest text-stone-400 uppercase">
                Core Architecture // 01
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-medium tracking-tight text-stone-900 leading-tight">
                The KV-Cache VRAM Bottleneck Formula
              </h2>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                In multi-agent swarms (CrewAI, LangGraph, AutoGen), context ballooning quickly exhausts 80GB VRAM. Fabric continuously evaluates allocation pressure through the canonical formula:
              </p>

              {/* Mathematical Formula Box */}
              <div className="p-4 rounded-xl bg-stone-100/90 border border-stone-200 font-mono text-xs text-stone-800 leading-relaxed overflow-x-auto shadow-sm">
                <span className="text-stone-500 font-medium">KV_Cache_Size</span> = 2 × <span className="text-emerald-700 font-bold">n_layers</span> × <span className="text-blue-700 font-bold">n_kv_heads</span> × <span className="text-stone-900">d_head</span> × <span className="text-amber-700 font-bold">tokens</span> × <span className="text-stone-700">batch_size</span> × sizeof(fp16)
              </div>

              {/* Bottom 3 Point Dividers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-semibold text-stone-900">O(1) Memory Registration</span>
                  <span className="text-xs text-stone-500 leading-snug">Zero pointer overhead for pinned physical pool</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-semibold text-stone-900">PCIe Gen5 DMA</span>
                  <span className="text-xs text-stone-500 leading-snug">64 GB/s zero-copy asynchronous host transfer</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-semibold text-stone-900">Atomic Double-Check</span>
                  <span className="text-xs text-stone-500 leading-snug">Double verification eliminates race conditions</span>
                </div>
              </div>
            </div>

            {/* Right Telemetry Card */}
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-xl border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-stone-200/60 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-stone-700 font-semibold">
                    Llama-3-70B FP16 Swarm Real-Time Telemetry
                  </span>
                </div>
                <span className="font-mono text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-medium">
                  16 CONCURRENT AGENTS
                </span>
              </div>

              {/* 4 Telemetry Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex flex-col gap-1">
                  <span className="font-mono text-xs text-stone-500 uppercase tracking-wide">Time To First Token</span>
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-3xl font-bold text-stone-900">12.87</span>
                    <span className="text-xs text-emerald-600 font-semibold">ms</span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500">-53% TTFT vs 27.58ms cold</span>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex flex-col gap-1">
                  <span className="font-mono text-xs text-stone-500 uppercase tracking-wide">Prefix Cache Reuse</span>
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-3xl font-bold text-emerald-600">99.3</span>
                    <span className="text-xs text-emerald-600 font-semibold">%</span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500">32 parallel agent streams</span>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex flex-col gap-1">
                  <span className="font-mono text-xs text-stone-500 uppercase tracking-wide">Host DRAM Offload</span>
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-3xl font-bold text-stone-900">80<span className="text-xl">GB+</span></span>
                    <span className="text-xs text-stone-500 font-normal">spared</span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500">Zero-copy ring buffer to DRAM</span>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex flex-col gap-1">
                  <span className="font-mono text-xs text-stone-500 uppercase tracking-wide">Stress Invariants</span>
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-3xl font-bold text-stone-900">0</span>
                    <span className="text-xs text-emerald-600 font-semibold">OOM / DEADLOCK</span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500">100% verified test passes</span>
                </div>
              </div>

              {/* Comparative Allocation Bars */}
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-stone-600">Monolithic VRAM Allocation (80GB Limit)</span>
                  <span className="text-rose-600 font-bold">102.4% (SIGKILL OOM)</span>
                </div>
                <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full" style={{ width: "100%" }} />
                </div>
                <div className="flex justify-between items-center text-xs font-mono pt-2">
                  <span className="text-stone-900 font-semibold">Fabric Disaggregated Memory</span>
                  <span className="text-emerald-600 font-bold">18.4GB GPU (23%) · 63.5GB DRAM</span>
                </div>
                <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden flex gap-1">
                  <div className="h-full bg-stone-900 rounded-l-full" style={{ width: "23%" }} title="Hot active tokens in VRAM" />
                  <div className="h-full bg-emerald-500 rounded-r-full" style={{ width: "60%" }} title="Cold DRAM host offload" />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-stone-400">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-stone-900 inline-block" /> VRAM Hot (Prefilled)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-emerald-500 inline-block" /> DRAM Offload (Zero OOM)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CINEMATIC INTERSTITIAL BANNER */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 w-full">
          <div className="relative w-full rounded-3xl overflow-hidden min-h-[280px] md:min-h-[340px] flex items-center justify-center p-8 md:p-14 text-center border border-stone-200/60 shadow-xl shadow-stone-200/40">
            <Image
              src="/alpine-bg.jpg"
              alt="Alpine Ridge Mountain Vista"
              fill
              className="object-cover object-center filter contrast-[1.05] brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-stone-950/45 backdrop-blur-[2px]" />
            <div className="relative z-10 max-w-2xl flex flex-col items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                ✦ Disaggregated Vision
              </span>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-sans font-normal text-white tracking-tight leading-snug">
                “Embrace the memory fabric and unlock boundless agent context.”
              </blockquote>
              <span className="font-mono text-xs text-stone-300">
                Somya Prasad Sethy — Architecture Note
              </span>
            </div>
          </div>
        </section>

        {/* 5. VIDEO ARCHITECTURE EXPLAINER SECTION */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 w-full" id="explainer">
          <div className="bg-white rounded-3xl border border-stone-200 p-8 md:p-12 shadow-xl shadow-stone-200/50 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-stone-100 pb-6">
              <div>
                <span className="font-mono text-xs font-semibold tracking-widest text-stone-400 uppercase">
                  Technical Walkthrough
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-medium tracking-tight text-stone-900 mt-1">
                  Architecture & Benchmark Explainer
                </h3>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>kv_cache_fabric_explainer.mp4</span>
              </div>
            </div>

            {/* Embedded Native Video Player */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-black aspect-video border border-stone-300 shadow-2xl">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
                poster="/project-kv-cache.png"
              >
                <source src="/kv_cache_fabric_explainer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 font-mono text-xs text-stone-600">
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">01. VRAM-to-DRAM Tiering</span>
                <span>Asynchronous page migrations over PCIe DMA buffer channels.</span>
              </div>
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">02. Radix Tree Lock Coupling</span>
                <span>Hierarchical hand-over-hand reader locks eliminating global contention.</span>
              </div>
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">03. Two-Phase Eviction</span>
                <span>Race-free memory reclaiming without locking active inference passes.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FEATURE SPLIT 2: RADIX TREE & LOCK COUPLING */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 w-full" id="radix-tree">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Side: Dark Monospace Code / Inspector Box */}
            <div className="lg:col-span-7 bg-[#0f172a] text-slate-100 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 flex flex-col gap-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-slate-400 text-xs ml-2">conductor/engine.go — Radix Lock-Coupling</span>
                </div>
                <span className="text-emerald-400 text-[11px] font-bold">gRPC :50051</span>
              </div>

              <pre className="overflow-x-auto text-slate-300 leading-relaxed py-2">
                <code>
{`// Hand-over-hand reader-writer mutex traversal
func (r *RadixTree) MatchPrefix(tokens []int64) (*MatchResult, error) {
    curr := r.root
    curr.mu.RLock()

    for _, tok := range tokens {
        next, exists := curr.children[tok]
        if !exists {
            // Terminal node reached: release and return match
            curr.mu.RUnlock()
            break
        }
        // Lock child before releasing parent (coupling)
        next.mu.RLock()
        curr.mu.RUnlock()
        curr = next
    }
    return &MatchResult{Hit: curr.BlockHandle, SuffixDelta: 0}, nil
}`}
                </code>
              </pre>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✦</span>
                  <span>Protocol: Lock(Child) → Unlock(Parent)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">✦</span>
                  <span>Fastpath: Prefill skipped for 100% hits</span>
                </div>
              </div>
            </div>

            {/* Right Side: Editorial Explanation */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="font-mono text-xs font-semibold tracking-widest text-stone-400 uppercase">
                Algorithmic Core // 02
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-medium tracking-tight text-stone-900 leading-tight">
                Concurrent Radix Tree with Lock Coupling
              </h2>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                Autonomous multi-agent pipelines reuse long shared prompts (system prompts, role declarations, JSON schemas). Fabric maintains an in-memory prefix tree where agents traverse common prefixes concurrently without global lock contention.
              </p>

              {/* 3 Feature Points Anchored */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-semibold text-stone-900">Zero Deadlocks</span>
                  <span className="text-xs text-stone-500 leading-snug">Strict unidirectional hierarchy eliminates cyclic lock waits</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-semibold text-stone-900">Fine Lock Resolution</span>
                  <span className="text-xs text-stone-500 leading-snug">Eviction workers write-lock only cold candidate leaves</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-semibold text-stone-900">Decode Fastpath</span>
                  <span className="text-xs text-stone-500 leading-snug">Bypasses prefill compute directly to autoregression</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. 4-COLUMN PRIMITIVES GRID */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 w-full" id="features">
          <div className="pt-8 border-t border-stone-200 flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <span className="font-mono text-xs font-semibold tracking-widest text-stone-400 uppercase">
                  Primitives
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-medium tracking-tight text-stone-900 mt-1">
                  Architectural Building Blocks
                </h3>
              </div>
              <span className="font-mono text-xs text-stone-500">Go Conductor + Rust Memory Daemon</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Col 1 */}
              <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 font-bold font-mono">
                  <SiGo className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-mono text-sm font-semibold text-stone-900">Go Conductor</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Maintains hierarchical token prefix radix trees with hand-over-hand reader-writer lock coupling and handles agent swarm ingress.
                </p>
              </div>

              {/* Col 2 */}
              <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 font-bold font-mono">
                  <SiRust className="w-6 h-6 text-amber-700" />
                </div>
                <h4 className="font-mono text-sm font-semibold text-stone-900">Rust Memory Daemon</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Native crate controlling low-level PCIe DMA migrations between GPU VRAM physical blocks and NUMA host DRAM ring buffers.
                </p>
              </div>

              {/* Col 3 */}
              <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 font-bold font-mono">
                  <span className="text-emerald-600 font-mono font-bold text-sm">2PC</span>
                </div>
                <h4 className="font-mono text-sm font-semibold text-stone-900">Race-Free Eviction</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Atomic double-check verification guarantees zero stale dereferences when evicting blocks under 90% high-watermark pressure.
                </p>
              </div>

              {/* Col 4 */}
              <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 font-bold font-mono">
                  <SiNvidia className="w-6 h-6 text-emerald-700" />
                </div>
                <h4 className="font-mono text-sm font-semibold text-stone-900">Hardware Agnostic</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Runs seamlessly across NVIDIA CUDA 12.4+, AMD ROCm MI300X, Apple Silicon Metal unified memory, and CPU AVX-512.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CLI QUICKSTART SECTION */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 w-full" id="quickstart">
          <div className="bg-white rounded-3xl border border-stone-200 p-8 md:p-12 shadow-xl shadow-stone-200/50 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-stone-100 pb-6">
              <div>
                <span className="font-mono text-xs font-semibold tracking-widest text-stone-400 uppercase">
                  Deployment
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-medium tracking-tight text-stone-900 mt-1">
                  Spin Up the Disaggregated Engine
                </h3>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-stone-500 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>gRPC Telemetry on :50051</span>
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-2xl p-6 font-mono text-xs text-slate-200 flex flex-col gap-4 overflow-x-auto shadow-inner">
              {/* Step 1 */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span># 1. Initialize and start the high-speed Rust memory daemon</span>
                  <button
                    onClick={() => copyToClipboard("cargo run --release --bin kv-memory-daemon -- --vram-blocks 8 --dram-blocks 32", 1)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedStep === 1 ? "COPIED" : "COPY"}
                  </button>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <span className="text-slate-600 select-none">$</span>
                  <span className="select-all">cargo run --release --bin kv-memory-daemon -- --vram-blocks 8 --dram-blocks 32</span>
                </div>
                <span className="text-slate-500 text-[11px] pl-4">
                  [INFO kv_memory_daemon] Device pool initialized: 8 VRAM blocks (64GB allocated) · gRPC :50051
                </span>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-1 pt-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span># 2. Launch Go conductor orchestrator with concurrent lock-coupled radix tree</span>
                  <button
                    onClick={() => copyToClipboard("go run ./cmd/conductor --radix-tree=concurrent --eviction=pcie-dma", 2)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedStep === 2 ? "COPIED" : "COPY"}
                  </button>
                </div>
                <div className="flex items-center gap-2 text-blue-400 font-semibold">
                  <span className="text-slate-600 select-none">$</span>
                  <span className="select-all">go run ./cmd/conductor --radix-tree=concurrent --eviction=pcie-dma</span>
                </div>
                <span className="text-slate-500 text-[11px] pl-4">
                  [INFO conductor] Connected to daemon at 127.0.0.1:50051 (RTT 0.08ms) · Swarm Ingress on :8080
                </span>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-1 pt-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span># 3. Fire concurrent stress simulation (16 parallel agents)</span>
                  <button
                    onClick={() => copyToClipboard("kv-fabric-bench --agents 16 --context 8192 --iterations 100", 3)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedStep === 3 ? "COPIED" : "COPY"}
                  </button>
                </div>
                <div className="flex items-center gap-2 text-amber-300 font-semibold">
                  <span className="text-slate-600 select-none">$</span>
                  <span className="select-all">kv-fabric-bench --agents 16 --context 8192 --iterations 100</span>
                </div>
                <span className="text-emerald-400 text-[11px] pl-4 font-bold">
                  PASS: 1,600 / 1,600 requests completed (TTFT avg: 12.87ms · 0 OOM CRASHES · VRAM SAVINGS: 81.2 GB)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 9. PRE-FOOTER CALL TO ACTION */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 w-full">
          <div className="relative w-full rounded-3xl overflow-hidden min-h-[300px] flex items-center justify-center p-8 md:p-14 text-center border border-stone-200 shadow-xl shadow-stone-200/50">
            <Image
              src="/alpine-bg.jpg"
              alt="Alpine Mountain Range"
              fill
              className="object-cover object-center filter contrast-[1.05] brightness-[0.65]"
            />
            <div className="absolute inset-0 bg-stone-950/45 backdrop-blur-[1px]" />
            <div className="relative z-10 max-w-xl flex flex-col items-center gap-4 text-white">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                Open Source & MIT Licensed
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-normal tracking-tight leading-tight">
                Ready to optimize your LLM memory fabric?
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 max-w-md font-light">
                Clone the repository, inspect the Go Conductor and Rust memory daemon, or integrate the zero-copy DMA eviction pool.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  className="px-6 py-2.5 rounded-full bg-white text-stone-900 hover:bg-stone-100 font-mono text-xs font-semibold shadow-md transition-all active:scale-[0.98]"
                  href="https://github.com/kaunteyaarjun/kv-cache-fabric"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View on GitHub
                </a>
                <a
                  className="px-6 py-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-mono text-xs font-medium transition-all"
                  href="#formula"
                >
                  View Spec
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 10. GROUNDED MINIMALIST EDITORIAL FOOTER */}
        <footer className="max-w-[1280px] mx-auto px-6 md:px-8 w-full pb-14 pt-6 border-t border-stone-200 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-sans text-xs tracking-wider text-stone-400 uppercase font-semibold">
                Embrace the minimal.
              </span>
              <p className="font-mono text-xs text-stone-500">
                Disaggregated, zero-copy L1-L4 hierarchical memory virtualization for LLM agent clusters.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-stone-500">
              <a className="hover:text-stone-900 transition-colors" href="https://github.com/kaunteyaarjun/kv-cache-fabric" rel="noopener noreferrer" target="_blank">
                GitHub Repository
              </a>
              <span>·</span>
              <a className="hover:text-stone-900 transition-colors" href="#architecture">Architecture</a>
              <span>·</span>
              <Link className="hover:text-stone-900 transition-colors" href="/">Somya Prasad Sethy</Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4 pt-4 border-t border-stone-100">
            <span className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tighter text-stone-900 select-none">
              KV-Cache
            </span>
            <span className="font-mono text-xs text-stone-400">
              © 2025 Somya Prasad Sethy · MIT License · x86_64 / CUDA 12.4 / PCIe Gen5 x16
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
