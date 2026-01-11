"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    wrap
} from "framer-motion";

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div className="font-bold uppercase text-4xl md:text-9xl whitespace-nowrap flex flex-nowrap" style={{ x }}>
                <span className="block mr-8 md:mr-24">{children} </span>
                <span className="block mr-8 md:mr-24">{children} </span>
                <span className="block mr-8 md:mr-24">{children} </span>
                <span className="block mr-8 md:mr-24">{children} </span>
            </motion.div>
        </div>
    );
}

export default function VelocityScroll() {
    return (
        <div className="w-full py-12 md:py-24 space-y-8 overflow-hidden opacity-30 select-none pointer-events-none mix-blend-overlay">
            <ParallaxText baseVelocity={-2}>LUXURY • SECURITY • SYSTEMS •</ParallaxText>
            <ParallaxText baseVelocity={2}>DESIGN • DEVELOPMENT • INNOVATION •</ParallaxText>
        </div>
    );
}
