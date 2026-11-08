import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import ReactMarkdown from "react-markdown";
import KVCacheLandingPage from "@/components/kv-cache/KVCacheLandingPage";
import CodeSentryLandingPage from "@/components/codesentry/CodeSentryLandingPage";

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) return { title: "Project Not Found | Somya Prasad Sethy" };

    return {
        title: `${project.title} | Somya Prasad Sethy`,
        description: project.description,
        openGraph: {
            title: `${project.title} | Somya Prasad Sethy`,
            description: project.description,
            images: [{ url: project.image }],
        },
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    if (slug === "kv-cache-fabric") {
        return <KVCacheLandingPage />;
    }

    if (slug === "codesentry") {
        return <CodeSentryLandingPage />;
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white">
            <Navbar />

            {/* Flat Editorial Hero */}
            <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
                <Link href="/#works" className="inline-flex items-center text-sm font-sans text-gray-500 hover:text-white transition-colors mb-12 group uppercase tracking-widest">
                    <span className="mr-4 transform group-hover:-translate-x-2 transition-transform">&larr;</span> Back to Works
                </Link>
                
                <h1 className="text-5xl md:text-8xl font-sans font-bold mb-8 tracking-tighter">
                    {project.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-gray-400 uppercase tracking-widest">
                    <span className="text-white font-bold">{project.year}</span>
                    <span className="opacity-30">•</span>
                    <span>{project.role}</span>
                    <span className="opacity-30">•</span>
                    <span className="px-3 py-1 bg-white text-black font-bold text-xs">{project.status}</span>
                </div>
            </section>

            {/* Massive Box-less Image */}
            <section className="w-full max-w-7xl mx-auto px-6 mb-20">
                <div className="relative w-full aspect-video bg-white/5 border border-white/10">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* Verified Metrics Bar if available */}
            {project.metrics && project.metrics.length > 0 && (
                <section className="w-full max-w-5xl mx-auto px-6 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white/[0.02] border border-white/10">
                        {project.metrics.map((m) => (
                            <div key={m.label} className="space-y-2">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">{m.label}</span>
                                <p className="text-lg md:text-xl font-mono text-white font-bold">{m.value}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Video Explainer Section inside the Case Study */}
            {project.video && (
                <section className="w-full max-w-5xl mx-auto px-6 mb-20">
                    <div className="border border-white/10 p-4 md:p-6 bg-white/[0.02] space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 flex items-center gap-2">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                Video Explainer & Demonstration
                            </span>
                            <span className="text-xs font-mono text-gray-500 uppercase">Architecture Deep Dive</span>
                        </div>
                        <div className="relative w-full aspect-video overflow-hidden bg-black border border-white/10">
                            <video
                                src={project.video}
                                controls
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Content Section */}
            <section className="py-12 px-6 md:px-20 max-w-5xl mx-auto mb-24">
                <div className="grid md:grid-cols-[2fr_1fr] gap-16 md:gap-24">
                    {/* Left Column - Details */}
                    <div className="space-y-16">
                        <div>
                            <h2 className="text-xs font-sans text-gray-500 uppercase tracking-widest mb-6">Overview</h2>
                            <p className="text-gray-300 text-xl font-light leading-relaxed">
                                {project.longDescription}
                            </p>
                        </div>

                        {project.content && (
                            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-sans prose-headings:tracking-tight prose-a:text-white prose-a:underline-offset-4 hover:prose-a:text-gray-300 transition-colors">
                                <ReactMarkdown>{project.content}</ReactMarkdown>
                            </div>
                        )}

                        <div>
                            <h2 className="text-xs font-sans text-gray-500 uppercase tracking-widest mb-6">Key Challenges</h2>
                            <ul className="space-y-6">
                                {project.challenges.map((challenge, index) => (
                                    <li key={index} className="flex items-start text-gray-300 font-light leading-relaxed text-lg">
                                        <span className="text-white mr-6 mt-1 font-mono text-sm opacity-50">0{index + 1}</span>
                                        {challenge}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Meta */}
                    <div className="space-y-16">
                        <div className="sticky top-32">
                            <h2 className="text-xs font-sans text-gray-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Tech Stack</h2>
                            <div className="flex flex-col gap-4 mt-8">
                                {project.techStack.map((tech) => (
                                    <div key={tech} className="text-gray-300 font-sans text-lg font-light">
                                        {tech}
                                    </div>
                                ))}
                            </div>

                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-between w-full mt-16 py-4 border-b border-white/20 hover:border-white text-white font-sans text-lg transition-colors"
                            >
                                <span>Visit Repository / Platform</span>
                                <span className="transform group-hover:translate-x-2 transition-transform">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
