"use client";

import {Suspense, useEffect, useRef} from "react";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import ThemeButton from "@/components/common/ThemeButton";
import IconButton from "@/components/common/IconButton";
import PageTree from "@/components/common/PageTree";
import {MDXRemote} from "next-mdx-remote/rsc";
import MDXClient from "@/components/common/MDXClient";
import {usePathname} from "next/navigation";

export default function Header() {
    const scrollTo = useRef<number>(0);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const pathname = usePathname();

    const hamburgerButtonOnClickHandler = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();

            document.body.style.cssText = `
                position: fixed;
                top: -${window.scrollY}px;
                overflow-y: ${(window.innerHeight <= document.body.scrollHeight) ? "scroll" : "auto"};
                width: 100%;
            `;
            scrollTo.current = parseInt(document.body.style.top || "0", 10) * -1;
        }
    };

    const cancelButtonOnClickHandler = () => {
        document.body.style.cssText = "";
        window.scrollTo(0, scrollTo.current);

        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    useEffect(() => {
        if (dialogRef.current) {
            if (dialogRef.current.open) {
                document.body.style.cssText = "";
                window.scrollTo(0, 0);
                dialogRef.current.close();
            }
        }
    }, [pathname]);

    return (
        <header className={"flex justify-center items-center fixed top-0 left-0 z-[2] w-full h-header bg-default border-b border-b-default px-screen-x-default md:px-screen-x-md"}>
            <div
                className={"flex flex-row justify-between p-none gap-[16px] box-border w-full h-full md:max-w-main-md"}>
                <div className={"flex items-center gap-[12px]"}>
                    <Link href={"/"}>
                        <Icon icon={"PidocIcon"}
                              className={"flex items-center ml-[9px] w-[28px] h-[28px] fill-logo md:w-[32px] md:h-[32px]"} />
                    </Link>
                </div>
                <div className={"flex items-center gap-[12px]"}>
                    <ThemeButton />
                    <IconButton icon={"HamburgerButtonIcon"} onClick={hamburgerButtonOnClickHandler} />
                </div>
            </div>
            <dialog
                ref={dialogRef}
                className={"fixed top-0 bottom-auto left-auto right-0 [&:modal]:max-h-screen [&::backdrop]:bg-default [&::backdrop]:opacity-75"}>
                <div className={"grid grid-rows-[theme(height.header)_auto] w-[320px] h-screen rounded-[16px_0_0_16px] border-[1px] border-default border-r-[0px] bg-default"}>
                    <div className={"flex justify-end items-center px-[16px]"}>
                        <IconButton icon={"CancelIcon"} onClick={cancelButtonOnClickHandler} />
                    </div>
                    <div className={"flex-1 p-[16px] overflow-auto"}>
                        <PageTree />
                    </div>
                </div>
            </dialog>
        </header>
    );
}
