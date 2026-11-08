"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { name: "Introduction", href: "#introduction" },
  { name: "Some Works", href: "#works" },
  { name: "Work Experience", href: "#experience" },
  { name: "Tools & Technologies", href: "#tools" },
  { name: "Contact", href: "#contact" },
];

export default function CreativeNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0c0d]/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Monogram Brand Mark */}
        <Link href="#introduction" className="group flex items-center gap-2">
          <span className="font-mono text-xl sm:text-2xl font-black tracking-tighter text-white group-hover:text-neutral-300 transition-colors">
            sp<span className="text-emerald-400">.</span>
          </span>
        </Link>

        {/* Text Navigation */}
        <nav className="flex items-center gap-5 sm:gap-7 font-mono text-xs tracking-wider text-neutral-400 uppercase">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-200 hidden md:inline-block text-[11px]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black font-mono text-[11px] font-bold hover:bg-neutral-200 transition-colors"
          >
            <span>Let's Talk</span>
            <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

