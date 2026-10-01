import KVCacheLandingPage from "@/components/kv-cache/KVCacheLandingPage";

export const metadata = {
  title: "Disaggregated KV-Cache Fabric — Somya Prasad Sethy",
  description: "A hardware-agnostic memory virtualization architecture for LLM agent swarms. Scale autonomous workflows across high-speed GPU VRAM and dense host DRAM with concurrent lock-coupled radix prefix caching and race-free PCIe DMA eviction.",
  openGraph: {
    title: "Disaggregated KV-Cache Fabric",
    description: "LLM memory virtualization engine engineered by Somya Prasad Sethy.",
    images: [{ url: "/project-kv-cache.png" }],
  },
};

export default function KVCachePage() {
  return <KVCacheLandingPage />;
}
