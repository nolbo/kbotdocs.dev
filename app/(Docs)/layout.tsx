import TOC from "@/components/common/TOC";
import React from "react";

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <div className={"flex justify-center mt-header-h px-screen-x-default md:px-screen-x-md"}>
            <div
                className={"relative w-full lg:grid lg:gap-[32px] lg:max-w-main-md lg:grid-cols-[theme(spacing.sidebar-w-lg)_auto]"}>
                <aside className={`w-auto h-auto pt-[32px] bg-default lg:px-0 lg:py-0 lg:h-full`}>
                    <div
                        className={`w-full h-auto box-border lg:fixed lg:top-[160px] lg:px-0 lg:max-h-[calc(100vh-160px-64px)] lg:w-sidebar-w-lg`}>
                        <div className={"w-full h-full"}>
                            <TOC />
                        </div>
                    </div>
                </aside>
                <main id={"doc"} className={"flex flex-col gap-[32px] pt-[32px] pb-header-main overflow-auto lg:py-header-main"}>
                    {children}
                </main>
            </div>
        </div>
    );
}
