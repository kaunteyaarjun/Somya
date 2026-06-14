"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
    {
        name: "Alex Rivera",
        role: "Startup Founder",
        company: "Client",
        text: "Somya's ability to translate complex business goals into polished, production-grade products is unmatched. A true visionary in the web development space.",
        signal: 98
    },
    {
        name: "Swamit Kumar Sahoo",
        role: "Owner",
        company: "Blast Cafe, Cuttack",
        text: "Working with Somya was a game-changer for our brand identity. The attention to detail and futuristic aesthetic gave us the edge we needed.",
        signal: 95
    },
    {
        name: "Anshuman Samal",
        role: "Lead Developer",
        company: "Pole Studios",
        text: "Not just a designer, but a technical partner who understands the constraints and possibilities of modern web development.",
        signal: 100
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6 md:px-20 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-sans font-bold mb-4">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Endorsements</span>
                    </h2>
                    <div className="h-[1px] w-12 bg-gradient-to-r from-white/40 to-transparent mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl relative overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Elegant Quote Mark */}
                            <div className="absolute top-6 right-8 text-6xl font-serif text-white/5 select-none pointer-events-none">
                                "
                            </div>

                            <p className="text-gray-400 font-light italic mb-10 leading-relaxed relative z-10 text-sm md:text-base">
                                "{t.text}"
                            </p>

                            <div className="relative z-10 mt-auto">
                                <h4 className="font-sans font-medium text-gray-200">{t.name}</h4>
                                <p className="text-xs font-sans text-gray-500 mt-1 uppercase tracking-wider">{t.role} @ {t.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
