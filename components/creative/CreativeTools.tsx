"use client";

import { motion } from "framer-motion";
import PerspectiveGrid from "./PerspectiveGrid";

const SKILLS = [
  "Python",
  "Linux",
  "Networking",
  "Systems Architecture",
  "AI-Assisted Backend Development",
  "RAG Pipelines",
  "MCP (Model Context Protocol)",
  "Advanced Agentic Systems",
  "GenAI Architecture",
  "Prompt Engineering",
  "Vector Search",
  "Socket Programming",
  "Bash / Shell",
  "Distributed Memory Tiering",
];

export default function CreativeTools() {
  return (
    <section id="tools" className="w-full bg-[#f4f4f2] text-[#121212] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-b border-black/10 overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Wireframe Perspective Grid Floor (from reference image) */}
        <div className="w-full max-w-4xl mb-6">
          <PerspectiveGrid className="w-full h-36 sm:h-48" />
        </div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-10"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-neutral-900 rounded-full" />
            <span>Core Ecosystem</span>
            <span className="w-2 h-2 bg-neutral-900 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black uppercase tracking-tight text-neutral-900">
            Tools & Technologies
          </h2>
          <p className="font-sans text-neutral-600 text-xs sm:text-sm font-light max-w-xl mx-auto">
            Deep focus on systems research, Linux networking, and agentic AI architectures — leveraging Python and AI-assisted development.
          </p>
        </motion.div>

        {/* Starburst Separated Tech Tags (matching reference image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 max-w-4xl font-sans text-base sm:text-xl md:text-2xl font-bold tracking-tight text-neutral-900"
        >
          {SKILLS.map((skill, index) => (
            <div key={skill} className="inline-flex items-center gap-4 group">
              <span className="hover:text-neutral-500 transition-colors cursor-default">
                {skill}
              </span>
              {index < SKILLS.length - 1 && (
                <span className="text-neutral-400 select-none text-sm sm:text-base">
                  ✱
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Systems Invariant Note */}
        <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/15 bg-black/5 font-mono text-xs text-neutral-700">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>Single Language Mastery: Python · Multi-Agent Orchestration · AI-Assisted Runtimes</span>
        </div>

      </div>
    </section>
  );
}

