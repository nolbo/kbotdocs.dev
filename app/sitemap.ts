import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://nolbo.dev",
            lastModified: new Date()
        },
        {
            url: "https://nolbo.dev/post/11",
            lastModified: new Date()
        }
    ];
}