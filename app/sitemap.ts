import { MetadataRoute } from "next";
import { Docs } from "@/constants/docs";

export default function sitemap(): MetadataRoute.Sitemap {
    let sitemapArr: MetadataRoute.Sitemap = [{
        url: "https://kbotdocs.dev",
        lastModified: new Date()
    }];
    const loopFn = (e: Doc) => {

        if (e.children) {
            e.children.map(loopFn);
        }
        if (e.path) {
            sitemapArr.push({
                url: `https://kbotdocs.dev${e.path}`,
                lastModified: new Date()
            });
        }
    }

    Object.values(Docs).forEach(e => {
        e.docs.forEach(loopFn);
    });

    return sitemapArr;
}