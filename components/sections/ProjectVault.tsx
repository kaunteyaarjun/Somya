"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";

export default function ProjectVault() {
    return (
        <section id="work" className="py-24 px-6 md:px-16 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Work</span>
                    </h2>
                    <p className="text-gray-400 font-sans text-sm tracking-widest uppercase">Selected projects</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {PROJECTS.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={`/work/${project.slug}`}
                                    className="group block relative transition-all duration-500"
                                >
                                    {/* Image */}
                                    <div className="relative h-64 md:h-80 w-full overflow-hidden mb-8 bg-white/5">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />

                                        {/* Status Badge */}
                                        <div className="absolute top-4 right-4 px-4 py-1.5 bg-white shadow-lg">
                                            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-black">{project.status}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold font-sans text-white mb-4 group-hover:text-gray-300 transition-colors flex items-center justify-between tracking-tight">
                                            {project.title}
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-4 group-hover:translate-x-0">&rarr;</span>
                                        </h3>
                                        <p className="text-gray-400 text-base font-light leading-relaxed mb-6">{project.description}</p>

                                        <div className="flex flex-wrap gap-4">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="text-xs font-sans text-gray-500 uppercase tracking-widest">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

