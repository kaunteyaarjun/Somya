"use client";

import { motion } from "framer-motion";
import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiGo,
    SiRust,
    SiDocker,
    SiPostgresql,
    SiTailwindcss,
    SiPython,
    SiFramer
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const TECHNOLOGIES = [
    { name: "Go", Icon: SiGo, spec: "Concurrency & Low-Latency" },
    { name: "Rust", Icon: SiRust, spec: "Zero-Cost Abstractions" },
    { name: "Next.js", Icon: SiNextdotjs, spec: "React Server Runtimes" },
    { name: "TypeScript", Icon: SiTypescript, spec: "Type-Level Soundness" },
    { name: "PostgreSQL", Icon: SiPostgresql, spec: "ACID Relational Storage" },
    { name: "Docker", Icon: SiDocker, spec: "Container Virtualization" },
    { name: "React", Icon: SiReact, spec: "Concurrent UI Pipelines" },
    { name: "Node.js", Icon: SiNodedotjs, spec: "Event-Loop Asynchrony" },
    { name: "Python", Icon: SiPython, spec: "ML & Data Analytics" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, spec: "Utility Styling Layer" },
    { name: "Framer Motion", Icon: SiFramer, spec: "Spring Physics Engine" },
    { name: "VS Code", Icon: VscVscode, spec: "Systems IDE Environment" },
];

export default function InfiniteMarquee() {
    return (
        <section className="bg-[#0b0b0e] overflow-hidden relative border-y-2 border-white/10 select-none">
            {/* Top Coordinate Ticker Rail */}
            <div className="border-b border-white/10 px-6 py-2 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest bg-[#070709]">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400" />
                    <span className="text-gray-300 font-bold">SYSTEM_STACK_STREAM</span>
                    <span className="text-white/20">|</span>
                    <span>PIPELINE: ACTIVE</span>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <span>BANDWIDTH: 10 Gbps</span>
                    <span>•</span>
                    <span>THROUGHPUT: ZERO-COPY</span>
                    <span>•</span>
                    <span>TOPOLOGY: DISTRIBUTED</span>
                </div>
            </div>

            {/* Gradient Masks */}
            <div className="absolute left-0 top-8 bottom-0 w-16 md:w-36 bg-gradient-to-r from-[#0b0b0e] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-8 bottom-0 w-16 md:w-36 bg-gradient-to-l from-[#0b0b0e] to-transparent z-10 pointer-events-none" />

            <div className="py-10 flex w-max">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 35,
                    }}
                    className="flex space-x-6 md:space-x-8 px-4 items-center"
                >
                    {[...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center gap-3.5 px-5 py-3 border-2 border-white/10 bg-[#121216] hover:border-emerald-400/80 hover:bg-[#181820] transition-all duration-300"
                        >
                            <tech.Icon
                                className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-200"
                                title={tech.name}
                            />
                            <div className="flex flex-col">
                                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white group-hover:text-emerald-300 transition-colors">
                                    {tech.name}
                                </span>
                                <span className="font-mono text-[9px] text-gray-500 group-hover:text-gray-400 transition-colors">
                                    {tech.spec}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Mathematical Invariant Rail */}
            <div className="border-t border-white/10 px-6 py-2 flex items-center justify-between font-mono text-[9px] text-gray-500 uppercase tracking-widest bg-[#070709]">
                <div className="flex items-center gap-4">
                    <span>O(1) ACCESS</span>
                    <span>•</span>
                    <span>53% LOWER TTFT</span>
                    <span>•</span>
                    <span>99.3% CACHE REUSE</span>
                    <span>•</span>
                    <span>LOCKLESS ATOMICS</span>
                </div>
                <div className="hidden sm:inline text-emerald-400/70">
                    ∀ s ∈ SYSTEMS : REPRODUCIBLE_DEPLOYMENTS = TRUE
                </div>
            </div>
        </section>
    );
}
