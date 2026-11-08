"use client";

import { useState } from "react";
import { VscCopy, VscCheck } from "react-icons/vsc";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function CreativeContact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("somya5400840@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full bg-[#0c0c0e] text-white pt-20 sm:pt-28 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[600px]">
        
        {/* Upper Contact Grid (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-white/15">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-4xl sm:text-6xl font-sans font-black uppercase tracking-tight text-white leading-none">
              Contact
            </h2>
            <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md pt-2">
              Always open to new opportunities, collaborations, and projects that bring ideas and data into high-impact systems.
            </p>
            <div className="pt-2 font-mono text-xs text-neutral-500">
              <span>Availability: Open for remote roles & agentic research worldwide</span>
            </div>
          </div>

          {/* Right Column: "Email me" Input/Copy Line */}
          <div className="lg:col-span-6 space-y-4 lg:pt-4">
            <span className="font-sans text-lg sm:text-xl font-bold text-white block">
              Email me
            </span>
            <div
              onClick={copyEmail}
              className="group cursor-pointer flex items-center justify-between border-b-2 border-white/30 pb-3 hover:border-white transition-colors"
            >
              <span className="font-mono text-base sm:text-xl text-neutral-300 group-hover:text-white transition-colors">
                somya5400840@gmail.com
              </span>
              <div className="flex items-center gap-2">
                {copied ? (
                  <span className="font-mono text-xs text-emerald-400 font-bold flex items-center gap-1">
                    <VscCheck className="w-4 h-4" />
                    COPIED
                  </span>
                ) : (
                  <span className="font-mono text-xl sm:text-2xl text-neutral-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    ↗
                  </span>
                )}
              </div>
            </div>
            <p className="font-mono text-xs text-neutral-500">
              Click to copy or write directly to somya5400840@gmail.com
            </p>
          </div>
        </div>

        {/* Navigation & Social Icons Row */}
        <div className="py-10 flex flex-wrap items-center justify-between gap-6 border-b border-white/10 font-mono text-xs text-neutral-400">
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/kaunteyaarjun"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <SiGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/somyaprasadsethy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <SiLinkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/kaunteyaarjun"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <SiX className="w-4 h-4" />
              <span>Twitter</span>
            </a>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex items-center gap-6">
            <a href="#introduction" className="hover:text-white transition-colors hidden sm:inline">
              Introduction
            </a>
            <a href="#works" className="hover:text-white transition-colors hidden sm:inline">
              Some Works
            </a>
            <a href="#experience" className="hover:text-white transition-colors hidden sm:inline">
              Work Experience
            </a>
            <a href="#tools" className="hover:text-white transition-colors hidden sm:inline">
              Tools & Technologies
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>↑</span>
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* CIRCULAR EDITORIAL CLOSURE: MONUMENTAL NAME TYPOGRAPHY */}
        <div className="pt-10 select-none">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">
            © {new Date().getFullYear()} Somya Prasad Sethy · Creative Developer
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-sans font-black tracking-[-0.04em] leading-[0.88] uppercase text-white/90 hover:text-white transition-colors">
            Somya Prasad Sethy
          </h2>
        </div>

      </div>
    </footer>
  );
}

