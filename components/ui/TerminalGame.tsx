"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type HistoryItem = {
    type: "command" | "output" | "error" | "success";
    content: React.ReactNode;
};

const COMMANDS = [
    { cmd: "help", desc: "List available commands" },
    { cmd: "whoami", desc: "Display user profile and stats" },
    { cmd: "skills", desc: "List technical abilities" },
    { cmd: "projects", desc: "View mission logs (projects)" },
    { cmd: "socials", desc: "Connect via external channels" },
    { cmd: "clear", desc: "Clear the terminal" },
];

export default function TerminalGame() {
    const [history, setHistory] = useState<HistoryItem[]>([
        { type: "output", content: "Welcome to SomyaOS v2.0.77" },
        { type: "output", content: "Type 'help' to view available commands." },
    ]);
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: "command", content: cmd } as HistoryItem];

        switch (trimmedCmd) {
            case "help":
                newHistory.push({
                    type: "output",
                    content: (
                        <div className="grid grid-cols-1 gap-1">
                            {COMMANDS.map((c) => (
                                <div key={c.cmd} className="flex">
                                    <span className="text-gold w-24">{c.cmd}</span>
                                    <span className="text-gray-400">- {c.desc}</span>
                                </div>
                            ))}
                        </div>
                    ),
                });
                break;

            case "whoami":
                newHistory.push({
                    type: "success",
                    content: (
                        <div className="space-y-2">
                            <div><span className="text-gold">Name:</span> Somya Prasad Sethy</div>
                            <div><span className="text-gold">Role:</span> Staff UX Designer @ Google</div>
                            <div><span className="text-gold">Side Quest:</span> Founder @ Pole Studios</div>
                            <div><span className="text-gold">Mission:</span> Orchestrating user-centric design solutions.</div>
                            <div><span className="text-gold">Status:</span> <span className="text-green-400">ONLINE</span></div>
                        </div>
                    ),
                });
                break;

            case "skills":
                newHistory.push({
                    type: "success",
                    content: (
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-xs text-gray-500 mb-1">DESIGN</div>
                                <div className="text-blue-400">Figma, After Effects, Spline, Blender</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 mb-1">DEV</div>
                                <div className="text-green-400">Next.js, React, Tailwind, Framer Motion</div>
                            </div>
                        </div>
                    ),
                });
                break;

            case "projects":
                newHistory.push({
                    type: "output",
                    content: "Accessing Mission Logs... [Use scroll to view section below for full visual details]",
                });
                newHistory.push({
                    type: "success",
                    content: (
                        <ul className="list-disc pl-5">
                            <li><span className="text-gold">POLE Agency</span> - Cosmic Web Experience</li>
                            <li><span className="text-gold">Kaunteya Studios</span> - VFX & Branding</li>
                            <li><span className="text-gold">Polarity Engine</span> - Discord Ecosystem</li>
                        </ul>
                    )
                });
                break;

            case "socials":
                newHistory.push({
                    type: "success",
                    content: (
                        <div className="flex flex-col space-y-2">
                            <div className="flex space-x-4">
                                <a href="https://linkedin.com/in/somyaprasadsethy" target="_blank" className="underline hover:text-gold">LinkedIn</a>
                                <a href="https://github.com/kaunteyaarjun" target="_blank" className="underline hover:text-gold">GitHub</a>
                                <a href="https://twitter.com/kaunteyaarjun" target="_blank" className="underline hover:text-gold">Twitter</a>
                            </div>
                            <div>
                                <span className="text-gold">Email:</span> <a href="mailto:polestudios@mail.ru" className="hover:text-white transition-colors">polestudios@mail.ru</a>
                            </div>
                        </div>
                    )
                });
                break;

            case "clear":
                setHistory([]);
                return; // Early return to avoid adding the command to history again if we cleared it (though here we just cleared previous stuff)

            case "":
                break;

            default:
                newHistory.push({ type: "error", content: `Command not found: ${trimmedCmd}. Type 'help' for options.` });
        }

        setHistory(newHistory);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
        setInput("");
    };

    return (
        <div
            className="w-full h-80 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-2xl relative flex flex-col font-mono text-sm md:text-base"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Terminal Header */}
            <div className="bg-white/5 px-4 py-2 flex items-center space-x-2 border-b border-white/5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-4 text-xs font-mono text-gray-500">somya@portfolio:~/interactive</div>
            </div>

            {/* Terminal Body */}
            <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-2 text-gray-300">
                {history.map((item, i) => (
                    <div key={i} className={cn(
                        "leading-relaxed",
                        item.type === "command" && "text-gray-500 mb-1",
                        item.type === "error" && "text-red-400",
                        item.type === "success" && "text-gray-100",
                    )}>
                        {item.type === "command" && <span className="mr-2 text-green-400">➜</span>}
                        {item.content}
                    </div>
                ))}

                {/* Input Line */}
                <form onSubmit={handleSubmit} className="flex items-center">
                    <span className="text-green-400 mr-2">➜</span>
                    <span className="text-blue-400 mr-2">~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="bg-transparent border-none outline-none flex-1 text-white"
                        autoFocus
                        spellCheck={false}
                        autoComplete="off"
                    />
                </form>
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
        </div>
    );
}
