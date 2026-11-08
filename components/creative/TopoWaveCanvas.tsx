"use client";

import { useEffect, useRef } from "react";

interface TopoWaveCanvasProps {
  className?: string;
  lineColor?: string;
  lineCount?: number;
}

export default function TopoWaveCanvas({
  className = "w-full h-full min-h-[360px]",
  lineColor = "rgba(18, 18, 18, 0.75)",
  lineCount = 38,
}: TopoWaveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseRef.current.targetX = Math.max(0, Math.min(1, x));
      mouseRef.current.targetY = Math.max(0, Math.min(1, y));
    };

    const container = canvas.parentElement;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    const render = () => {
      time += 0.012;

      // Soft mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = lineColor;

      const lines = lineCount;
      const stepY = height / (lines + 2);
      const points = 70;
      const stepX = width / points;

      for (let i = 0; i < lines; i++) {
        const baseY = stepY * (i + 1.5);
        ctx.beginPath();

        for (let j = 0; j <= points; j++) {
          const x = j * stepX;
          const nx = j / points;
          const ny = i / lines;

          // Multi-frequency wave calculation for topographic contour effect
          const distToMouse = Math.hypot(nx - mouseRef.current.x, ny - mouseRef.current.y);
          const mouseDisplacement = Math.sin(distToMouse * 10 - time * 2) * Math.max(0, 1 - distToMouse * 2.2) * 18;

          const wave1 = Math.sin(nx * 5 + time + i * 0.2) * 9;
          const wave2 = Math.cos(nx * 8 - time * 0.8 + i * 0.15) * 6;
          const wave3 = Math.sin((nx + ny) * 7 + time * 1.2) * 5;

          const envelope = Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI);
          const totalOffset = (wave1 + wave2 + wave3 + mouseDisplacement) * (0.3 + 0.7 * envelope);

          const y = baseY + totalOffset;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [lineColor, lineCount]);

  return (
    <div className={`relative overflow-hidden rounded-xl border border-black/10 bg-[#ededeb] ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest text-black/50 select-none">
        TOPOGRAPHY // GENERATIVE CONTOUR MESH
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-widest text-black/40 select-none">
        SYS.LATENCY: 0.0ms ✱ LIVE
      </div>
    </div>
  );
}

