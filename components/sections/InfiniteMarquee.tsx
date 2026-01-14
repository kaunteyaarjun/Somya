"use client";

import { motion } from "framer-motion";
import {
    SiFigma,
    SiAdobeaftereffects,
    SiBlender,
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiThreedotjs,
    SiGodotengine,
    SiKalilinux,
    SiCinema4D,
    SiAdobecreativecloud,
    SiUnrealengine,
    SiAutodeskmaya, // Verified verified import
    SiPython,
    SiRust,
    SiDocker,
    SiWireshark
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const TECHNOLOGIES = [
    { name: "VS Code", Icon: VscVscode },
    { name: "Figma", Icon: SiFigma },
    { name: "After Effects", Icon: SiAdobeaftereffects },
    { name: "Blender", Icon: SiBlender },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "Framer Motion", Icon: SiFramer },
    { name: "Three.js", Icon: SiThreedotjs },
    { name: "Godot Engine", Icon: SiGodotengine },
    { name: "Kali Linux", Icon: SiKalilinux },
    { name: "Cinema 4D", Icon: SiCinema4D },
    { name: "Adobe Creative Cloud", Icon: SiAdobecreativecloud },
    { name: "Unreal Engine", Icon: SiUnrealengine },
    { name: "Maya", Icon: SiAutodeskmaya },
    { name: "Python", Icon: SiPython },
    { name: "Rust", Icon: SiRust },
    { name: "Docker", Icon: SiDocker },
    { name: "Wireshark", Icon: SiWireshark },
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
                            <div className="absolute inset-0 bg-gold/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
