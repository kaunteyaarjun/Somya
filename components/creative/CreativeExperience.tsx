"use client";

import { motion } from "framer-motion";
import TerrainMesh from "./TerrainMesh";

export default function CreativeExperience() {
  return (
    <section id="experience" className="w-full bg-[#f4f4f2] text-[#121212] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-b border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Topographic Mountain Mesh & Studio Role */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <TerrainMesh className="w-full h-48 sm:h-56 shadow-sm" />
            
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-neutral-500 uppercase tracking-wider border-b border-black/10 pb-2">
                <span className="font-bold text-neutral-900">Pole Studios & Independent</span>
                <span>Jul 2023 – Present</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-neutral-900">
                Creative Developer & AI Systems Researcher
              </h3>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                Remote Worldwide · Founder (Pole Studios Oct 2025)
              </p>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                Pioneering AI-assisted backend development, Linux systems automation, and Model Context Protocol (MCP) tool integrations. Translating architectural research into functioning agentic prototypes and production software on zero external capital.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Python", "AI-Assisted Backend", "Linux", "Networking", "MCP"].map((t) => (
                  <span key={t} className="font-mono text-[10px] text-neutral-700 bg-black/5 px-2.5 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Work Experience Header & Systems Research Experience */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-10 lg:pl-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-neutral-900 rounded-full" />
                <span>Track Record</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tight uppercase text-neutral-900 leading-none">
                Work Experience
              </h2>
              <p className="font-sans text-neutral-600 text-sm sm:text-base mt-4 leading-relaxed max-w-md">
                Focused research and AI-assisted engineering execution across distributed systems, prompt caching, and autonomous agents.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-black/10">
              <div className="flex items-center justify-between font-mono text-xs text-neutral-500 uppercase tracking-wider border-b border-black/10 pb-2">
                <span className="font-bold text-neutral-900">Autonomous Agent & Systems Research</span>
                <span>2024 – Present</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-neutral-900">
                Systems & Agentic AI Architect
              </h3>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                Open Systems Research · Bhubaneswar, India
              </p>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                Conducted in-depth exploration of LLM memory tiering (VRAM-to-DRAM), concurrent radix prefix caching, and race-free eviction loops for multi-agent inference swarms. Conceptualized KV-Cache Fabric achieving 53% lower TTFT and 99.3% prefix reuse.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Agent Swarms", "RAG Pipelines", "Systems Research", "Inference Optimization"].map((t) => (
                  <span key={t} className="font-mono text-[10px] text-neutral-700 bg-black/5 px-2.5 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

