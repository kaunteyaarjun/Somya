"use client";

import { useEffect, useRef, useState } from "react";
import { createTimeline, scrambleText, stagger } from "animejs";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFinished, setIsFinished] = useState(false);
  const timelineRef = useRef<any>(null);

  useEffect(() => {
    // Only run in client
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Anime.js Timeline matching anime-js-scramble-text-timeline-demo.zip
    const tl = createTimeline({
      loop: false,
      onComplete: () => {
        handleFinish();
      },
    });

    timelineRef.current = tl;

    // Elements
    const slide1 = container.querySelector<HTMLElement>(".slide-1");
    const centerP = container.querySelector<HTMLElement>(".slide-1 p.center");
    const outerP = container.querySelectorAll<HTMLElement>(".slide-1 p:not(.center)");
    const slide2 = container.querySelector<HTMLElement>(".slide-2");
    const featuresP = container.querySelectorAll<HTMLElement>(".slide-2 p");
    const slide3 = container.querySelector<HTMLElement>(".slide-3");
    const slide3P = container.querySelector<HTMLElement>(".slide-3 p");

    if (!slide1 || !centerP || !slide2 || !slide3 || !slide3P) return;

    // Slide 1 Entry
    tl.add(slide1, {
      opacity: { to: 1, duration: 250, ease: "linear" },
      scale: [{ from: 0.75, to: 1, duration: 1200, ease: "inOut(3.5)" }],
      ease: "inOut(3)",
    });

    // Center word in Slide 1 scrambles with ░▒▓█
    tl.add(
      centerP,
      {
        scale: { from: 2.8, to: 1 },
        color: { from: "#ffd000", to: "#ff5a1f" },
        innerHTML: scrambleText({
          override: " ",
          ease: "inQuad",
          duration: 450,
          from: "center",
          cursor: "░▒▓█",
        }),
      },
      "<<"
    );

    // Subtle background shift
    tl.add(
      container,
      {
        background: "#120505",
      },
      "<<+=50"
    );

    // Outer words scramble with ░▒▓ in staggered grid
    tl.add(
      outerP,
      {
        scale: { from: 0.75, to: 1 },
        color: { to: "#ff3b30" },
        innerHTML: scrambleText({
          override: " ",
          from: "center",
          duration: 450,
          revealDelay: 200,
          cursor: "░▒▓",
          perturbation: 0.25,
        }),
      },
      stagger([200, 600], { grid: true, from: "center", ease: "out(3)", start: "<<" } as any)
    );

    // Outer words unscramble away
    tl.add(
      outerP,
      {
        innerHTML: scrambleText({
          text: "",
          override: false,
          from: "center",
          ease: "outQuad",
          reversed: true,
          duration: 600,
          cursor: "░▒▓",
        }),
      },
      "<+=120"
    );

    // Background to dark obsidian
    tl.add(
      container,
      {
        background: "#080808",
      },
      "<-=400"
    );

    // Center scrambles into primary name in bright lime
    tl.add(
      centerP,
      {
        scale: 1.4,
        color: { to: "#bbf42e" },
        ease: "inOutExpo",
        duration: 1100,
        innerHTML: scrambleText({
          text: "SOMYA PRASAD SETHY",
          ease: "inQuad",
          override: false,
          from: "center",
          duration: 800,
          perturbation: 0.2,
          cursor: "░▒▓█",
        }),
      },
      "<<"
    );

    // Center scrambles into title in pure white
    tl.add(
      centerP,
      {
        scale: 1,
        color: "#ffffff",
        ease: "inOutExpo",
        duration: 950,
        innerHTML: scrambleText({
          override: false,
          text: "FULL-STACK & BACKEND DEVELOPER",
          from: "right",
          duration: 800,
          settleDuration: 400,
          ease: "inOut",
          cursor: "░▒▓",
        }),
      },
      "<+=200"
    );

    // Center unscrambles out
    tl.add(
      centerP,
      {
        innerHTML: scrambleText({
          text: "",
          override: false,
          from: "random",
          reversed: true,
          duration: 650,
          perturbation: 0.5,
          cursor: "░▒▓",
        }),
      },
      "<+=350"
    );

    // Slide 2: Features Grid
    tl.set(
      slide1,
      {
        opacity: 0,
      },
      "<<"
    );
    tl.set(
      slide2,
      {
        opacity: 1,
      },
      "<<"
    );

    tl.add(
      featuresP,
      {
        innerHTML: scrambleText({
          override: " ",
          from: "center",
          duration: 400,
          revealDelay: 150,
          cursor: "░▒▓",
          perturbation: 0.4,
        }),
      },
      stagger([0, 600], { grid: true, from: "center", ease: "out(3)", start: "<<+=100", reversed: true } as any)
    );

    tl.add(
      featuresP,
      {
        scale: [0.8, 1],
      },
      stagger([0, 100], { grid: true, from: "center", ease: "out(3)", start: "<<", reversed: true } as any)
    );

    // Features unscramble away
    tl.add(
      featuresP,
      {
        innerHTML: scrambleText({
          text: "",
          override: false,
          from: "center",
          reversed: true,
          duration: 400,
          cursor: "░▒▓",
        }),
      },
      stagger([0, 500], { grid: true, from: "center", ease: "out(3)", start: "<+=300" } as any)
    );

    // Slide 3: Final Reveal
    tl.set(
      slide2,
      {
        opacity: 0,
      },
      "<<"
    );
    tl.set(
      slide3,
      {
        opacity: 1,
      },
      "<<"
    );

    tl.add(
      slide3P,
      {
        color: "#ffffff",
        scale: 1.4,
        ease: "inOutExpo",
        innerHTML: scrambleText({
          text: "SOMYA PRASAD SETHY",
          override: " ",
          from: "center",
          settleDuration: 300,
          revealRate: 33,
          perturbation: 0.2,
          cursor: "░▒▓█",
        }),
      },
      "-=100"
    );

    tl.add(
      slide3P,
      {
        color: { to: "#ff5a1f", duration: 400 },
        ease: "inOutExpo",
        duration: 650,
        innerHTML: scrambleText({
          text: "ENTER PORTFOLIO",
          override: false,
          from: "right",
          cursor: "░▒▓",
          duration: 500,
          ease: "inOut",
        }),
      },
      "<+=400"
    );

    // Final fade out of the entire preloader container
    tl.add(
      container,
      {
        opacity: 0,
        scale: 1.04,
        duration: 450,
        ease: "inOutQuad",
      },
      "+=250"
    );

    tl.init();

    // Listen for Escape key or Space to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.code === "Space") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      try {
        tl.pause();
      } catch {
        // ignore
      }
    };
  }, []);

  const handleFinish = () => {
    setIsFinished(true);
    if (onComplete) {
      onComplete();
    }
  };

  if (isFinished) return null;

  return (
    <div
      ref={containerRef}
      id="anime-preloader"
      onClick={handleFinish}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-[#0d0603] text-[#ff5a1f] select-none cursor-pointer transition-opacity duration-300"
      style={{
        zIndex: 99999,
        fontFamily: "var(--font-jetbrains-mono, monospace)",
      }}
      title="Click or press ESC to skip"
    >
      <main className="relative w-full max-w-[1000px] aspect-video flex items-center justify-center pointer-events-none">
        {/* Slide 1: Diamond Matrix Scramble */}
        <div className="slide slide-1 opacity-0 absolute inset-0 flex flex-col justify-center items-center">
          <div className="row flex justify-center flex-nowrap">
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
          </div>
          <div className="row flex justify-center flex-nowrap">
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
          </div>
          <div className="row flex justify-center flex-nowrap">
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
          </div>
          <div className="row flex justify-center flex-nowrap">
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="center shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono font-bold uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
          </div>
          <div className="row flex justify-center flex-nowrap">
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
          </div>
          <div className="row flex justify-center flex-nowrap">
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
          </div>
          <div className="row flex justify-center flex-nowrap">
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
            <p className="shrink-0 leading-none mx-[0.8ch] my-[0.5ch] text-xs sm:text-base md:text-xl font-mono uppercase whitespace-nowrap">SOMYA PRASAD SETHY</p>
          </div>
        </div>

        {/* Slide 2: Features Diamond Grid */}
        <div className="slide slide-2 features opacity-0 absolute inset-0 flex flex-col justify-center items-center">
          <div className="row flex justify-center flex-nowrap">
            <p data-color="3" className="text-[#ffd000] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">DISTRIBUTED SYSTEMS</p>
            <p data-color="8" className="text-[#818cf8] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">BACKEND ARCHITECTURE</p>
          </div>
          <div className="row flex justify-center flex-nowrap">
            <p data-color="14" className="text-[#4ade80] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">KV-CACHE FABRIC</p>
            <p data-color="0" className="text-[#ff5a1f] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">53% LOWER TTFT</p>
            <p data-color="6" className="text-[#38bdf8] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">DEVSECOPS</p>
          </div>
          <div className="row flex justify-center flex-nowrap">
            <p data-color="3" className="text-[#ffd000] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">POLE STUDIOS</p>
            <p data-color="16" className="text-[#f8fafc] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">CODESENTRY</p>
            <p data-color="4" className="text-[#a3e635] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">99.3% CACHE REUSE</p>
            <p data-color="1" className="text-[#ff3b30] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">FAST WEB PRODUCTS</p>
          </div>
          <div className="row flex justify-center flex-nowrap">
            <p data-color="11" className="text-[#f472b6] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">DEVELOPER TOOLING</p>
            <p data-color="5" className="text-[#22d3ee] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">HIGH PERFORMANCE</p>
            <p data-color="10" className="text-[#c084fc] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">AI LOAN DISBURSEMENT</p>
          </div>
          <div className="row flex justify-center flex-nowrap">
            <p data-color="13" className="text-[#fb7185] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">PRODUCTION GRADE</p>
            <p data-color="2" className="text-[#ff9500] shrink-0 leading-none mx-[1ch] my-[0.6ch] text-xs sm:text-base md:text-lg font-mono font-bold whitespace-nowrap">WORLDWIDE REMOTE</p>
          </div>
        </div>

        {/* Slide 3: Final Callout */}
        <div className="slide slide-3 opacity-0 absolute inset-0 flex flex-col justify-center items-center">
          <p className="text-xl sm:text-3xl md:text-5xl font-mono font-bold tracking-tight text-white whitespace-nowrap uppercase">
            SOMYA PRASAD SETHY
          </p>
        </div>
      </main>

      {/* Subtle Skip Indicator at Bottom */}
      <div className="absolute bottom-6 flex items-center gap-2 text-[10px] md:text-xs text-white/30 uppercase tracking-widest pointer-events-none">
        <span>Click anywhere or press [ESC] to skip</span>
      </div>
    </div>
  );
}
