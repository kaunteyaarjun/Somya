import { EXPERIENCES } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
    return EXPERIENCES.map((exp) => ({
        slug: exp.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const experience = EXPERIENCES.find((e) => e.slug === slug);

    if (!experience) return { title: "Experience Not Found" };

    return {
        title: `${experience.role} at ${experience.company} | Kaunteya Arjun`,
        description: experience.description,
        openGraph: {
            title: `${experience.role} at ${experience.company} | Kaunteya Arjun`,
            description: experience.description,
        },
    };
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const experience = EXPERIENCES.find((e) => e.slug === slug);

    if (!experience) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white">
            <Navbar />

            {/* Flat Editorial Header Section */}
            <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
                <Link href="/#experience" className="inline-flex items-center text-sm font-sans text-gray-500 hover:text-white transition-colors mb-12 group uppercase tracking-widest">
                    <span className="mr-4 transform group-hover:-translate-x-2 transition-transform">&larr;</span> Back to Timeline
                </Link>
                
                <h1 className="text-5xl md:text-8xl font-sans font-bold mb-8 tracking-tighter leading-tight">
                    {experience.role}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-gray-400 uppercase tracking-widest">
                    <span className="text-white font-bold">{experience.company}</span>
                    <span className="opacity-30">•</span>
                    <span>{experience.location}</span>
                    <span className="opacity-30">•</span>
                    <span className="px-3 py-1 bg-white text-black font-bold text-xs">{experience.period}</span>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 px-6 md:px-20 max-w-5xl mx-auto mb-24">
                <div className="grid md:grid-cols-[2fr_1fr] gap-16 md:gap-24">
                    {/* Left Column - Details */}
                    <div className="space-y-16">
                        <div>
                            <h2 className="text-xs font-sans text-gray-500 uppercase tracking-widest mb-6">Role Overview</h2>
                            <p className="text-gray-300 text-xl font-light leading-relaxed">
                                {experience.description}
                            </p>
                        </div>

                        {experience.content && (
                            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-sans prose-headings:tracking-tight prose-a:text-white prose-a:underline-offset-4 hover:prose-a:text-gray-300 transition-colors">
                                <ReactMarkdown>{experience.content}</ReactMarkdown>
                            </div>
                        )}

                        <div>
                            <h2 className="text-xs font-sans text-gray-500 uppercase tracking-widest mb-6">Key Responsibilities</h2>
                            <ul className="space-y-6">
                                {experience.responsibilities.map((resp, index) => (
                                    <li key={index} className="flex items-start text-gray-300 font-light leading-relaxed text-lg">
                                        <span className="text-white mr-6 mt-1 font-mono text-sm opacity-50">&rarr;</span>
                                        {resp}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xs font-sans text-gray-500 uppercase tracking-widest mb-6">Major Achievements</h2>
                            <ul className="space-y-6">
                                {experience.achievements.map((achieve, index) => (
                                    <li key={index} className="flex items-start text-gray-300 font-light leading-relaxed text-lg">
                                        <span className="text-white mr-6 mt-1 font-mono text-sm opacity-50">&rarr;</span>
                                        {achieve}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Meta (Box-less) */}
                    <div className="space-y-16">
                        <div className="sticky top-32">
                            <h2 className="text-xs font-sans text-gray-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Tools & Technologies</h2>
                            <div className="flex flex-col gap-4 mt-8">
                                {experience.tools.map((tool) => (
                                    <div key={tool} className="text-gray-300 font-sans text-lg font-light">
                                        {tool}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
