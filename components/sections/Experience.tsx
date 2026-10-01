"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="py-24 md:py-32 px-6 md:px-16 bg-[#0a0a0c] relative overflow-hidden border-t-2 border-white/10">
            {/* Ghost Background Typography */}
            <div className="absolute top-6 left-6 text-[12vw] font-sans font-black text-white/[0.02] pointer-events-none select-none leading-none z-0">
                HISTORY
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500 mb-3">
                        // 04 — CAREER TRAJECTORY
                    </div>
                    <h2 className="text-3xl md:text-5xl font-sans font-black text-white mb-4 uppercase">
                        Experience <span className="stroke">&amp; Timeline.</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.2em] opacity-80">
                        Production Engineering • Bootstrapped Studio • Client Workflows
                    </p>
                </div>

                <div className="space-y-8">
                    {EXPERIENCES.map((exp) => (
                        <motion.div
                            key={exp.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="border-2 border-white/15 bg-[#0f0f13] p-8 md:p-10 shadow-[8px_8px_0_rgba(255,255,255,0.08)] hover:border-white/30 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
                                <div>
                                    <div className="inline-block px-2.5 py-1 bg-white text-black font-mono text-[10px] font-bold uppercase tracking-widest mb-3">
                                        {exp.period}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-sans font-black text-white tracking-tight">
                                        {exp.role}
                                    </h3>
                                    <div className="text-sm font-mono text-emerald-400 mt-1 tracking-wide">
                                        {exp.company} <span className="text-gray-600 mx-2">•</span> <span className="text-gray-400">{exp.location}</span>
                                    </div>
                                </div>

                                <Link
                                    href={`/experience/${exp.slug}`}
                                    className="self-start md:self-auto font-mono text-xs font-bold uppercase tracking-widest text-white border border-white/20 px-4 py-2.5 hover:bg-white hover:text-black transition-all"
                                >
                                    [ View Case Study &rarr; ]
                                </Link>
                            </div>

                            {/* Responsibilities / Key Deliverables */}
                            <div className="space-y-3 pt-2">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 block mb-2">
                                    // Key Accomplishments & Deliverables:
                                </span>
                                <ul className="space-y-3 font-sans text-sm md:text-base text-gray-300 font-light leading-relaxed">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="font-mono text-emerald-400 mt-0.5 select-none">›</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-white/5">
                                {exp.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-white/15 bg-white/[0.02] text-gray-400"
                                    >
                                        #{tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
