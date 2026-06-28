"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

interface WordScrollProps {
    prefix?: string;
    words: string[];
    className?: string;
}

const Word = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLLIElement>(null);
    
    // Track when this specific word enters the viewport
    // Expanding the offset so the words fade in smoothly as they approach the center
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 85%", "start 15%"]
    });

    // Fade from 0.15 -> 1 -> 0.15 as it passes through the center
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 1, 0.15]);
    const filter = useTransform(scrollYProgress, [0, 0.5, 1], ["blur(4px)", "blur(0px)", "blur(4px)"]);

    return (
        <motion.li 
            ref={ref} 
            style={{ opacity, filter }} 
            className="text-white pb-6 md:pb-8 transition-all"
        >
            {children}
        </motion.li>
    );
};

export default function WordScroll({ prefix = "I build", words, className }: WordScrollProps) {
    return (
        <div className={cn("relative py-24", className)}>
            <div className="flex text-4xl md:text-7xl font-sans font-bold leading-tight w-full max-w-5xl mx-auto px-6">
                
                {/* Sticky Left Side */}
                <div className="w-1/2 flex justify-end pr-4 md:pr-8">
                    <h2 className="sticky top-[50vh] -translate-y-1/2 h-fit text-white m-0 whitespace-nowrap">
                        {prefix}&nbsp;
                    </h2>
                </div>

                {/* Scrolling Right Side */}
                <div className="w-1/2 flex justify-start">
                    {/* Added pb-[50vh] so the last words can reach the center sticky point before the page ends */}
                    <ul className="m-0 p-0 list-none text-left pb-[50vh]">
                        {words.map((word, index) => (
                            <Word key={index}>{word}</Word>
                        ))}
                    </ul>
                </div>
                
            </div>
        </div>
    );
}
