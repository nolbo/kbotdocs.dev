"use client";

import Icon from "@/components/common/Icon";

export default function Footer() {
    return (
        <footer className={"flex justify-center items-center gap-[8px] w-full h-footer-default text-gray transition-[fill,color] duration-default xl:max-w-main-md lg:h-footer-lg"}>
            <Icon icon={"NolboIcon"} className={"fill-gray w-[24px] h-[24px]"} />
        </footer>
    );
}