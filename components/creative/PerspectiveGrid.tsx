"use client";

import { useEffect, useRef } from "react";

interface PerspectiveGridProps {
  className?: string;
}

export default function PerspectiveGrid({ className = "w-full h-44 sm:h-52" }: PerspectiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      offset = (offset + 0.35) % 30;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(18, 18, 18, 0.4)";

      const horizon = h * 0.15;
      const vanishingX = w * 0.5;

      // Perspective longitudinal lines converging to vanishing point
      const numRays = 36;
      for (let i = -numRays / 2; i <= numRays / 2; i++) {
        const spread = (i / (numRays / 2)) * (w * 0.85);
        const bottomX = vanishingX + spread * 1.6;

        ctx.beginPath();
        ctx.moveTo(vanishingX + spread * 0.1, horizon);
        ctx.lineTo(bottomX, h);
        ctx.stroke();
      }

      // Horizontal transversal lines with perspective spacing
      const numHoriz = 16;
      for (let i = 0; i < numHoriz; i++) {
        const t = ((i * 30 + offset) % (numHoriz * 30)) / (numHoriz * 30);
        // Exponential perspective curve
        const y = horizon + Math.pow(t, 2.2) * (h - horizon);
        const alpha = Math.min(1, Math.max(0, t * 1.4));

        ctx.strokeStyle = `rgba(18, 18, 18, ${alpha * 0.45})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f4f4f2] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#f4f4f2] to-transparent pointer-events-none" />
    </div>
  );
}

