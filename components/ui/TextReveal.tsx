"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    mode?: "char" | "word" | "masked";
}

export function TextReveal({ text, className, delay = 0, mode = "word" }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const items = mode === "char" ? text.split("") : text.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.04 * i + delay },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    // Masked Reveal (Editorial Style)
    if (mode === "masked") {
        const maskedContainer: Variants = {
            hidden: {},
            visible: {
                transition: { staggerChildren: 0.1, delayChildren: delay }
            }
        };

        const maskedChild: Variants = {
            hidden: { y: "110%" },
            visible: {
                y: "0%",
                transition: {
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1] // Cubic bezier for smooth editorial feel
                }
            }
        };

        return (
            <motion.div
                ref={ref}
                variants={maskedContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={cn("flex flex-wrap gap-x-[0.25em]", className)}
            >
                {items.map((item, index) => (
                    <div key={index} className="overflow-hidden inline-block">
                        <motion.span variants={maskedChild} className="inline-block">
                            {item}
                        </motion.span>
                    </div>
                ))}
            </motion.div>
        );
    }

    return (
        <motion.div
            ref={ref}
            style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={cn(className)}
        >
            {items.map((item, index) => (
                <motion.span variants={child} key={index} className={mode === "word" ? "mr-[0.25em]" : ""}>
                    {item === " " ? "\u00A0" : item}
                </motion.span>
            ))}
        </motion.div>
    );
}
