import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Docs } from "@/constants";

export async function generateMetadata({ params }: { params: { id: string } }, parent: ResolvingMetadata): Promise<Metadata> {
    const Data = Docs.find(e => e.value === `/${params.id}`);

    if (!Data) {
        notFound();
    }

    return {
        metadataBase: new URL("https://kbotdocs.dev"),
        title: `${Data.label} | KBotDocs`,
        description: "카카오톡봇의 정보가 모인 카카오톡봇 문서입니다.",
        openGraph: {
            title: Data.label,
            siteName: "KBotDocs",
            url: `https://kbotdocs.dev/${params.id}`,
            images: {
                url: "/metadata/ogimage.png"
            },
            type: "article",
            locale: "ko-KR"
        },
    };
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>{ children }</>);
}