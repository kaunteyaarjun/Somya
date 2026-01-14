// app/layout.tsx
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
  title: "Somya Prasad | Portfolio",
  description: "Secure. Cinematic. Elegant. A multidisciplinary creator at the intersection of cybersecurity, design, and development.",
  keywords: ["Somya Prasad", "Kaunteya Arjun", "Cybersecurity", "UX Design", "Full Stack Developer", "Next.js", "Portfolio", "3D Artist"],
  // ✅ FIXED: Updated to your verified domain
  authors: [{ name: "Somya Prasad", url: "https://somya.pages.dev" }],
  creator: "Somya Prasad",
  // ✅ FIXED: Essential for SEO images to work
  metadataBase: new URL('https://somya.pages.dev'),
  verification: {
    google: "I-yU9BkXZkNlaEHWfb5p_AZ1JMlvKplLF2jZX4J3rT0",
  },
  openGraph: {
    title: "Somya Prasad | Futuristic Portfolio",
    description: "Bridging the gap between aesthetic design and impenetrable security.",
    // ✅ FIXED: Updated to match metadataBase
    url: "https://somya.pages.dev",
    siteName: "Somya Prasad Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", 
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
  // ✅ ADDED: This JSON-LD script tells Google you are a Person
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Somya Prasad',
    url: 'https://somya.pages.dev',
    sameAs: [
      // REPLACE THESE with your actual profile links for maximum SEO boost
      'https://github.com/kaunteyaarjun', 
      'https://www.linkedin.com/in/somya-prasad', 
      'https://twitter.com/kaunteyaarjun'
    ],
    jobTitle: 'Full Stack Developer & Designer',
    description: 'A multidisciplinary creator at the intersection of cybersecurity, design, and development.'
  };

  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} antialiased bg-background text-foreground overflow-x-hidden font-sans`}
      >
        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
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
