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
  title: {
    default: "Somya Prasad Sethy — Full-Stack & Backend Developer",
    template: "%s | Somya Prasad Sethy",
  },
  description: "Self-taught, AI-assisted full-stack and backend developer with 3+ years of experience building production-grade web applications and developer tooling. Founder of Pole Studios.",
  keywords: [
    "Somya Prasad Sethy", "Somya Prasad", "Somya", "kaunteyaarjun",
    "Full-Stack Developer", "Backend Engineer", "Creative Developer",
    "Systems Engineer", "Go", "Rust", "Distributed Systems", "LLM Inference",
    "KV-Cache Fabric", "CodeSentry",
    "Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS",
    "Pole Studios", "Web Developer India", "Developer Tooling", "Remote Developer"
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
  verification: {
    google: "I-yU9BkXZkNlaEHWfb5p_AZ1JMlvKplLF2jZX4J3rT0",
  },
  openGraph: {
    title: "Somya Prasad Sethy — Full-Stack & Backend Developer",
    description: "Self-taught, AI-assisted full-stack and backend developer with 3+ years of experience building production-grade web applications and developer tooling. Founder of Pole Studios.",
    url: "https://somya.pages.dev",
    siteName: "Somya Prasad Sethy — Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Somya Prasad Sethy — Full-Stack & Backend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somya Prasad Sethy — Full-Stack & Backend Developer",
    description: "Full-Stack Developer & Backend Engineer. I build backend systems, developer tooling and fast web products. Founder of Pole Studios.",
    creator: "@kaunteyaarjun",
    site: "@kaunteyaarjun",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Comprehensive JSON-LD for SEO + AEO + GEO
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://somya.pages.dev/#person',
    name: 'Somya Prasad Sethy',
    alternateName: ['Somya Prasad', 'Somya', 'kaunteyaarjun'],
    url: 'https://somya.pages.dev',
    image: 'https://somya.pages.dev/og-image.png',
    sameAs: [
      'https://github.com/kaunteyaarjun',
      'https://www.linkedin.com/in/somyaprasadsethy/',
      'https://twitter.com/kaunteyaarjun',
    ],
    jobTitle: 'Full-Stack Developer & Backend Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Pole Studios',
      url: 'https://polestudios.in',
    },
    description: 'Self-taught, AI-assisted full-stack and backend developer with 3+ years of experience building production-grade web applications and developer tooling. Founder of Pole Studios, a branding and web development studio. Open to remote roles worldwide.',
    knowsAbout: [
      'Full-Stack Development', 'Backend Engineering', 'Distributed Systems',
      'Go', 'Rust', 'gRPC', 'LLM Inference Caching',
      'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL',
      'DevSecOps', 'Static Code Analysis', 'Workflow Automation'
    ],
    nationality: {
      '@type': 'Country',
      name: 'India',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cuttack',
      addressRegion: 'Odisha',
      addressCountry: 'IN',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://somya.pages.dev/#website',
    url: 'https://somya.pages.dev',
    name: 'Somya Prasad Sethy — Portfolio',
    description: 'Official portfolio of Somya Prasad Sethy (kaunteyaarjun) — Full-Stack Developer & Backend Engineer.',
    publisher: { '@id': 'https://somya.pages.dev/#person' },
    inLanguage: 'en-US',
  };

  // FAQ schema for AEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Somya Prasad Sethy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Somya Prasad Sethy (GitHub: kaunteyaarjun) is a self-taught, AI-assisted full-stack and backend developer with 3+ years of experience building production-grade web applications and developer tooling. He is the founder of Pole Studios.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does Somya Prasad Sethy build?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Somya Prasad Sethy builds backend systems, developer tooling, and fast web products. Key projects include KV-Cache Fabric (a disaggregated memory system for LLM agent swarms in Go/Rust/gRPC), CodeSentry (an open-source DevSecOps code inspector), and the AI-Based Loan Disbursement System.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Pole Studios?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pole Studios is a branding and web development studio founded in October 2025 by Somya Prasad Sethy. Operating on zero external capital, Pole Studios designs and builds full-stack web applications for startup founders and small businesses.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Somya Prasad Sethy’s GitHub handle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Somya Prasad Sethy can be found on GitHub at https://github.com/kaunteyaarjun.',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} antialiased bg-background text-foreground overflow-x-hidden font-sans`}
      >
        {/* Person Schema for SEO + AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* Website Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* FAQ Schema for AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
