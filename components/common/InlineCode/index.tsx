"use client";

import { HTMLAttributes } from "react";

interface IInlineCode extends HTMLAttributes<HTMLDivElement> {

}

export default function InlineCode({ children } : IInlineCode) {
    return (
        <code className={"text-rel-sm font-mono"}>{ children }</code>
    );
}