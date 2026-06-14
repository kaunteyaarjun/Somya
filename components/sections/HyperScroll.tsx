"use client";

import { useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const CONFIG = {
    itemCount: 20,
    starCount: 150,
    zGap: 800,
    camSpeed: 2.5,
};
const LOOP_SIZE = CONFIG.itemCount * CONFIG.zGap;
const SECTION_HEIGHT = 6000;

const TEXTS = [
    "DESIGN", "DEVELOPMENT", "CINEMATICS", "BRANDING",
    "AESTHETICS", "EXPERIENCE", "INTERFACE", "MOTION",
    "STRATEGY", "CREATIVITY"
];

export default function HyperScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const worldRef = useRef<HTMLDivElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);
    const fpsRef = useRef<HTMLSpanElement>(null);
    const velRef = useRef<HTMLSpanElement>(null);
    const coordRef = useRef<HTMLSpanElement>(null);

    const itemsRef = useRef<Array<{
        el: HTMLDivElement;
        type: "text" | "star";
        x: number;
        y: number;
        rot: number;
        baseZ: number;
    }>>([]);

    const stateRef = useRef({
        scroll: 0,
        velocity: 0,
        targetSpeed: 0,
        mouseX: 0,
        mouseY: 0,
        prevProgress: 0,
        prevTime: 0,
    });

    const rafIdRef = useRef<number>(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const now = performance.now();
        const st = stateRef.current;
        const newScroll = latest * SECTION_HEIGHT;
        const dt = now - st.prevTime;
        if (dt > 0) {
            st.targetSpeed = ((newScroll - st.scroll) / dt) * 16;
        }
        st.scroll = newScroll;
        st.prevProgress = latest;
        st.prevTime = now;
    });

    useEffect(() => {
        const world = worldRef.current;
        if (!world) return;

        world.innerHTML = "";
        itemsRef.current = [];

        for (let i = 0; i < CONFIG.itemCount; i++) {
            const el = document.createElement("div");
            el.className = "hyper-item";

            const txt = document.createElement("div");
            txt.className = "hyper-big-text";
            txt.innerText = TEXTS[i % TEXTS.length];
            el.appendChild(txt);

            // Abstract spiral positioning with some centered elements
            const angle = (i / CONFIG.itemCount) * Math.PI * 8;
            const isCenter = i % 3 === 0;
            
            const x = isCenter ? 0 : Math.cos(angle) * (window.innerWidth * 0.25);
            const y = isCenter ? 0 : Math.sin(angle) * (window.innerHeight * 0.25);
            const rot = isCenter ? 0 : (Math.random() - 0.5) * 45;

            itemsRef.current.push({
                el,
                type: "text",
                x,
                y,
                rot,
                baseZ: -i * CONFIG.zGap,
            });
            world.appendChild(el);
        }

        // Stars
        for (let i = 0; i < CONFIG.starCount; i++) {
            const el = document.createElement("div");
            el.className = "hyper-star";
            world.appendChild(el);
            itemsRef.current.push({
                el,
                type: "star",
                x: (Math.random() - 0.5) * 3000,
                y: (Math.random() - 0.5) * 3000,
                rot: 0,
                baseZ: -Math.random() * LOOP_SIZE,
            });
        }

        // Mouse tracking
        const handleMouse = (e: MouseEvent) => {
            stateRef.current.mouseX =
                (e.clientX / window.innerWidth - 0.5) * 2;
            stateRef.current.mouseY =
                (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("mousemove", handleMouse);

        let lastTime = 0;

        function animate(time: number) {
            const delta = time - lastTime;
            lastTime = time;
            const st = stateRef.current;

            // Smooth velocity
            st.velocity += (st.targetSpeed - st.velocity) * 0.1;

            // Camera tilt
            const tiltX = st.mouseY * 5 - st.velocity * 0.5;
            const tiltY = st.mouseX * 5;
            if (worldRef.current) {
                worldRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            }

            // Dynamic perspective (warp on velocity)
            const baseFov = 1000;
            const fov =
                baseFov - Math.min(Math.abs(st.velocity) * 10, 600);
            if (viewportRef.current) {
                viewportRef.current.style.perspective = `${fov}px`;
            }

            // Item loop
            const cameraZ = st.scroll * CONFIG.camSpeed;

            itemsRef.current.forEach((item) => {
                let relZ = item.baseZ + cameraZ;
                const modC = LOOP_SIZE;
                let vizZ = ((relZ % modC) + modC) % modC;
                if (vizZ > 500) vizZ -= modC;

                let alpha = 1;
                if (vizZ < -3000) alpha = 0;
                else if (vizZ < -2000)
                    alpha = (vizZ + 3000) / 1000;
                if (vizZ > 100 && item.type !== "star")
                    alpha = 1 - (vizZ - 100) / 400;
                if (alpha < 0) alpha = 0;

                item.el.style.opacity = String(alpha);

                if (alpha > 0) {
                    let trans = `translate3d(${item.x}px, ${item.y}px, ${vizZ}px)`;

                    if (item.type === "star") {
                        const stretch = Math.max(
                            1,
                            Math.min(
                                1 + Math.abs(st.velocity) * 0.1,
                                10
                            )
                        );
                        trans += ` scale3d(1, 1, ${stretch})`;
                    } else if (item.type === "text") {
                        trans += ` rotateZ(${item.rot}deg)`;
                        if (Math.abs(st.velocity) > 1) {
                            const offset = st.velocity * 1.5;
                            item.el.style.textShadow = `0 0 ${offset}px rgba(255, 255, 255, 0.3)`;
                        } else {
                            item.el.style.textShadow = "none";
                        }
                    }

                    item.el.style.transform = trans;
                }
            });

            rafIdRef.current = requestAnimationFrame(animate);
        }
        rafIdRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouse);
            cancelAnimationFrame(rafIdRef.current);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="hyper-scroll-section"
            style={{ height: `${SECTION_HEIGHT}px`, position: "relative" }}
        >
            <div className="hyper-sticky-wrap">
                {/* Post-processing overlays */}
                <div className="hyper-vignette" />
                <div className="hyper-noise" />

                {/* 3D Viewport */}
                <div ref={viewportRef} className="hyper-viewport">
                    <div ref={worldRef} className="hyper-world" />
                </div>
            </div>
        </section>
    );
}
