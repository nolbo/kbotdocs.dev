"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { sthlTheme } from "@/styles/syntaxHighlighter";
import Icon from "@/components/common/Icon";

interface ICodeBlock {
    language: string;
    content: string;
}

export default function CodeBlock({ language, content } : ICodeBlock) {
    const [ isCopied, setIsCopied ] = useState<boolean>(false);

    const CopyIconOnClickHandler = (copyContent: string) => {
        window.navigator.clipboard.writeText(copyContent)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => { setIsCopied(false) }, 2000);
            });
    };

    return (
        <div className={"relative overflow-clip min-w-[0] rounded-[8px] border border-[var(--sthl-pre-border)] [&:hover>:first-child]:opacity-100"}>
            <div className={"absolute z-[1] top-[6px] right-[6px] flex justify-between items-center rounded overflow-clip border-[1px] border-default bg-default opacity-0 transition-opacity duration-[.2s]"}>
                <div className={"flex justify-center items-center px-[8px] h-[32px] rounded text-sm text-description"}>
                    <p className={"font-mono"}>{ language.toUpperCase() }</p>
                </div>
                <button
                    onClick={ () => { CopyIconOnClickHandler(content) }}
                    className={`flex justify-center items-center bg-layer2 w-[32px] h-[32px] rounded hover:bg-layer2-hover ${(isCopied) ? "stroke-green" : "stroke-default hover:stroke-default-hover"}`}>
                    <Icon
                        icon={ (isCopied) ? "CheckIcon" : "CopyIcon" }
                        className={`w-[14px] h-[14px] transition-[stroke]`} />
                </button>
            </div>
            <SyntaxHighlighter language={ language } style={ sthlTheme }>
                { content }
            </SyntaxHighlighter>
        </div>
    );
}