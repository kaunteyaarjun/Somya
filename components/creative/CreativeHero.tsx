"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { VscCopy, VscCheck } from "react-icons/vsc";

export default function CreativeHero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("somya5400840@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="introduction" className="relative w-full bg-[#0c0c0e] text-white pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* MASSIVE HERO DISPLAY TITLE */}
        <div className="border-b border-white/15 pb-6 sm:pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-sans font-black tracking-[-0.04em] leading-[0.88] uppercase text-white select-none"
          >
            Somya Prasad Sethy
          </motion.h1>

          {/* Subheader Meta Information Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-6 sm:pt-8 font-mono text-xs sm:text-[13px] tracking-wide text-neutral-400">
            <div>
              <span className="text-white font-medium">Creative Developer</span> · AI-Assisted Backend Development
            </div>
            <div className="md:text-center text-neutral-400">
              Bhubaneswar, India · Open Worldwide
            </div>
            <div className="md:text-right flex items-center md:justify-end gap-2">
              <button
                onClick={copyEmail}
                className="hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer"
                title="Click to copy email"
              >
                <span className="text-white group-hover:underline">somya5400840@gmail.com</span>
                {copied ? (
                  <VscCheck className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <span className="text-neutral-500 group-hover:text-white transition-colors">↗</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* SPLIT INTRODUCTION BLOCK WITH STARBURST & MANIFESTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-16 sm:pt-24 items-start">
          
          {/* Left Column: Stylized Starburst Glyph */}
          <div className="lg:col-span-4 flex items-center justify-start lg:justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="text-neutral-500 hover:text-white transition-colors select-none"
            >
              {/* Geometric Multi-Point Starburst SVG */}
              <svg
                width="160"
                height="160"
                viewBox="0 0 100 100"
                fill="currentColor"
                className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44"
              >
                <path d="M50 0 L58 35 L93 21 L69 47 L100 50 L69 53 L93 79 L58 65 L50 100 L42 65 L7 79 L31 53 L0 50 L31 47 L7 21 L42 35 Z" />
              </svg>
            </motion.div>
          </div>

          {/* Right Column: Statement & Editorial Copy */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-sans font-bold uppercase tracking-tight text-white leading-[1.12]"
            >
              Working at the intersection of systems, networking & AI architecture, I create AI-assisted backend systems & agentic runtimes built with purpose.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4 text-sm sm:text-base md:text-lg font-sans font-light text-neutral-300 leading-relaxed max-w-3xl"
            >
              <p>
                I'm a creative developer who bridges systems engineering, Linux networking, and advanced agentic architectures. With hands-on proficiency in <strong className="text-white font-medium">Python</strong>, <strong className="text-white font-medium">RAG pipelines</strong>, and <strong className="text-white font-medium">Model Context Protocol (MCP)</strong>, I research and create AI-assisted backend development workflows — translating deep systems research into functional, scalable software.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm font-mono pt-2">
                // Prior systems research + AI-assisted scaffolding + Python systems architecture.
              </p>

              {/* Action Chips */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="#works"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-md"
                >
                  <span>Explore Works</span>
                  <span>↓</span>
                </a>
                <a
                  href="/game"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-white/20 text-white font-mono text-xs font-medium uppercase tracking-wider hover:border-rose-500 hover:text-rose-400 transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span>🎮 Play Survival Game</span>
                </a>
                <a
                  href="/jupiter"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-white/20 text-white font-mono text-xs font-medium uppercase tracking-wider hover:border-amber-500 hover:text-amber-400 transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>🪐 3D Jupiter Orbit</span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

