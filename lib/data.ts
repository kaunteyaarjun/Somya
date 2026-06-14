export interface Project {
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    status: string;
    url: string;
    year: string;
    role: string;
    techStack: string[];
    challenges: string[];
    content?: string;
}

export const PROJECTS: Project[] = [
    {
        title: "Pole Studios",
        slug: "pole-studios",
        description: "Branding and web development studio delivering commercial websites and digital products for clients.",
        longDescription: "Pole Studios is a full-service branding and web development agency that I founded to help businesses establish a strong digital presence. We focus on delivering high-performance, cinematic web experiences that combine cutting-edge technology with premium design aesthetics.",
        image: "/project-pole.png",
        tags: ["Next.js", "Branding", "UI/UX", "Web Development"],
        status: "Live",
        url: "https://polestudios.in",
        year: "2025",
        role: "Founder & Lead Developer",
        techStack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
        challenges: [
            "Designing an agency website that stands out while remaining highly accessible and performant.",
            "Implementing complex scroll-triggered animations without compromising mobile performance.",
            "Establishing a seamless lead generation and client onboarding workflow directly integrated into the platform."
        ],
        content: `
## The Vision

Pole Studios was born out of a desire to create a digital agency that bridges the gap between high-end, cinematic aesthetics and rigorous software engineering. 

We don't just build websites; we engineer digital experiences that leave a lasting impact.

### Core Philosophy

1. **Performance First**: A beautiful website that takes 10 seconds to load is a failed website. We prioritize Next.js App Router, edge caching, and heavily optimized assets.
2. **Cinematic Motion**: Movement should feel organic, not jarring. We use GSAP and Framer Motion to choreograph scroll-triggers that guide the user's eye naturally.
3. **Resilient Architecture**: Built on robust, typed foundations (TypeScript) to ensure long-term maintainability.
`
    },
    {
        title: "DMS Photography",
        slug: "dms-photography",
        description: "Professional photography portfolio with immersive gallery experience and cinematic presentation.",
        longDescription: "A high-end portfolio website crafted for a professional photography studio. The platform is designed to showcase high-resolution imagery through an immersive, cinematic interface that prioritizes visual impact and user experience.",
        image: "/project-dms.png",
        tags: ["Next.js", "Photography", "Portfolio", "GSAP"],
        status: "Live",
        url: "https://dmsphotography.in",
        year: "2024",
        role: "Full Stack Developer",
        techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
        challenges: [
            "Optimizing the delivery of hundreds of high-resolution images without slowing down initial page loads.",
            "Creating smooth, staggered gallery entrance animations that feel organic and premium.",
            "Building a custom masonry grid layout that flawlessly adapts to various screen sizes."
        ],
        content: `
## The Vision

DMS Photography needed a digital home that matched the premium, high-fidelity nature of their physical work. They required a platform that felt less like a standard portfolio and more like an immersive digital gallery.

Our goal was to engineer an experience where the technology disappears, allowing the photography to take center stage.

### Technical Approach

1. **Next.js Image Optimization**: We aggressively utilized Next.js's built-in image optimization, generating WebP formats on the fly and serving appropriately sized images based on the user's viewport.
2. **GSAP Choreography**: The entrance animations aren't just simple CSS fades. We built a custom GSAP timeline that staggers the reveal of the masonry grid, creating a sense of cinematic weight.
3. **Responsive Masonry**: Built a deeply custom, performant masonry grid using Tailwind CSS and React that calculates columns dynamically without causing layout thrash on resize.

### The Result

A blazing-fast, visually arresting digital gallery that loads high-resolution assets instantly, resulting in a **40% increase in lead generation** for the studio.
`
    }
];

export interface Experience {
    id: number;
    slug: string;
    role: string;
    company: string;
    location: string;
    period: string;
    description: string;
    highlight: boolean;
    responsibilities: string[];
    achievements: string[];
    tools: string[];
    content?: string;
}

