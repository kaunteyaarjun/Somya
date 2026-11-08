// app/layout.tsx
import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import GrainOverlay from "@/components/ui/GrainOverlay";
import ScrollProgress from "@/components/ui/ScrollProgress";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Somya Prasad Sethy — Creative Developer · AI-Assisted Backend Development",
    template: "%s | Somya Prasad Sethy",
  },
  description: "Creative Developer specializing in AI-assisted backend development, Python systems, Linux networking, RAG pipelines, and Model Context Protocol (MCP) agentic architectures.",
  keywords: [
    "Somya Prasad Sethy", "Somya Prasad", "Somya", "kaunteyaarjun",
    "Creative Developer", "AI-Assisted Backend Development", "Backend Development",
    "Python", "Linux Systems", "Networking", "AI Architecture", "Model Context Protocol", "MCP",
    "RAG", "Agentic Systems", "GenAI", "KV-Cache Fabric", "CodeSentry",
    "Pole Studios", "Remote Developer"
  ],
  authors: [
    { name: "Somya Prasad Sethy", url: "https://somya.pages.dev" },
  ],
  creator: "Somya Prasad Sethy",
  publisher: "Somya Prasad Sethy",
  metadataBase: new URL('https://somya.pages.dev'),
  alternates: {
    canonical: "https://somya.pages.dev",
  },
  openGraph: {
    title: "Somya Prasad Sethy — Creative Developer · AI-Assisted Backend Development",
    description: "Creative Developer specializing in AI-assisted backend development, Python systems, Linux networking, RAG, and MCP agentic architectures.",
    url: "https://somya.pages.dev",
    siteName: "Somya Prasad Sethy — Creative Developer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Somya Prasad Sethy — Creative Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somya Prasad Sethy — Creative Developer · AI-Assisted Backend Development",
    description: "Creative Developer specializing in AI-assisted backend development, Python systems, Linux networking, and agentic architectures.",
    creator: "@kaunteyaarjun",
    site: "@kaunteyaarjun",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0c0c0d] text-white selection:bg-neutral-300 selection:text-neutral-900`}
      >
        <SmoothScroll>
          <ScrollProgress />
          <GrainOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
