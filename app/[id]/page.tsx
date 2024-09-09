"use client";

import React, {useState, ChangeEvent, ReactElement, useRef, useEffect} from "react";
import { useRouter } from "next/navigation";
import Select from "@/components/common/Select";
import TOC from "@/components/common/TOC";
import Sidebar from "@/components/common/Sidebar";
import Summary from "@/markdown/Summary.mdx";
import LegacyAPI from "@/markdown/LegacyAPI.mdx";
import API2 from "@/markdown/API2.mdx";
import Advanced from "@/markdown/Advanced.mdx";

export default function Page({ params }: { params: { id: string } }) {
    const [ isTOCShowed, setIsTOCShowed ] = useState<boolean>(false);

    const router = useRouter();
    const Docs: { label: string, value: DocPath, doc: ReactElement }[] = [
        { label: "개요", value: "/summary", doc: <Summary /> },
        { label: "레거시 API", value: "/legacy", doc: <LegacyAPI /> },
        { label: "API2", value: "/api2", doc: <API2 /> },
        { label: "심화", value: "/advanced", doc: <Advanced /> }
    ];

    return (
        <div className={"flex justify-center mt-header-h px-screen-x-default md:px-screen-x-md"}>
            <div className={"relative w-full md:grid md:grid-cols-[225px_auto] md:gap-[32px] md:max-w-main-md"}>
                <Sidebar params={params} />
                <main className={"flex flex-col gap-[32px] py-[96px] overflow-auto"}>
                    { Docs.find(e => e.value === `/${params.id}`)?.doc }
                </main>
            </div>
        </div>
    );
}
