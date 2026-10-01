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
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => {
        if (href === "/" && pathname !== "/") return false;
        return pathname.startsWith(href);
    };

    return (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md">
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "flex items-center justify-between px-6 py-2.5 border-2 border-white/20",
                    "bg-[#0a0a0c]/90 backdrop-blur-md",
                    "shadow-[4px_4px_0_rgba(255,255,255,0.15)]",
                    "transition-all duration-300",
                    scrolled ? "bg-[#0a0a0c]/95 border-white/30 shadow-[6px_6px_0_rgba(255,255,255,0.2)]" : ""
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
                                        "relative text-xs font-mono font-bold tracking-[0.2em] uppercase transition-colors duration-200 py-1",
                                        active
                                            ? "text-white"
                                            : "text-gray-400 hover:text-white"
                                    )}
                                >
                                    {item.name}
                                    {active && (
                                        <motion.div
                                            layoutId="active-bar"
                                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white"
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </motion.nav>
        </div>
    );
}
