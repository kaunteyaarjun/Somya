"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface HyperTextProps {
    text: string;
    duration?: number;
    framerProps?: any;
    className?: string;
    animateOnLoad?: boolean;
}

export default function HyperText({
    text,
    duration = 800,
    framerProps = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 3 },
    },
    className,
    animateOnLoad = true,
}: HyperTextProps) {
    const [displayText, setDisplayText] = useState(text.split(""));
    const [trigger, setTrigger] = useState(false);
    const interations = useRef(0);
    const isFirstRender = useRef(true);

    const triggerAnimation = () => {
        interations.current = 0;
        setTrigger(true);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!animateOnLoad && isFirstRender.current) {
                clearInterval(interval);
                isFirstRender.current = false;
                return;
            }
            if (!trigger) return;

            if (interations.current < text.length) {
                setDisplayText((t) =>
                    t.map((l, i) =>
                        l === " "
                            ? l
                            : i <= interations.current
                                ? text[i]
                                : ALPHABETS[Math.floor(Math.random() * 26)]
                    )
                );
                interations.current += 0.1;
            } else {
                setTrigger(false);
                clearInterval(interval);
            }
        }, duration / (text.length * 10));
        // Clean up interval on unmount
        return () => clearInterval(interval);
    }, [text, duration, trigger, animateOnLoad]);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            triggerAnimation();
        }
    }, [isInView]);

    return (
        <div
            ref={ref}
            className="overflow-hidden py-2 flex cursor-default scale-100"
            onMouseEnter={triggerAnimation}
        >
            <div className="flex">
                {displayText.map((letter, i) => (
                    <motion.h1
                        key={i}
                        className={cn("font-mono", letter === " " ? "w-3" : "", className)}
                        {...framerProps}
                    >
                        {letter.toUpperCase()}
                    </motion.h1>
                ))}
            </div>
        </div>
    );
}
