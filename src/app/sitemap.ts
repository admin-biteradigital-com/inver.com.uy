import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.inver.com.uy";

    const routes = [
        "",
        "/tours",
        "/transfers",
        "/experiencias",
        "/descubrir",
        "/nosotros",
        "/eventos",
        "/faq",
        "/contacto",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return [...routes];
}
