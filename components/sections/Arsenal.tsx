"use client";

import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiGo,
    SiRust,
    SiDocker,
    SiPostgresql,
    SiPython
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

interface SkillItemProps {
    name: string;
    description: string;
    icon: React.ElementType;
    delay: number;
}

const SkillItem = ({ name, description, icon: Icon, delay }: SkillItemProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
        viewport={{ once: true }}
        className="group flex flex-col p-6 border-2 border-white/10 bg-white/[0.015] hover:border-white/40 hover:bg-white/[0.04] transition-all duration-300 shadow-[4px_4px_0_rgba(255,255,255,0.05)]"
    >
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-mono font-bold text-white tracking-tight">{name}</h3>
            <Icon className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors duration-300" />
        </div>
        <p className="text-xs sm:text-sm font-sans font-light text-gray-400 leading-relaxed">
            {description}
        </p>
    </motion.div>
);

export default function Arsenal() {
    return (
        <section id="arsenal" className="py-24 md:py-32 px-6 md:px-16 bg-[#0a0a0c] relative z-10 border-t-2 border-white/10">
            {/* Ghost Background Typography */}
            <div className="absolute top-8 left-8 text-[12vw] font-sans font-black text-white/[0.02] pointer-events-none select-none leading-none z-0">
                TOOLKIT
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-12 gap-12 md:gap-16 items-start"
                >
                    {/* Left Column: Headline */}
                    <div className="md:col-span-5 md:sticky md:top-32">
                        <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500 mb-3">
                            // 03 — TECH ARSENAL
                        </div>
                        <h2 className="text-4xl md:text-6xl font-sans font-black text-white leading-tight mb-6 uppercase">
                            Technologies <br/>
                            <span className="stroke">&amp; Systems.</span>
                        </h2>
                        <p className="text-gray-400 font-mono uppercase tracking-[0.2em] text-xs leading-relaxed max-w-xs opacity-80">
                            The languages, runtimes, and distributed primitives used to engineer fast software.
                        </p>
                    </div>

                    {/* Right Column: Skills Grid */}
                    <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:-mt-2">
                        <SkillItem
                            name="Go"
                            description="High-concurrency systems, low-latency microservices, concurrent radix-tree caching, and networking daemon architectures."
                            icon={SiGo}
                            delay={0.05}
                        />
                        <SkillItem
                            name="Rust"
                            description="Memory-safe systems programming, high-throughput FFI extensions, zero-cost abstractions, and CPU-bound workloads."
                            icon={SiRust}
                            delay={0.1}
                        />
                        <SkillItem
                            name="Next.js"
                            description="Full-stack App Router architecture, server components, streaming edge rendering, and SEO/AEO optimization."
                            icon={SiNextdotjs}
                            delay={0.15}
                        />
                        <SkillItem
                            name="TypeScript"
                            description="Strict type-safety across distributed services, shared schema contracts, and robust frontend component hierarchies."
                            icon={SiTypescript}
                            delay={0.2}
                        />
                        <SkillItem
                            name="Node.js"
                            description="Event-driven backend services, RESTful & gRPC APIs, CLI developer tooling, and AST parsing engines."
                            icon={SiNodedotjs}
                            delay={0.25}
                        />
                        <SkillItem
                            name="PostgreSQL"
                            description="Relational database modeling, transactional ACID integrity, indexing strategies, and automated disbursement state machines."
                            icon={SiPostgresql}
                            delay={0.3}
                        />
                        <SkillItem
                            name="Docker"
                            description="Self-hosted containerization, reproducible deployment topologies, and isolated CI/CD pipelines."
                            icon={SiDocker}
                            delay={0.35}
                        />
                        <SkillItem
                            name="Python"
                            description="Machine learning credit scoring pipelines, AST code inspection scripts, and rapid data prototyping."
                            icon={SiPython}
                            delay={0.4}
                        />
                        <SkillItem
                            name="React"
                            description="Dynamic component architectures, reactive state management, and high-performance interactive interfaces."
                            icon={SiReact}
                            delay={0.45}
                        />
                        <SkillItem
                            name="Tailwind CSS"
                            description="Design system tokens, custom typography scales, and high-contrast brutalist UI layouts."
                            icon={SiTailwindcss}
                            delay={0.5}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
