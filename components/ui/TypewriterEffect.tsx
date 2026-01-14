"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterEffectProps {
    words: string[];
    className?: string;
    cursorClassName?: string;
}

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: TypewriterEffectProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];

        const typeSpeed = isDeleting ? 50 : 100; // Deleting is faster
        const pauseTime = 2000; // Pause at end of word

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing
                setCurrentText(word.substring(0, currentText.length + 1));

                // Finished typing word
                if (currentText.length === word.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                    return;
                }
            } else {
                // Deleting
                setCurrentText(word.substring(0, currentText.length - 1));

                // Finished deleting
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                    return;
                }
            }
        };

        const timer = setTimeout(handleTyping, typeSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <div className={className}>
            <span>{currentText}</span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className={cursorClassName || "inline-block h-full w-[2px] bg-gold ml-1 align-middle"}
            />
        </div>
    );
};
