"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
    progress: number;
}

const LOADING_TEXTS = [
    "INITIALIZING CORE SYSTEMS...",
    "LOADING NEURAL NETWORKS...",
    "DECRYPTING SECURE FILES...",
    "OPTIMIZING GRAPHICS ENGINE...",
    "ESTABLISHING UPLINK...",
    "ACCESS GRANTED"
];

export default function Loader({ progress }: LoaderProps) {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex(prev => (prev + 1) % LOADING_TEXTS.length);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white font-mono overflow-hidden"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            {/* Central Progress */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 opacity-20 select-none">
                    {Math.round(progress)}
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 w-full">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        className="h-px bg-gold/50 w-64 md:w-96 relative overflow-hidden"
                    >
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gold box-shadow-[0_0_10px_#D4AF37]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear", duration: 0.1 }}
                        />
                    </motion.div>

                    <div className="flex justify-between w-64 md:w-96 text-xs text-gold/80 tracking-widest uppercase">
                        <span className="w-24 text-left">{Math.round(progress)}%</span>
                        <span className="w-48 text-right truncate">{LOADING_TEXTS[textIndex]}</span>
                    </div>
                </div>
            </div>

            {/* Corner Data */}
            <div className="absolute bottom-10 left-10 text-[10px] text-gray-600 space-y-1 hidden md:block">
                <div>CPU: OPTIMAL</div>
                <div>RAM: 16GB ALLOCATED</div>
                <div>GPU: RENDERING</div>
            </div>

            <div className="absolute bottom-10 right-10 text-[10px] text-gray-600 space-y-1 text-right hidden md:block">
                <div>VER: 2.0.77</div>
                <div>SECURE CONNECTION</div>
                <div>ID: SP-8842</div>
            </div>
        </motion.div>
    );
}
