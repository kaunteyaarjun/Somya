"use client";

import { motion } from "framer-motion";

interface LoaderProps {
    progress: number;
}

export default function Loader({ progress }: LoaderProps) {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white font-sans overflow-hidden"
        >
            <div className="flex flex-col items-center justify-center space-y-12">
                <div className="overflow-hidden">
                    <motion.h1 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        className="text-4xl md:text-6xl font-sans font-bold tracking-[0.2em] uppercase text-white"
                    >
                        Somya Prasad
                    </motion.h1>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-48 md:w-80 h-[1px] bg-white/10 relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear", duration: 0.1 }}
                        />
                    </div>
                    <div className="flex justify-between w-48 md:w-80 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        <span>Loading Assets</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
