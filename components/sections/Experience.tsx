"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import Link from "next/link";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
    return (
        <section className="py-32 px-6 md:px-20 relative overflow-hidden">
            {/* Section Header */}
            <div className="mb-20 max-w-4xl mx-auto text-center">
                <h2 className="text-sm font-sans text-gray-400 uppercase tracking-[0.3em] mb-4">
                    <TextReveal text="Career Trajectory" />
                </h2>
                <h3 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">
                    Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Timeline</span>
                </h3>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Center Timeline Spine */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />

                <div className="space-y-12 md:space-y-24">
                    {EXPERIENCES.map((exp, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div key={exp.slug} className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                {/* Content */}
                                <div className="w-full md:w-[45%]">
                                    <Link href={`/experience/${exp.slug}`} className="block group">
                                        <motion.div
                                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="relative py-8 md:px-8 transition-all duration-500 group-hover:-translate-y-1"
                                        >
                                            <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-6 gap-2">
                                                <div>
                                                    <h4 className="text-2xl md:text-3xl font-sans font-bold text-white group-hover:text-gray-300 transition-colors tracking-tight">
                                                        {exp.role}
                                                    </h4>
                                                    <div className="text-base text-gray-400 font-sans mt-2 tracking-wide">
                                                        <span className="text-gray-200">{exp.company}</span> <span className="mx-2 opacity-30">•</span> {exp.location}
                                                    </div>
                                                </div>
                                                <span className="text-xs font-sans text-gray-500 uppercase tracking-widest whitespace-nowrap lg:mt-0 mt-2">
                                                    {exp.period}
                                                </span>
                                            </div>

                                            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-8 max-w-md">
                                                {exp.description}
                                            </p>

                                            <div className="flex items-center text-xs font-sans text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                                                <span>View Case Study</span>
                                                <span className="ml-2 transform group-hover:translate-x-2 transition-transform">&rarr;</span>
                                            </div>
                                        </motion.div>
                                    </Link>
                                </div>

                                {/* Center Connector */}
                                <div className="absolute md:relative left-[23.5px] md:left-auto md:w-0 flex justify-center items-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="w-4 h-4 rounded-full border-2 bg-black border-white/50 z-10"
                                    />
                                </div>

                                {/* Empty space for alternating layout */}
                                <div className="hidden md:block md:w-[45%]" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