export const EXPERIENCES: Experience[] = [
    {
        id: 1,
        slug: "founder-pole-studios",
        role: "Founder & Branding Consultant",
        company: "Pole Studios",
        location: "Cuttack, Odisha, India",
        period: "Oct 2025 - Present",
        description: "Founded and operate a branding and web development studio delivering commercial websites and digital products for clients. Developed a streamlined requirements-gathering process that reduced project delivery time by 15%.",
        highlight: true,
        responsibilities: [
            "Leading technical architecture and design direction for all client projects.",
            "Managing client relationships, requirement gathering, and project timelines.",
            "Developing scalable Next.js applications tailored to specific business needs."
        ],
        achievements: [
            "Successfully launched 5+ commercial web platforms within the first quarter of operations.",
            "Reduced average project delivery time by 15% through optimized requirement workflows.",
            "Established a recognizable, premium brand identity in the local digital agency space."
        ],
        tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "Vercel"],
        content: `
### Agency Genesis

After years of freelance development and visual design, I founded Pole Studios to formalize my offering. The agency space is crowded with template-driven shops; my goal was to build a studio focused strictly on **high-performance, cinematic digital engineering**.

### The Hybrid Approach

At Pole Studios, we don't separate design from engineering. Every project starts with a unified vision of both aesthetics and architecture:

- **Technical Direction**: I lead the architectural decisions, heavily favoring Next.js App Router for its server-first philosophy, allowing us to ship complex animations without devastating client-side payloads.
- **Client Engineering**: A significant part of my role involves translating vague client desires into strict technical requirements, completely eliminating scope creep.
- **Security & Scale**: Drawing on my background as a CyberSecurity Researcher, all client platforms are audited for common vulnerabilities (OWASP Top 10) before deployment, ensuring brand reputation is never compromised.

### The Trajectory

Within the first quarter, we successfully onboarded and delivered for 5+ commercial clients, establishing a reputation for speed, aesthetics, and bulletproof engineering.
`
    },
    {
        id: 2,
        slug: "web-developer-freelance",
        role: "Web Developer (Next.js)",
        company: "Freelance",
        location: "Remote",
        period: "Jul 2023 - Oct 2025",
        description: "Engineered and deployed immersive Next.js applications for various clients, consistently exceeding performance benchmarks. Recognised for cinematic UI design, GSAP animations, and smooth full-stack architecture.",
        highlight: false,
        responsibilities: [
            "Collaborated directly with clients to define product scope and technical requirements.",
            "Built dynamic user interfaces using React, Framer Motion, and Tailwind CSS.",
            "Integrated various CMS platforms and third-party APIs into frontend architectures."
        ],
        achievements: [
            "Maintained a 100% client satisfaction rate across 10+ freelance projects.",
            "Consistently achieved 95+ Lighthouse performance scores on deployed applications.",
            "Pioneered the use of GSAP scroll-triggers for highly interactive client landing pages."
        ],
        tools: ["Next.js", "React", "JavaScript", "GSAP", "Tailwind CSS", "Sanity CMS"]
    },
    {
        id: 3,
        slug: "video-editor-freelance",
        role: "Video Editor",
        company: "Freelance",
        location: "Remote",
        period: "Jan 2023 - Oct 2025",
        description: "Collaborated with content creators on documentary and short-form video projects, managing production timelines and deliverables. Created dynamic motion graphics and tracked engagement metrics to optimise viewer retention.",
        highlight: false,
        responsibilities: [
            "Edited raw footage into compelling narratives for various social media platforms.",
            "Designed and animated custom motion graphics to enhance visual storytelling.",
            "Analyzed audience retention metrics to continuously refine editing pacing."
        ],
        achievements: [
            "Produced content that generated over 1M+ cumulative views across platforms.",
            "Developed a streamlined editing template workflow that cut turnaround times by 20%.",
            "Cultivated a deep understanding of visual pacing that heavily influenced my subsequent UI/UX design approach."
        ],
        tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop", "Illustrator"]
    }
];
