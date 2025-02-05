import {HTMLAttributes} from "react";
import MDXClient from "@/components/common/MDXClient";
import Icon from "@/components/common/Icon";

interface DetailsProps extends HTMLAttributes<HTMLDetailsElement> {
    summary: string;
}

export default function Details({children, summary, ...p}: DetailsProps) {
    return (
        <details className={"border-y border-y-layer1 overflow-clip"}>
            <summary className={"flex justify-between items-center gap-[8px] p-[8px_12px] [details[open]_&]:border-b [details[open]_&]:border-b-layer1"}>
                <MDXClient source={summary} />
                <Icon icon={"ArrowIcon"} className={"w-[16px] h-[16px] stroke-default [details[open]_&]:rotate-[90deg]"} />
            </summary>
            <div className="flex flex-col gap-[16px] w-full overflow-auto p-[12px] bg-layer1">
                {children}
            </div>
        </details>
    );
}