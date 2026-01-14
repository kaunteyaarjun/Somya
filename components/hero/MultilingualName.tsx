"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const LANGUAGES = [
    { lang: "en", first: "SOMYA", last: "PRASAD" },
    { lang: "hi", first: "सौम्या", last: "प्रसाद" }, // Hindi
    { lang: "ur", first: "کونتیا", last: "ارجن" },   // Urdu (Using Kaunteya Arjun as per handle/preference, or literal Somya Prasad? User said "my name". Let's stick to literal "Somya Prasad" in Urdu: سومیا پرساد. Wait, the handle is @kaunteyaarjun. The user said "my name". Usually "Somya Prasad".
    // Let's use "Somya Prasad" in Urdu: سومیا پرساد
    // Russian: СОМЬЯ ПРАСАД
    { lang: "ru", first: "СОМЬЯ", last: "ПРАСАД" }, // Russian
];

// Urdu correction: سومیا پرساد
const LANG_CONFIG = [
    { first: "SOMYA", last: "PRASAD", font: "font-sans", lang: "en" },
    { first: "ସୋମ୍ୟ", last: "ପ୍ରସାଦ", font: "font-serif", lang: "od" }, // Odia
    { first: "सौम्य", last: "प्रसाद", font: "font-sans", lang: "hi" },
    { first: "سومیا", last: "پرساد", font: "font-sans", lang: "ur" },
    { first: "СОМЬЯ", last: "ПРАСАД", font: "font-sans", lang: "ru" }
];

export default function MultilingualName() {
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState(LANG_CONFIG[0]);
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const runLoop = () => {
            // Calculate duration based on CURRENT index (disregarding glitch time)
            // If we are currently showing English (index 0), stay for longer.
            // If showing others, stay optional time.
            const currentLang = LANG_CONFIG[index].lang;
            const delay = currentLang === "en" ? 10000 : 2000; // 10s for English, 2s for others

            timeoutId = setTimeout(() => {
                triggerGlitch();
            }, delay);
        };

        runLoop();

        return () => clearTimeout(timeoutId);
    }, [index]);

    const triggerGlitch = () => {
        setIsGlitching(true);
        let glitchCount = 0;
        const maxGlitches = 12;

        // Logic: Mostly English?
        // Let's just cycle sequentially, but the delay above handles the "mostly" part by keeping EN visible longer.
        const nextIndex = (index + 1) % LANG_CONFIG.length;

        const scrambleInterval = setInterval(() => {
            // Random characters from different scripts
            // Simplified sci-fi char set to prevent "broken" rendering
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~";

            const r1 = LANG_CONFIG[nextIndex].first.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
            const r2 = LANG_CONFIG[nextIndex].last.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('');

            setCurrentText({ ...LANG_CONFIG[nextIndex], first: r1, last: r2 });
            glitchCount++;

            if (glitchCount >= maxGlitches) {
                clearInterval(scrambleInterval);
                setIsGlitching(false);
                setIndex(nextIndex);
                setCurrentText(LANG_CONFIG[nextIndex]);
            }
        }, 60);
    };

    return (
        <h1 className="flex flex-col text-4xl md:text-6xl lg:text-7xl font-sans font-light leading-none tracking-wide cursor-default select-none">

            {/* First Name */}
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className={cn(
                    "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-100 uppercase",
                    isGlitching && "text-white skew-x-12 blur-[1px]",
                    index === 2 && "font-serif"
                )}
            >
                {currentText.first}
            </motion.span>

            {/* Last Name */}
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.8 }}
                className={cn(
                    "text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-500 to-amber-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all duration-100 uppercase",
                    isGlitching && "text-white !text-white bg-none skew-x-12 blur-[1px]"
                )}
            >
                {currentText.last}
            </motion.span>
        </h1>
    );
}
