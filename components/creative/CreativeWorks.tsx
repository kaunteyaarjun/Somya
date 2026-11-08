"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TopoWaveCanvas from "./TopoWaveCanvas";
import { PROJECTS } from "@/lib/data";

export default function CreativeWorks() {
  const externalLinks = [
    {
      year: "Profiles",
      title: "GitHub",
      description: "Open-source repositories, systems research code, and agentic experiments.",
      url: "https://github.com/kaunteyaarjun",
      isExternal: true,
    },
    {
      year: "Profiles",
      title: "LinkedIn",
      description: "Professional background, engineering notes, and industry network.",
      url: "https://linkedin.com/in/somyaprasadsethy",
      isExternal: true,
    },
    {
      year: "Profiles",
      title: "Twitter / X",
      description: "Real-time thoughts on AI swarms, Linux systems, and agentic computing.",
      url: "https://twitter.com/kaunteyaarjun",
      isExternal: true,
    },
  ];

  return (
    <section id="works" className="w-full bg-[#f4f4f2] text-[#121212] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-b border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading + Topographic Wave Canvas */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-28">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-neutral-900 rounded-full" />
                <span>Selected Architecture</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tight uppercase text-neutral-900 leading-none">
                Some Works
              </h2>
              <p className="font-sans text-neutral-600 text-sm sm:text-base mt-4 leading-relaxed max-w-sm">
                Architectural systems, developer security engines, and agentic workflows built through prior research and AI-assisted backend development.
              </p>
            </div>

            {/* Generative Interactive Topo Wave Canvas (matching the reference design!) */}
            <div className="w-full">
              <TopoWaveCanvas className="w-full h-80 sm:h-96 shadow-sm" />
            </div>
          </div>

          {/* Right Column: Editorial Works Table */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-black/15">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="py-7 sm:py-9 first:pt-0 group transition-colors"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-baseline">
                  {/* Year / Tag */}
                  <div className="sm:col-span-3 font-mono text-xs text-neutral-500 uppercase tracking-wider">
                    <span>{project.year}</span>
                    <span className="block text-[10px] text-neutral-400 mt-0.5">
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Link */}
                  <div className="sm:col-span-4">
                    <Link
                      href={project.slug === "kv-cache-fabric" ? "/kv-cache" : `/work/${project.slug}`}
                      className="group/link inline-flex items-center gap-1.5"
                    >
                      <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-neutral-900 group-hover/link:text-neutral-600 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-neutral-400 group-hover/link:text-neutral-900 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all text-lg font-mono">
                        ↗
                      </span>
                    </Link>
                  </div>

                  {/* Description & AI-Assisted Note */}
                  <div className="sm:col-span-5 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    <p>{project.description}</p>
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] text-neutral-500 bg-black/5 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* INTERACTIVE 3D & WEBGL LAB SHOWCASE (From your extracted archives!) */}
            <div className="py-8 space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2 pt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Creative Experiments // 3D & WebGL Lab</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* 1. Abandon All Hope Card */}
                <div className="bg-[#e9e9e6] border border-black/15 p-5 rounded-xl flex flex-col justify-between group hover:border-black/40 transition-all shadow-sm">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 uppercase">
                      <span>3D Simulation</span>
                      <span className="text-rose-600 font-bold">WebGL Game</span>
                    </div>
                    <h4 className="text-xl font-sans font-bold text-neutral-900 group-hover:text-rose-600 transition-colors">
                      Abandon All Hope
                    </h4>
                    <p className="text-xs font-sans text-neutral-600 leading-relaxed">
                      3D survival game engine on Three.js. Real-time procedural waves, synth sound effects, dynamic shadows, and combat state machine.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="/game"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs font-bold hover:bg-rose-600 transition-colors shadow-sm"
                    >
                      <span>🎮 Play Survival Game</span>
                      <span>↗</span>
                    </Link>
                  </div>
                </div>

                {/* 2. Dreaming of Jupiter Card */}
                <div className="bg-[#e9e9e6] border border-black/15 p-5 rounded-xl flex flex-col justify-between group hover:border-black/40 transition-all shadow-sm">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 uppercase">
                      <span>Three.js Experiment</span>
                      <span className="text-amber-600 font-bold">Orbit Physics</span>
                    </div>
                    <h4 className="text-xl font-sans font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                      Dreaming of Jupiter
                    </h4>
                    <p className="text-xs font-sans text-neutral-600 leading-relaxed">
                      Interactive 3D cosmic orbit simulation. Real-time planetary sphere textures, orbiting moon trajectory, and animated terrain mesh.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="/jupiter"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs font-bold hover:bg-amber-600 transition-colors shadow-sm"
                    >
                      <span>✦ Launch 3D Orbit</span>
                      <span>↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* External Links Rows (GitHub, LinkedIn, Twitter) */}
            {externalLinks.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="py-7 sm:py-9 group transition-colors"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-baseline">
                  <div className="sm:col-span-3 font-mono text-xs text-neutral-500 uppercase tracking-wider">
                    {item.year}
                  </div>
                  <div className="sm:col-span-4">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5"
                    >
                      <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-neutral-900 group-hover/link:text-neutral-600 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-neutral-400 group-hover/link:text-neutral-900 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all text-xl font-mono">
                        ↗
                      </span>
                    </a>
                  </div>
                  <div className="sm:col-span-5 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

