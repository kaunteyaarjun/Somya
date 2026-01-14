import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
