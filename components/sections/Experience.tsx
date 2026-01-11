"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";

const EXPERIENCES = [
    {
        id: 1,
        role: "Staff UX Designer",
        company: "Google",
        location: "Bengaluru, Karnataka, India",
        period: "Nov 2024 - Present (Current)",
        description: "Collaborating on innovative projects requiring UX design, storytelling, and branding expertise. bringing a strategic approach to user-centric designs.",
        highlight: true // Special styling for current/major role
    },
    {
        id: 2,
        role: "Founder",
        company: "Pole Studios",
        location: "Startup",
        period: "Oct 2025 - Present",
        description: "Leading creative direction and branding strategies for startups. Orchestrating user-centric design solutions and defining brand identities.",
        highlight: false
    }
];

export default function Experience() {
    return (
        <section className="py-32 px-6 md:px-20 relative overflow-hidden">
            {/* Section Header */}
            <div className="mb-20 max-w-4xl mx-auto text-center">
                <h2 className="text-sm font-mono text-gold uppercase tracking-widest mb-4">
                    <TextReveal text="// Career Trajectory" mode="char" />
                </h2>
                <h3 className="text-4xl md:text-6xl font-sans font-bold text-white">
                    Building the <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-500 to-amber-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">Future</span> of Digital Interaction.
                </h3>
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-5xl mx-auto">
                {/* Central Glowing Spine */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0 md:-translate-x-1/2 hidden md:block" />

                {/* Mobile Spine */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0 md:hidden" />

                <div className="flex flex-col gap-16 md:gap-24 relative z-10">
                    {EXPERIENCES.map((exp, index) => (
                        <div key={exp.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className="w-full md:w-1/2 md:px-12 pl-12 md:pl-0"
                            >
                                <div className={`relative p-8 rounded-2xl border ${exp.highlight
                                    ? "border-gold/30 bg-gold/5" // Highlight styling
                                    : "border-white/10 bg-white/5"
                                    } backdrop-blur-sm hover:border-gold/50 transition-all duration-500 group overflow-hidden`}
                                >
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />

                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl md:text-2xl font-sans font-bold text-white group-hover:text-gold transition-colors">
                                            {exp.company}
                                        </h4>
                                        <span className={`font-mono text-[10px] uppercase px-2 py-1 rounded border ${exp.highlight ? "text-gold border-gold/30" : "text-gray-500 border-white/10"}`}>
                                            {exp.period}
                                        </span>
                                    </div>

                                    <h5 className="text-lg font-mono text-gray-300 mb-2">{exp.role}</h5>
                                    <p className="text-xs text-gray-500 mb-4 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-gold rounded-full" /> {exp.location}
                                    </p>

                                    <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {exp.description}
                                    </p>

                                    {/* Tech Aesthetics */}
                                    <div className="absolute bottom-2 right-2 text-[8px] font-mono text-white/10 uppercase">
                                        ID_{exp.id.toString().padStart(3, '0')}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Center Connector */}
                            <div className="absolute md:relative left-[23px] md:left-auto md:w-0 flex justify-center items-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="w-3 h-3 bg-black border-2 border-gold rounded-full relative z-20 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                                >
                                    <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-20" />
                                </motion.div>
                            </div>

                            {/* Empty Side for Layout Balance */}
                            <div className="w-full md:w-1/2 hidden md:block" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
