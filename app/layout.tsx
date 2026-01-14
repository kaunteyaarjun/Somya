import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import GrainOverlay from "@/components/ui/GrainOverlay";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
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

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Somya Prasad | Futuristic Portfolio",
  description: "Secure. Cinematic. Elegant. A multidisciplinary creator at the intersection of cybersecurity, design, and development.",
  keywords: ["Somya Prasad", "Kaunteya Arjun", "Cybersecurity", "UX Design", "Full Stack Developer", "Next.js", "Portfolio", "3D Artist"],
  authors: [{ name: "Somya Prasad", url: "https://kaunteyaarjun.pages.dev" }],
  creator: "Somya Prasad",
  metadataBase: new URL('https://kaunteyaarjun.pages.dev'),
  verification: {
    google: "I-yU9BkXZkNlaEHWfb5p_AZ1JMlvKplLF2jZX4J3rT0",
  },
  openGraph: {
    title: "Somya Prasad | Futuristic Portfolio",
    description: "Bridging the gap between aesthetic design and impenetrable security.",
    url: "https://kaunteyaarjun.pages.dev",
    siteName: "Somya Prasad Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists in public folder or remove/replace
        width: 1200,
        height: 630,
        alt: "Somya Prasad - Futuristic Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somya Prasad | Futuristic Portfolio",
    description: "Secure. Cinematic. Elegant.",
    creator: "@kaunteyaarjun",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} antialiased bg-background text-foreground overflow-x-hidden font-sans`}
      >
        <SmoothScroll>
          <ScrollProgress />
          <GrainOverlay />
          <Navbar />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
