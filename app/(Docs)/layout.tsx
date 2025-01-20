import TOC from "@/components/common/TOC";
import React from "react";

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <div className={"flex justify-center mt-header-h px-screen-x-default md:px-screen-x-md"}>
            <div
                className={"relative w-full md:grid md:grid-cols-[theme(spacing.sidebar-w-md)_auto] md:gap-[32px] md:max-w-main-md lg:grid-cols-[theme(spacing.sidebar-w-lg)_auto]"}>
                <aside className={`w-auto h-auto pt-[32px] bg-default md:px-0 md:py-0 md:h-full`}>
                    <div
                        className={`w-full h-auto box-border md:fixed md:top-[160px] md:px-0 md:w-sidebar-w-md md:max-h-[calc(100vh-160px-64px)] lg:w-sidebar-w-lg`}>
                        <div className={"w-full h-full"}>
                            <TOC />
                        </div>
                    </div>
                </aside>
                <main id={"doc"} className={"flex flex-col gap-[32px] pt-[32px] pb-header-main overflow-auto md:py-header-main"}>
                    {children}
                </main>
            </div>
        </div>
    );
}
