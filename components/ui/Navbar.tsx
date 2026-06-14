"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
    { name: "Me", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Determine active item based on current route. 
    // If we're on /work/pole-studios, the "Work" tab should still be active.
    const isActive = (href: string) => {
        if (href === "/" && pathname !== "/") return false;
        return pathname.startsWith(href);
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[350px] sm:max-w-md">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                className={cn(
                    "flex items-center justify-between px-6 py-3 rounded-full",
                    "bg-black/70 backdrop-blur-md",
                    "border border-white/10",
                    "shadow-lg shadow-black/20",
                    "transition-all duration-300",
                    scrolled ? "bg-black/90 shadow-2xl shadow-black/50" : ""
                )}
            >
                <ul className="flex items-center justify-between w-full">
                    {NAV_ITEMS.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "relative text-xs sm:text-sm font-sans tracking-widest uppercase transition-colors duration-300",
                                        active
                                            ? "text-white font-bold"
                                            : "text-gray-400 hover:text-white"
                                    )}
                                >
                                    {active && (
                                        <motion.span
                                            layoutId="active-dot"
                                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                                        />
                                    )}
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </motion.nav>
        </div>
    );
}
