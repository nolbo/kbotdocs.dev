"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import TOC from "@/components/common/TOC";
import PageTree from "@/components/common/PageTree";
import IconButton from "@/components/common/IconButton";
import Tab from "@/components/common/Tab";

export default function Sidebar() {
    const [ isTOCShowed, setIsTOCShowed ] = useState<boolean>(false);
    const scrollTo = useRef<number>(0);
    const path = usePathname();

    useEffect(() => {
        if (isTOCShowed) {
            document.body.style.cssText = `
                position: fixed; 
                top: -${window.scrollY}px;
                overflow-y: scroll;
                width: 100%;
            `;
            scrollTo.current = parseInt(document.body.style.top || "0", 10) * -1;
        }
        else {
            document.body.style.cssText = "";
            window.scrollTo(0, scrollTo.current);
        }
    }, [isTOCShowed]);

    return (
        <aside className={`fixed top-0 left-0 z-[1] mt-header-h w-full ${(isTOCShowed) ? "h-[calc(100vh-theme(height.header-h))] bg-default" : "h-auto bg-transparent"} md:static md:px-0 md:w-auto md:h-full`}>
            <div
                className={`w-full h-full flex-col gap-[24px] ${(isTOCShowed) ? "flex" : "hidden"} px-screen-x-default box-border h-auto max-h-[calc(100vh-64px-64px-48px)] md:fixed md:top-[160px] md:flex md:px-0 md:w-sidebar-w-md md:max-h-[calc(100vh-160px-64px)] lg:w-sidebar-w-lg`}>
                <div className={"w-full h-full"}>
                    <PageTree onLinkClick={() => { setIsTOCShowed(false) }} className={"pt-[16px]"} />
                </div>
            </div>
        </aside>
    );
}