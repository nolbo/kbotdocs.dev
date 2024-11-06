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
        <div className={"overflow-clip min-w-[0] rounded-[8px] border border-[var(--sthl-pre-border)]"}>
            <div className={"flex justify-between items-center gap-[8px] box-border z-[1] p-[4px_16px] h-[32px] rounded text-sm text-description bg-default"}>
                <p className={"font-mono"}>{ language.toUpperCase() }</p>
                <Icon
                    icon={ (isCopied) ? "CheckIcon" : "CopyIcon" } onClick={ () => { CopyIconOnClickHandler(content) } }
                    className={`rounded-sm w-[12px] h-[12px] ${(isCopied) ? "stroke-green-500" : "stroke-[theme(textColor.description)]"} cursor-pointer transition-[stroke] duration-default ${(isCopied) ? "hover:stroke-green-500" : "hover:stroke-[theme(textColor.noimportance)]"}`} />
            </div>
            <SyntaxHighlighter language={ language } style={ sthlTheme }>
                { content }
            </SyntaxHighlighter>
        </div>
    );
}