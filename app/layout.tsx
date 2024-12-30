import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import ThemeProvider from "@/components/context/ThemeProvider";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://kbotdocs.dev"),
    title: {
        default: "KBotDocs | 카카오톡봇 문서",
        template: "%s | KBotDocs"
    },
    description: "카카오톡봇의 정보가 모인 카카오톡봇 문서입니다.",
    openGraph: {
        title: {
            default: "KBotDocs | 카카오톡봇 문서",
            template: "%s | KBotDocs"
        },
        siteName: "KBotDocs",
        url: "https://kbotdocs.dev/",
        images: {
            url: "/metadata/ogimage.png"
        },
        type: "website",
        locale: "ko-KR"
    },
    icons: [
        {
            rel: "icon",
            type: "image/x-icon",
            url: "/metadata/favicon_light.ico",
            media: '(prefers-color-scheme: light)',
        },
        {
            rel: "icon",
            type: "image/x-icon",
            url: "/metadata/favicon_dark.ico",
            media: '(prefers-color-scheme: dark)',
        }
    ]
};

const open_sans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800"],
    style: ["italic", "normal"],
    variable: "--font-open-sans"
});

const pretendard = localFont({
    src: "../public/fonts/PretendardVariable.woff2",
    variable: "--font-pretendard"
});

const cascadia_mono_nf = localFont({
    src: [
        {
            path: "../public/fonts/CascadiaMonoNF.woff2",
            style: "normal"
        },
        {
            path: "../public/fonts/CascadiaMonoNFItalic.woff2",
            style: "italic"
        }
    ],
    variable: "--font-cascadia-mono-nf"
});

const cascadia_code_nf = localFont({
    src: [
        {
            path: "../public/fonts/CascadiaCodeNF.woff2",
            style: "normal"
        },
        {
            path: "../public/fonts/CascadiaCodeNFItalic.woff2",
            style: "italic"
        }
    ],
    variable: "--font-cascadia-code-nf"
});

export default function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { id: string };
}>) {

    return (
        <html suppressHydrationWarning>
            <body className={`${open_sans.variable} ${pretendard.variable} ${cascadia_code_nf.variable} ${cascadia_mono_nf.variable}`}>
                <ThemeProvider>
                    <Header />
                    <div className={"flex justify-center mt-header-h px-screen-x-default md:px-screen-x-md"}>
                        <div className={"relative w-full md:grid md:grid-cols-[theme(spacing.sidebar-w-md)_auto] md:gap-[32px] md:max-w-main-md lg:grid-cols-[theme(spacing.sidebar-w-lg)_auto]"}>
                            <Sidebar />
                            <main id={"doc"} className={"flex flex-col gap-[32px] py-[96px] overflow-auto"}>
                                { children }
                                <Analytics />
                            </main>
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
