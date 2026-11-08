import Link from "next/link";

export const metadata = {
  title: "Dreaming of Jupiter — Three.js Cosmic Orbit | Somya Prasad Sethy",
  description: "Interactive 3D Three.js cosmic orbit, starfield, and terrain simulation by Somya Prasad Sethy.",
};

export default function JupiterPage() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-black relative flex flex-col">
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
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Dreaming of Jupiter · Three.js Orbit</span>
        </div>
      </header>

      {/* Embedded 3D Scene */}
      <iframe
        src="/experiments/jupiter/index.html"
        className="w-full h-full border-none flex-1"
        allow="fullscreen"
        title="Dreaming of Jupiter 3D Simulation"
      />
    </div>
  );
}

