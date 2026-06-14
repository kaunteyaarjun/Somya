"use client";

import { motion } from "framer-motion";
import {
    SiFigma,
    SiAdobeaftereffects,
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiGreensock,
    SiNodedotjs,
    SiHtml5,
    SiCss3,
    SiPython,
    SiAdobecreativecloud
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const TECHNOLOGIES = [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "GSAP", Icon: SiGreensock },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "HTML5", Icon: SiHtml5 },
    { name: "CSS3", Icon: SiCss3 },
    { name: "Figma", Icon: SiFigma },
    { name: "VS Code", Icon: VscVscode },
    { name: "Framer Motion", Icon: SiFramer },
    { name: "After Effects", Icon: SiAdobeaftereffects },
    { name: "Adobe Creative Cloud", Icon: SiAdobecreativecloud },
    { name: "Python", Icon: SiPython },
];

export default function InfiniteMarquee() {
    return (
        <section className="py-24 bg-background overflow-hidden relative border-y border-white/5">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex w-max">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40,
                    }}
                    className="flex space-x-12 md:space-x-24 px-6 md:px-12 items-center"
                >
                    {/* Duplicate list 4 times to ensure smooth infinite loop on large screens */}
                    {[...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
                        <div key={index} className="group relative flex items-center justify-center p-4 min-w-[80px] h-[80px] grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 hover:scale-110 cursor-help">
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <tech.Icon
                                className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-lg transition-all duration-300"
                                title={tech.name}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
