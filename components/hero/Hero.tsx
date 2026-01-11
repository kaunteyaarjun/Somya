"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";
import Loader from "@/components/hero/Loader";
import { cn } from "@/lib/utils";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { TextReveal } from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";
import MultilingualName from "@/components/hero/MultilingualName";
import VelocityScroll from "@/components/ui/VelocityScroll";
import HyperText from "@/components/ui/HyperText";

const TOTAL_FRAMES = 180;
const FRAME_HEIGHT = 1080;
const FRAME_WIDTH = 1920;
const SCROLL_HEIGHT = 4000;

const currentFrame = (index: number) => {
    const paddedIndex = index.toString().padStart(3, "0");
    return `/hero-frames/frame_${paddedIndex}.webp`;
};

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const { scrollY } = useScroll();
    const frameIndex = useTransform(scrollY, [0, SCROLL_HEIGHT], [0, TOTAL_FRAMES - 1]);

    const yLeft = useTransform(scrollY, [0, SCROLL_HEIGHT], [0, 300]);
    const yRight = useTransform(scrollY, [0, SCROLL_HEIGHT], [0, -300]);
    const opacityText = useTransform(scrollY, [0, 400, 900], [1, 1, 0]);
    const scaleText = useTransform(scrollY, [0, 900], [1, 0.8]);
    const opacityVelocity = useTransform(scrollY, [900, 1400, 3800], [0, 1, 0]);

    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        const loadImages = async () => {
            for (let i = 0; i < TOTAL_FRAMES; i++) {
                const img = new Image();
                img.src = currentFrame(i);

                img.onload = () => {
                    loadedCount++;
                    setProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
                    if (loadedCount === TOTAL_FRAMES) {
                        // Artificial delay for cinematic feel
                        setTimeout(() => {
                            setIsLoading(false);
                        }, 3500);
                    }
                };
                loadedImages.push(img);
            }
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        const img = images[index];
        if (!img) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        const safeIndex = Math.min(Math.max(Math.floor(latest), 0), TOTAL_FRAMES - 1);
        requestAnimationFrame(() => renderFrame(safeIndex));
    });

    useEffect(() => {
        if (!isLoading && images.length > 0) {
            renderFrame(0);
        }
    }, [isLoading, images]);

    useEffect(() => {
        const handleResize = () => {
            const currentScroll = scrollY.get();
            const currentIndex = Math.min(Math.max(Math.floor((currentScroll / SCROLL_HEIGHT) * (TOTAL_FRAMES - 1)), 0), TOTAL_FRAMES - 1);
            renderFrame(currentIndex);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoading, images, scrollY]);


    if (isLoading) {
        return <Loader progress={progress} />;
    }

    return (
        <section id="hero" className="relative w-full bg-background" style={{ height: `${SCROLL_HEIGHT}px` }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <motion.div
                    style={{ opacity: opacityVelocity }}
                    className="absolute inset-0 flex flex-col justify-center z-0"
                >
                    <VelocityScroll />
                </motion.div>

                <motion.div
                    style={{ opacity: opacityText, scale: scaleText }}
                    className="relative w-full h-full z-10"
                >
                    {/* Overlay: Left Identity */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        style={{ y: yLeft, opacity: opacityText }}
                        className="absolute top-[15%] md:top-[25%] left-[5%] right-[5%] md:right-auto z-10 flex flex-col space-y-4 md:space-y-6 pointer-events-none"
                    >
                        <div className="space-y-2">
                            <div className="font-[family-name:var(--font-caveat)] text-gold text-lg md:text-2xl tracking-widest overflow-hidden lowercase">
                                <TextReveal text="I see only the bird's eye." mode="masked" delay={1.5} />
                            </div>
                            <MultilingualName />
                            <div className="font-mono text-gray-500 text-xs md:text-sm tracking-widest pl-1 mt-1">
                                <TextReveal text="@kaunteyaarjun" mode="masked" delay={2.8} />
                            </div>
                        </div>

                        <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-lg p-4 md:p-6 w-full md:max-w-xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                            <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/80" />
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/80" />
                                <div className="h-px flex-1 bg-white/10 ml-2" />
                            </div>

                            <div className="font-mono text-xs md:text-lg text-gray-300 flex items-center">
                                <span className="text-green-400 mr-2 md:mr-3">➜</span>
                                <span className="text-gold opacity-80 mr-2">~/role:</span>
                                <TypewriterEffect
                                    words={[
                                        "Cybersecurity Student",
                                        "UX Designer",
                                        "Full Stack Dev",
                                        "AI & Innovation",
                                        "Graphic Designer",
                                        "Branding Consultant",
                                        "Game Engine Physics Optimizer",
                                        "3D Artist"
                                    ]}
                                    className="text-white font-bold tracking-wide"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Overlay: Right Value Prop */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        style={{ y: yRight }}
                        className="absolute bottom-[20%] md:bottom-auto md:top-1/2 md:-translate-y-1/2 right-0 left-0 md:left-auto px-6 md:pr-16 text-center md:text-right max-w-lg mx-auto md:mx-0 z-10 pointer-events-none"
                    >
                        <div className="backdrop-blur-sm bg-black/20 p-6 md:p-8 rounded-2xl border-t-2 md:border-t-0 md:border-r-2 border-gold/50 mx-4 md:mx-0">
                            <div className="text-xl md:text-4xl font-sans font-bold text-white mb-4 md:mb-6 leading-tight flex flex-col md:items-end items-center">
                                <TextReveal text="Securing the Future." mode="masked" delay={2} />
                                <div className="flex flex-wrap justify-center md:justify-end gap-x-[0.25em]">
                                    <TextReveal text="Designing the" mode="masked" delay={2.4} />
                                    <TextReveal
                                        text="Experience."
                                        mode="masked"
                                        delay={2.6}
                                        className="text-transparent bg-clip-text bg-gradient-to-l from-gold to-amber-200"
                                    />
                                </div>
                            </div>
                            <div className="text-gray-400 leading-relaxed font-mono text-xs md:text-base flex md:justify-end justify-center">
                                <TextReveal
                                    text="I bridge the gap between aesthetic design and impenetrable security."
                                    mode="masked"
                                    delay={3}
                                    className="max-w-md text-center md:text-right"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Socials */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                        <div className="flex space-x-6 px-8 py-3 bg-black/30 backdrop-blur-md border border-white/10 rounded-full shadow-lg hover:border-gold/30 transition-colors duration-300">
                            {[
                                { name: "GitHub", url: "https://github.com/kaunteyaarjun" },
                                { name: "LinkedIn", url: "https://www.linkedin.com/in/somyaprasadsethy/" },
                                { name: "Instagram", url: "https://www.instagram.com/kaunteyaarjun/" },
                                { name: "Twitter", url: "https://twitter.com/kaunteyaarjun" },
                                { name: "Email", url: "mailto:polestudios@mail.ru" }
                            ].map(social => (
                                <Magnetic key={social.name}>
                                    <a
                                        href={social.url}
                                        target={social.url !== "#" ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-gold transition-colors block py-1"
                                    >
                                        {social.name}
                                    </a>
                                </Magnetic>
                            ))}
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.5, duration: 1 }}
                        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 pointer-events-none mix-blend-difference"
                    >
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold/80 animate-pulse">
                            Scroll for optimal experience
                        </span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
