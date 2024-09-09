"use client";

import { useRouter } from "next/navigation";
import Icon from "@/components/common/Icon";
import ThemeButton from "@/components/common/ThemeButton";

export default function Header() {
    const router = useRouter();

    return (
        <header className={"flex justify-center items-center fixed top-0 left-0 z-[2] w-full h-header bg-default border-b border-b-default px-screen-x-default-corrected md:px-screen-x-md"}>
            <div
                className={"flex flex-row justify-between p-none gap-[16px] box-border w-full h-full md:max-w-main-md"}>
                <div className={"flex items-center gap-[12px]"}>
                    <div className={"cursor-pointer"}>
                        <Icon icon={"PidocIcon"}
                              onClick={ () => { router.push("/") } }
                              className={"flex items-center ml-[9px] w-[32px] h-[32px] fill-logo"} />
                    </div>
                </div>
                <div className={"flex items-center gap-[12px]"}>
                    <ThemeButton />
                </div>
            </div>
        </header>
);
}
