"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
    { name: "Me", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#arsenal" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("Me");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            setActive(NAV_ITEMS.find(item => item.href === href)?.name || "Me");
        }
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[350px] sm:max-w-md">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
                className={cn(
                    "flex items-center justify-between px-6 py-3 rounded-full",
                    "bg-black/70 backdrop-blur-md",
                    "border border-white/10",
                    "shadow-lg shadow-black/20",
                    "transition-all duration-300"
                )}
            >
                <ul className="flex items-center justify-between w-full">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className={cn(
                                    "relative text-xs sm:text-sm font-mono tracking-widest uppercase transition-colors duration-300",
                                    active === item.name
                                        ? "text-gold font-bold"
                                        : "text-gray-400 hover:text-white"
                                )}
                            >
                                {active === item.name && (
                                    <motion.span
                                        layoutId="active-dot"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full"
                                    />
                                )}
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </div>
    );
}
