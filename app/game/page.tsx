import Link from "next/link";

export const metadata = {
  title: "Abandon All Hope — 3D WebGL Survival Simulation | Somya Prasad Sethy",
  description: "3D Three.js survival simulation experiment created and adapted by Somya Prasad Sethy.",
};

export default function GamePage() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#05060a] relative flex flex-col">
      {/* Top Bar Navigation */}
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
        <Link
          href="/"
          className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-lg"
        >
          <span>←</span>
          <span>Back to Portfolio</span>
        </Link>

        <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-neutral-400 font-mono text-[11px] uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span>Abandon All Hope · Three.js Engine</span>
        </div>
      </header>

      {/* Embedded Game Iframe */}
      <iframe
        src="/games/abandon-all-hope/index.html"
        className="w-full h-full border-none flex-1"
        allow="autoplay; fullscreen"
        title="Abandon All Hope 3D Game"
      />
    </div>
  );
}

