"use client";

interface IKeycap {
    keytext: string;
}
export default function Keycap({ keytext } : IKeycap) {
    return (
        <code className={"p-[0_4px] text-sm rounded border border-default-hover font-mono"}>{ keytext }</code>
    );
}