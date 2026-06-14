import { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';
import { EXPERIENCES } from '@/lib/data';

export const dynamic = "force-static";

const BASE_URL = 'https://somya.pages.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/work`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/skills`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
        url: `${BASE_URL}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const experienceRoutes: MetadataRoute.Sitemap = EXPERIENCES.map((exp) => ({
        url: `${BASE_URL}/experience/${exp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...projectRoutes, ...experienceRoutes];
}
