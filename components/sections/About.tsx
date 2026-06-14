"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-16 bg-background relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
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
                            Building the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Future.</span>
                        </h2>
                        <p className="text-gray-400 font-sans uppercase tracking-[0.2em] text-xs leading-relaxed max-w-xs opacity-80">
                            Obsessed with creating experiences that leave a lasting impression. Every pixel, every animation, every interaction — meticulously crafted.
                        </p>
                    </div>

                    {/* Right Column: Editorial Text */}
                    <div className="md:col-span-7 space-y-12 md:-mt-2">
                        <div className="font-sans text-base md:text-lg text-gray-400 font-light leading-relaxed space-y-6">
                            <p>
                                I am a <span className="text-white font-normal">Security Researcher and Full Stack Engineer</span> focused on building resilient, scalable systems. I specialize in merging high-performance backend logic with intuitive frontend design.
                            </p>
                            <p>
                                Self-taught <span className="text-white font-normal">Next.js developer</span> and
                                <span className="text-white font-normal"> visual creative</span> with 3+ years of hands-on experience building immersive, high-performance web applications.
                            </p>
                            <p>
                                A filmmaker&apos;s eye for pacing and aesthetics from 2 years of freelance
                                <span className="text-white font-normal"> video editing</span> — ensuring interfaces don&apos;t just work, but feel alive.
                            </p>
                            <p>
                                Founder of <span className="text-white font-normal">Pole Studios</span> —
                                delivering commercial websites, digital products, and high-end brand identities.
                            </p>
                        </div>

                        {/* Clean, box-less stats */}
                        <div className="pt-10 border-t border-white/10 flex flex-wrap gap-12 md:gap-16">
                            {[
                                { label: "Projects Delivered", value: "15+" },
                                { label: "Years Building", value: "3+" },
                                { label: "Happy Clients", value: "10+" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl md:text-4xl font-sans font-bold text-white mb-2 tracking-tight">{stat.value}</div>
                                    <div className="text-[10px] font-sans text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
