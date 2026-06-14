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
    default: "Kaunteya Arjun (Somya Prasad) — CyberSecurity Researcher & Full Stack Engineer",
    template: "%s | Kaunteya Arjun",
  },
  description: "Kaunteya Arjun, also known as Somya Prasad Sethy (Kaunteyaarjun), is a CyberSecurity Researcher and Full Stack Engineer specializing in resilient, scalable systems, high-performance web applications, and cinematic UI design. Founder of Pole Studios.",
  keywords: [
    "Kaunteya", "Kaunteya Arjun", "Kaunteyaarjun", "Somya", "Somya Prasad", "Somya Prasad Sethy",
    "CyberSecurity Researcher", "Security Researcher", "Full Stack Engineer", "Full Stack Developer",
    "Next.js Developer", "React Developer", "TypeScript Developer",
    "Pole Studios", "Web Developer India", "UI/UX Designer",
    "GSAP Developer", "Framer Motion", "Cinematic Web Design",
    "Portfolio", "Vibe Coder", "Branding Consultant"
  ],
  authors: [
    { name: "Kaunteya Arjun", url: "https://somya.pages.dev" },
    { name: "Somya Prasad Sethy", url: "https://somya.pages.dev" },
  ],
  creator: "Kaunteya Arjun (Somya Prasad Sethy)",
  publisher: "Kaunteya Arjun",
  metadataBase: new URL('https://somya.pages.dev'),
  alternates: {
    canonical: "https://somya.pages.dev",
  },
  verification: {
    google: "I-yU9BkXZkNlaEHWfb5p_AZ1JMlvKplLF2jZX4J3rT0",
  },
  openGraph: {
    title: "Kaunteya Arjun — CyberSecurity Researcher & Full Stack Engineer",
    description: "Kaunteya Arjun (Somya Prasad Sethy / Kaunteyaarjun) — CyberSecurity Researcher and Full Stack Engineer building resilient, scalable systems. Founder of Pole Studios.",
    url: "https://somya.pages.dev",
    siteName: "Kaunteya Arjun — Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaunteya Arjun (Somya Prasad) — CyberSecurity Researcher & Full Stack Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaunteya Arjun — CyberSecurity Researcher & Full Stack Engineer",
    description: "CyberSecurity Researcher | Full Stack Engineer | Founder of Pole Studios. Building resilient, scalable systems.",
    creator: "@kaunteyaarjun",
    site: "@kaunteyaarjun",
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
    name: 'Kaunteya Arjun',
    alternateName: ['Somya Prasad Sethy', 'Somya Prasad', 'Kaunteyaarjun', 'Kaunteya', 'Somya'],
    url: 'https://somya.pages.dev',
    image: 'https://somya.pages.dev/og-image.png',
    sameAs: [
      'https://github.com/kaunteyaarjun',
      'https://www.linkedin.com/in/somyaprasadsethy/',
      'https://twitter.com/kaunteyaarjun',
      'https://www.instagram.com/kaunteyaarjun/',
    ],
    jobTitle: 'CyberSecurity Researcher & Full Stack Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Pole Studios',
      url: 'https://polestudios.in',
    },
    description: 'Kaunteya Arjun (Somya Prasad Sethy) is a CyberSecurity Researcher and Full Stack Engineer focused on building resilient, scalable systems. He specializes in merging high-performance backend logic with intuitive frontend design. Founder of Pole Studios.',
    knowsAbout: [
      'CyberSecurity', 'Penetration Testing', 'Web Application Security',
      'Next.js', 'React', 'TypeScript', 'Node.js', 'GSAP', 'Tailwind CSS',
      'Full Stack Development', 'UI/UX Design', 'Framer Motion', 'Web Performance Optimization'
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
    name: 'Kaunteya Arjun — Portfolio',
    description: 'Official portfolio of Kaunteya Arjun (Somya Prasad Sethy / Kaunteyaarjun) — CyberSecurity Researcher and Full Stack Engineer.',
    publisher: { '@id': 'https://somya.pages.dev/#person' },
    inLanguage: 'en-US',
  };

  // FAQ schema for AEO — answers common questions AI engines surface
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Kaunteya Arjun?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kaunteya Arjun, also known as Somya Prasad Sethy (username: Kaunteyaarjun), is a CyberSecurity Researcher and Full Stack Engineer from Cuttack, Odisha, India. He specializes in building resilient, scalable systems and is the founder of Pole Studios, a branding and web development studio.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is Kaunteyaarjun?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kaunteyaarjun is the online handle of Kaunteya Arjun (Somya Prasad Sethy), a CyberSecurity Researcher and Full Stack Engineer. He is active on GitHub, Twitter, Instagram, and LinkedIn under this username.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is Somya Prasad Sethy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Somya Prasad Sethy, known online as Kaunteya Arjun or Kaunteyaarjun, is a CyberSecurity Researcher and Full Stack Engineer from India. He founded Pole Studios and specializes in Next.js, React, TypeScript, and high-performance web applications with cinematic UI design.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does Kaunteya Arjun do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kaunteya Arjun is a CyberSecurity Researcher and Full Stack Engineer focused on building resilient, scalable systems. He merges high-performance backend logic with intuitive frontend design using Next.js, React, TypeScript, and Node.js. He is also the founder of Pole Studios.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Pole Studios?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pole Studios is a branding and web development studio founded by Kaunteya Arjun (Somya Prasad Sethy). It delivers commercial websites and digital products for clients, focusing on high-performance, cinematic web experiences.',
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
        {/* FAQ Schema for AEO — helps AI engines answer questions about you */}
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
