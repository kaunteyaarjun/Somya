"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const PROJECTS = [
    {
        title: "Kaunteya Studios",
        description: "Premium game studio and creative agency website with immersive animations.",
        image: "/project-kaunteya-real.png",
        tags: ["Next.js", "Framer Motion", "3D"],
        status: "Active",
        url: "https://kaunteyaarjun.pages.dev"
    },
    {
        title: "Polarity Engine",
        description: "Advanced Discord bot with AI integration, moderation, and community features.",
        image: "/polarity-logo.png",
        tags: ["Python", "Discord.py", "MongoDB", "AI"],
        status: "Active",
        url: "#"
    },
    {
        title: "Pole Studios",
        description: "Creative branding and design consultancy for luxury brands.",
        image: "/project-pole.png",
        tags: ["Branding", "UI/UX", "Identity"],
        status: "Active",
        url: "#"
    },
];

export default function ProjectVault() {
    return (
        <section id="work" className="py-24 px-6 md:px-16 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-gold/5 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">
                        Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-300">Vault</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-sm">// Selected works from the archive</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Tilt
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                perspective={1000}
                                scale={1.02}
                                transitionSpeed={400}
                                glareEnable={true}
                                glareMaxOpacity={0.15}
                                glareColor="#D4AF37"
                                glarePosition="all"
                                glareBorderRadius="16px"
                            >
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block relative backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-gold/50 hover-glow transition-all duration-500"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                                        {/* Status Badge */}
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full glow-gold-subtle">
                                            <span className="text-xs font-mono text-green-400">{project.status}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{project.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-gray-500">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </a>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

