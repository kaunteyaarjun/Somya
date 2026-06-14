"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
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


    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <Loader key="loader" progress={progress} />}
            </AnimatePresence>

            {!isLoading && (
                <section id="hero" className="relative w-full bg-background" style={{ height: `${SCROLL_HEIGHT}px` }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Global Dark Overlay for All Frames */}
                <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />

                <motion.div
                    style={{ opacity: opacityVelocity }}
                    className="absolute inset-0 flex flex-col justify-center z-0"
                >
                    <VelocityScroll />
                </motion.div>

                <motion.div
                    style={{ opacity: opacityText, scale: scaleText }}
                    className="relative w-full h-full z-10 flex items-center justify-start px-8 md:px-24 lg:px-32"
                >
                    {/* Overlay: Left-Aligned Identity */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="relative z-10 flex flex-col items-start text-left space-y-8 pointer-events-none max-w-4xl"
                    >
                        <div className="space-y-6">
                            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-sans font-bold tracking-tighter leading-[0.85] text-white">
                                SOMYA<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">PRASAD.</span>
                            </h1>
                            
                            <p className="text-lg md:text-2xl font-light text-gray-300 max-w-xl leading-relaxed">
                                Crafting cinematic digital experiences and high-performance interfaces for bold brands.
                            </p>
                        </div>

                        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-8 py-4 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-colors duration-500 pointer-events-auto">
                            <div className="font-sans text-sm md:text-lg text-gray-300 flex items-center justify-start font-light tracking-wide">
                                <span className="text-white/50 mr-3">Role:</span>
                                <TypewriterEffect
                                    words={[
                                        "Next.js Developer",
                                        "Creative Director",
                                        "UI/UX Designer",
                                        "CyberSecurity Researcher",
                                        "Cinematographer"
                                    ]}
                                    className="text-white font-medium"
                                />
                            </div>
                        </div>
                    </motion.div>



                    {/* Socials */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                        <div className="flex space-x-6 px-8 py-3 bg-black/30 backdrop-blur-md border border-white/10 rounded-full shadow-lg hover:border-white/30 transition-colors duration-300">
                            {[
                                { name: "GitHub", url: "https://github.com/kaunteyaarjun" },
                                { name: "LinkedIn", url: "https://www.linkedin.com/in/somyaprasadsethy/" },
                                { name: "Instagram", url: "https://www.instagram.com/kaunteyaarjun/" },
                                { name: "Twitter", url: "https://twitter.com/kaunteyaarjun" },
                                { name: "Email", url: "mailto:teams@polestudios.in" }
                            ].map(social => (
                                <Magnetic key={social.name}>
                                    <a
                                        href={social.url}
                                        target={social.url !== "#" ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors block py-1"
                                    >
                                        {social.name}
                                    </a>
                                </Magnetic>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
                </section>
            )}
        </>
    );
}
