"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeAbout() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-16 bg-background relative overflow-hidden flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-8 leading-tight">
                    Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Future.</span>
                </h2>
                <p className="text-gray-400 font-sans text-lg md:text-xl leading-relaxed mb-12 font-light">
                    I am a Security Researcher and Full Stack Engineer focused on building resilient, scalable systems. I specialize in merging high-performance backend logic with intuitive frontend design.
                </p>
                <Link href="/about" className="inline-flex items-center gap-3 text-xs md:text-sm font-sans uppercase tracking-widest text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all">
                    Read Full Story <span className="text-lg leading-none">&rarr;</span>
                </Link>
            </motion.div>
        </section>
    );
}
