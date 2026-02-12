"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-16 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Terminal-style Bio */}
                    <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-8 bg-black/60 flex items-center px-4 space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <span className="ml-4 font-mono text-xs text-gray-500">~/about/somya.bio</span>
                        </div>

                        <div className="mt-8 font-mono text-sm text-gray-300 space-y-4">
                            <p className="text-blue-400">$ cat bio.txt</p>
                            <p>
                                A multidisciplinary creator at the intersection of <span className="text-white font-bold">cybersecurity</span>,
                                <span className="text-white font-bold"> design</span>, and <span className="text-white font-bold">development</span>.
                            </p>
                            <p>
                                Specializing in Cybersecurity while crafting premium digital experiences
                                that balance aesthetics with impenetrable security.
                            </p>
                            <p>
                                Designing luxury brand identities —
                                I architect systems that are both beautiful and bulletproof.
                            </p>
                            <p className="text-green-400">$ _</p>
                        </div>
                    </div>

                    {/* Stats/Highlights */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white">
                            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Future</span>
                        </h2>

                        <p className="text-gray-400 leading-relaxed">
                            Obsessed with creating experiences that leave a lasting impression.
                            Every pixel, every line of code, every security measure — meticulously crafted.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Projects", value: "15+" },
                                { label: "Years Coding", value: "4+" },
                                { label: "Clients Served", value: "10+" },
                                { label: "Lines of Code", value: "50K+" },
                            ].map((stat) => (
                                <div key={stat.label} className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-blue-500/30 transition-colors">
                                    <div className="text-2xl md:text-3xl font-bold text-blue-500">{stat.value}</div>
                                    <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
