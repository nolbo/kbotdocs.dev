"use client";

import Sidebar from "@/components/common/Sidebar";
import { Docs } from "@/constants/mdxDocs";

export default function Page({ params }: { params: { id: string } }) {

    return (
        <div className={"flex justify-center mt-header-h px-screen-x-default md:px-screen-x-md"}>
            <div className={"relative w-full md:grid md:grid-cols-[225px_auto] md:gap-[32px] md:max-w-main-md"}>
                <Sidebar params={params} />
                <main className={"flex flex-col gap-[32px] py-[96px] overflow-auto"}>
                    { Docs.find(e => e.value === `/${params.id}`)?.doc({}) }
                </main>
            </div>
        </div>
    );
}
