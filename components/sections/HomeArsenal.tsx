"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiNextdotjs, SiReact, SiTypescript, SiNodedotjs } from "react-icons/si";

export default function HomeArsenal() {
    const coreSkills = [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Node.js", icon: SiNodedotjs },
    ];

    return (
        <section className="py-24 md:py-32 px-6 md:px-16 bg-background border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">
                        Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Arsenal.</span>
                    </h2>
                    <p className="text-gray-400 font-sans uppercase tracking-[0.2em] text-xs mb-16 opacity-80">
                        The Primary Stack
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-16">
                        {coreSkills.map((skill) => (
                            <div key={skill.name} className="flex flex-col items-center gap-6 text-gray-500 hover:text-white transition-colors duration-500 group">
                                <skill.icon className="w-12 h-12 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-500" />
                                <span className="text-sm font-sans font-medium tracking-wide">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    <Link href="/skills" className="inline-flex items-center gap-3 text-xs md:text-sm font-sans uppercase tracking-widest text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all">
                        View All Technologies <span className="text-lg leading-none">&rarr;</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
