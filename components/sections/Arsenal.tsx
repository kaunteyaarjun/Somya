"use client";

import { motion } from "framer-motion";
import {
    SiFigma,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiGreensock,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const SkillItem = ({ name, description, icon: Icon, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        viewport={{ once: true }}
        className="group flex flex-col pt-8 border-t border-white/10"
    >
        <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight">{name}</h3>
            <Icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-500" />
        </div>
        <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed max-w-sm">
            {description}
        </p>
    </motion.div>
);

export default function Arsenal() {
    return (
        <section id="arsenal" className="py-24 md:py-32 px-6 md:px-16 bg-background relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-12 gap-16 md:gap-24 items-start"
                >
                    {/* Left Column: Headline */}
                    <div className="md:col-span-5 md:sticky md:top-32">
                        <h2 className="text-4xl md:text-6xl font-sans font-bold text-white leading-tight mb-8">
                            Technologies <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">& Tools.</span>
                        </h2>
                        <p className="text-gray-400 font-sans uppercase tracking-[0.2em] text-xs leading-relaxed max-w-xs opacity-80">
                            The instruments used to craft high-performance systems and immersive interfaces.
                        </p>
                    </div>

                    {/* Right Column: Skills Grid */}
                    <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-12 gap-y-14 md:gap-y-16 md:-mt-2">
                        <SkillItem
                            name="Next.js"
                            description="The core engine for my web applications. Server-side rendering, API routes, and seamless page transitions."
                            icon={SiNextdotjs}
                            delay={0.1}
                        />
                        <SkillItem
                            name="React"
                            description="Component-driven UI architecture for dynamic and interactive user interfaces."
                            icon={SiReact}
                            delay={0.2}
                        />
                        <SkillItem
                            name="TypeScript"
                            description="Type-safe codebase scaling and robust application architecture."
                            icon={SiTypescript}
                            delay={0.3}
                        />
                        <SkillItem
                            name="Node.js"
                            description="High-performance backend runtimes and resilient API integrations."
                            icon={SiNodedotjs}
                            delay={0.4}
                        />
                        <SkillItem
                            name="GSAP"
                            description="High-performance sequence animations, scroll-triggers, and cinematic motion design."
                            icon={SiGreensock}
                            delay={0.5}
                        />
                        <SkillItem
                            name="Tailwind"
                            description="Utility-first styling system for rapid, consistent UI development."
                            icon={SiTailwindcss}
                            delay={0.6}
                        />
                        <SkillItem
                            name="Figma"
                            description="Wireframing, prototyping, and high-end brand identity design."
                            icon={SiFigma}
                            delay={0.7}
                        />
                        <SkillItem
                            name="VS Code"
                            description="The cockpit."
                            icon={VscVscode}
                            delay={0.8}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

