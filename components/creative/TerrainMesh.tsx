"use client";

import { useEffect, useRef } from "react";

interface TerrainMeshProps {
  className?: string;
}

export default function TerrainMesh({ className = "w-full h-48 md:h-56" }: TerrainMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
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

    const render = () => {
      time += 0.008;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(18, 18, 18, 0.7)";

      const rows = 20;
      const cols = 45;
      const stepX = w / (cols - 1);
      const stepY = (h * 0.7) / rows;
      const startY = h * 0.25;

      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        const yOffset = startY + r * stepY;

        for (let c = 0; c < cols; c++) {
          const x = c * stepX;
          const nx = c / cols;
          const nr = r / rows;

          // Mountain elevation calculation
          const peakCenter = 0.65;
          const distToPeak = Math.abs(nx - peakCenter);
          const mountain = Math.exp(-distToPeak * distToPeak * 14) * (h * 0.45);

          const ripple = Math.sin(nx * 12 + nr * 6 + time) * 6;
          const y = yOffset - mountain * (1 - nr * 0.5) + ripple;

          if (c === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
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
    <div className={`relative overflow-hidden rounded-xl bg-[#ededeb] border border-black/10 ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-2.5 left-3 font-mono text-[9px] uppercase tracking-widest text-black/50 select-none">
        TERRAIN ELEVATION // SYSTEMS TRAJECTORY
      </div>
    </div>
  );
}

