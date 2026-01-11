"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
    {
        name: "Alex Rivera",
        role: "Digital Marketing Specialist",
        company: "Google",
        text: "Somya's ability to translate complex user needs into elegant, high-performance interfaces is unmatched. A true visionary in the UX space.",
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
                        Network <span className="text-gold">Handshakes</span>
                    </h2>
                    <div className="h-0.5 w-12 bg-gold mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden backdrop-blur-sm hover:border-gold/30 transition-all duration-300"
                        >
                            {/* Signal Indicator */}
                            <div className="absolute top-4 right-4 flex items-center space-x-2">
                                <span className="text-[10px] font-mono text-gray-500">SIGNAL</span>
                                <div className="h-1 w-8 bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${t.signal}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (index * 0.2) }}
                                        className="h-full bg-green-500"
                                    />
                                </div>
                            </div>

                            <p className="text-gray-300 italic mb-8 leading-relaxed">
                                "{t.text}"
                            </p>

                            <div>
                                <h4 className="font-sans font-bold text-white">{t.name}</h4>
                                <p className="text-xs font-mono text-gold">{t.role} @ {t.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
