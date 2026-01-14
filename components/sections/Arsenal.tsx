"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    SiFigma,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiAdobeaftereffects,
    SiBlender,
    SiPython
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const SkillCard = ({ name, level, icon: Icon, className, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={cn(
            "relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-gold/50 transition-colors duration-500",
            className
        )}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-gold transition-colors duration-300 mb-4" />
            <h3 className="text-xl font-sans font-bold text-gray-200 group-hover:text-white transition-colors">{name}</h3>
        </div>

        <div className="relative z-10 w-full bg-white/10 h-1 rounded-full mt-4 overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, delay: delay + 0.2 }}
                className="h-full bg-gold"
            />
        </div>

        <div className="absolute top-4 right-4 text-xs font-mono text-gray-500 group-hover:text-gold/80 transition-colors opacity-0 group-hover:opacity-100">
            {level}% SYNC
        </div>
    </motion.div>
);

export default function Arsenal() {
    return (
        <section id="arsenal" className="py-24 md:py-32 px-6 md:px-20 bg-background relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-sans font-bold mb-4">
                        The <span className="text-gold">Arsenal</span>
                    </h2>
                    <div className="h-1 w-20 bg-gold" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
                    {/* Design */}
                    <SkillCard
                        name="Figma"
                        level={95}
                        icon={SiFigma}
                        className="md:col-span-2 md:row-span-2"
                        delay={0.1}
                    />
                    <SkillCard
                        name="VS Code"
                        level={90}
                        icon={VscVscode}
                        className="md:col-span-1 md:row-span-1"
                        delay={0.2}
                    />
                    <SkillCard
                        name="React / Next.js"
                        level={88}
                        icon={SiReact}
                        className="md:col-span-1 md:row-span-2"
                        delay={0.3}
                    />

                    {/* Dev */}
                    <SkillCard
                        name="TypeScript"
                        level={85}
                        icon={SiTypescript}
                        className="md:col-span-1 md:row-span-1"
                        delay={0.4}
                    />

                    {/* 3D / Creative */}
                    <SkillCard
                        name="Blender"
                        level={75}
                        icon={SiBlender}
                        className="md:col-span-2 md:row-span-1"
                        delay={0.5}
                    />
                    <SkillCard
                        name="After Effects"
                        level={80}
                        icon={SiAdobeaftereffects}
                        className="md:col-span-1 md:row-span-1"
                        delay={0.6}
                    />
                    <SkillCard
                        name="Tailwind"
                        level={92}
                        icon={SiTailwindcss}
                        className="md:col-span-1 md:row-span-1"
                        delay={0.7}
                    />
                </div>
            </div>
        </section>
    );
}
