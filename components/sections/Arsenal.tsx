"use client";

import { motion } from "framer-motion";
import {
    SiPython,
    SiLinux,
    SiDocker,
    SiFastapi,
} from "react-icons/si";
import { 
    VscTerminal, 
    VscServerProcess, 
    VscHubot, 
    VscCircuitBoard, 
    VscDatabase, 
    VscSearch 
} from "react-icons/vsc";

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
                SYSTEMS
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
                        <div className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-400 mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                            <span>// 03 — TECH ARSENAL</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-sans font-black text-white leading-tight mb-6 uppercase">
                            Systems <br/>
                            <span className="stroke">&amp; Architectures.</span>
                        </h2>
                        <p className="text-gray-400 font-mono uppercase tracking-[0.15em] text-xs leading-relaxed max-w-xs opacity-80">
                            Python, Linux networking, Model Context Protocol (MCP), and AI-assisted backend architectures.
                        </p>
                    </div>

                    {/* Right Column: Skills Grid */}
                    <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:-mt-2">
                        <SkillItem
                            name="Python"
                            description="Core programming language. Machine learning models, AST analysis, agentic workflows, API services, and system automation."
                            icon={SiPython}
                            delay={0.05}
                        />
                        <SkillItem
                            name="Linux Systems"
                            description="Process management, memory paging, POSIX primitives, systemctl services, bash scripting, and container environments."
                            icon={SiLinux}
                            delay={0.1}
                        />
                        <SkillItem
                            name="Networking & Sockets"
                            description="TCP/IP sockets, gRPC protobuf streams, HTTP/2 multiplexing, reverse proxies, and low-latency client/server topologies."
                            icon={VscServerProcess}
                            delay={0.15}
                        />
                        <SkillItem
                            name="AI-Assisted Backend"
                            description="Orchestrating AI code-generation agents to rapidly scaffold, test, and deploy resilient production backend services."
                            icon={VscTerminal}
                            delay={0.2}
                        />
                        <SkillItem
                            name="Model Context Protocol (MCP)"
                            description="Authoring and integrating MCP servers and client tool runners to securely bridge LLMs with host system APIs and databases."
                            icon={VscCircuitBoard}
                            delay={0.25}
                        />
                        <SkillItem
                            name="RAG Pipelines"
                            description="Hybrid dense + sparse semantic search, reciprocal rank fusion (RRF), cross-encoder reranking, and context chunking."
                            icon={VscSearch}
                            delay={0.3}
                        />
                        <SkillItem
                            name="Advanced Agentic Systems"
                            description="Multi-agent swarm coordination, autonomous planner-critic loops, state checkpointing, and dynamic tool calling."
                            icon={VscHubot}
                            delay={0.35}
                        />
                        <SkillItem
                            name="Vector Databases"
                            description="Embeddings storage, similarity indexing (HNSW), semantic caching, and real-time knowledge retrieval."
                            icon={VscDatabase}
                            delay={0.4}
                        />
                        <SkillItem
                            name="FastAPI"
                            description="High-performance asynchronous REST microservices, OpenAPI schemas, and transactional endpoints."
                            icon={SiFastapi}
                            delay={0.45}
                        />
                        <SkillItem
                            name="Docker"
                            description="Self-hosted containerization, reproducible execution sandboxes, and isolated microservice environments."
                            icon={SiDocker}
                            delay={0.5}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
