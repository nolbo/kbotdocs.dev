"use client";

import React, {ChangeEvent, useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import Select from "@/components/common/Select";
import TOC from "@/components/common/TOC";
import { Docs } from "@/constants";
import IconButton from "@/components/common/IconButton";

export default function Sidebar({ params }: { params: { id: string } }) {
    const [ isTOCShowed, setIsTOCShowed ] = useState<boolean>(false);

    const router = useRouter();

    const SelectOnChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target) {
            router.push(e.target.value);
        }
    };

    return (
        <aside className={`fixed top-0 left-0 mt-header-h w-full ${(isTOCShowed) ? "h-[calc(100vh-theme(height.header-h))] bg-default" : "h-auto bg-transparent"} md:static md:px-0 md:w-auto md:h-full`}>
            <div className={`flex justify-start items-center gap-[8px] px-screen-x-default-corrected w-full h-[48px] bg-default md:hidden`}>
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
                        Docs.map((e) => (
                            <option key={e.value} value={e.value}>{e.label}</option>
                        ))
                    }
                </Select>
                <div className={"overflow-auto"} onClick={() => { setIsTOCShowed(false) }}>
                    <TOC />
                </div>
            </div>
        </aside>
    );
}