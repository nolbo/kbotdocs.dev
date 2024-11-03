"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Select from "@/components/common/Select";
import TOC from "@/components/common/TOC";
import { Docs, Guide, NoGroup, Reference } from "@/constants/mdxDocs";
import IconButton from "@/components/common/IconButton";

export default function Sidebar() {
    const [ isTOCShowed, setIsTOCShowed ] = useState<boolean>(false);

    const router = useRouter();
    const params = useParams<{ id: string }>();

    const SelectOnChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target) {
            router.push(e.target.value);
        }
    };

    useEffect(() => {
        if (isTOCShowed) {
            document.body.style.cssText = `
                position: fixed; 
                top: -${window.scrollY}px;
                overflow-y: scroll;
                width: 100%;
            `;
        }
        else {
            const scrollY = document.body.style.top;
            document.body.style.cssText = "";
            window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
        }
    }, [isTOCShowed]);

    return (
        <aside className={`fixed top-0 left-0 mt-header-h w-full ${(isTOCShowed) ? "h-[calc(100vh-theme(height.header-h))] bg-default" : "h-auto bg-transparent"} md:static md:px-0 md:w-auto md:h-full`}>
            <div className={`flex justify-start items-center gap-[8px] px-screen-x-default w-full h-[48px] bg-default md:hidden`}>
                <IconButton icon={(isTOCShowed) ? "CancelIcon" : "HamburgerButtonIcon"} onClick={() => {
                    setIsTOCShowed(v => !v)
                }} />
                <p className={`${(isTOCShowed) ? "hidden" : "block"} text-sm font-bold`}>{ Docs.find(e => e.value === `/${params.id}`)?.label }</p>
            </div>
            <div
                className={`w-full flex-col gap-[24px] ${(isTOCShowed) ? "flex" : "hidden"} px-screen-x-default box-border h-auto max-h-[calc(100vh-64px-64px-48px)] md:fixed md:top-[160px] md:flex md:px-0 md:w-[225px] md:max-h-[calc(100vh-160px-64px)]`}>
                <Select defaultValue={`/${params.id}`}
                        onChange={SelectOnChangeHandler}>
                    {
                            NoGroup.map((e) => (
                                <option key={e.value} value={e.value}>{e.label}</option>
                            ))
                        }
                    <optgroup label="가이드">
                        {
                            Guide.map((e) => (
                                <option key={e.value} value={e.value}>{e.label}</option>
                            ))
                        }
                    </optgroup>
                    <optgroup label="레퍼런스">
                        {
                            Reference.map((e) => (
                                <option key={e.value} value={e.value}>{e.label}</option>
                            ))
                        }
                    </optgroup>
                </Select>
                <div className={"overflow-auto"} onClick={() => { setIsTOCShowed(false) }}>
                    <TOC />
                </div>
            </div>
        </aside>
    );
}