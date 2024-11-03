import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://kbotdocs.dev",
            lastModified: new Date()
        },
        {
            url: "https://kbotdocs.dev/basic",
            lastModified: new Date()
        },
        {
            url: "https://kbotdocs.dev/advanced",
            lastModified: new Date()
        },
        {
            url: "https://kbotdocs.dev/legacy",
            lastModified: new Date()
        },
        {
            url: "https://kbotdocs.dev/api2",
            lastModified: new Date()
        },
        {
            url: "https://kbotdocs.dev/starlight",
            lastModified: new Date()
        },
    ];
}