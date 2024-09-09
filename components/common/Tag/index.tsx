"use client";

import { HTMLAttributes } from "react";
import Markdown from "@/components/common/Markdown";

interface ITag extends HTMLAttributes<HTMLDivElement> {
    tag: string;
}

export default function Tag({ tag, ...props } : ITag) {
    return (
        <div className={`p-[1px_6px] rounded-[6px] bg-emphasis w-fit text-sm font-sans font-semibold`}>
            { tag }
        </div>
    );
}