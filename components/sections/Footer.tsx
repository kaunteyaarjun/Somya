"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id="contact" className="py-12 px-6 border-t border-white/5 bg-black text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 blur-3xl opacity-10 pointer-events-none" />

            <div className="relative z-10 space-y-8">
                <h2 className="text-2xl font-sans font-bold tracking-widest text-white opacity-90">
                    SOMYA PRASAD SETHY
                </h2>

                <div className="flex justify-center space-x-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-sans text-gray-500">
                        <div>© {new Date().getFullYear()} Somya Prasad Sethy. All rights reserved.</div>
                        <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full" />
                        <a href="mailto:teams@polestudios.in" className="hover:text-white transition-colors">teams@polestudios.in</a>
                    </div>
                </div>


            </div>
        </footer>
    );
}
