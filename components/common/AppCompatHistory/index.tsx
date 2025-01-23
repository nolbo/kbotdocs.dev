import {HTMLAttributes} from "react";
import AppCompatHistoryItem from "@/components/common/AppCompatHistoryItem";

interface IAppCompatibilityHistory extends HTMLAttributes<HTMLElement> {
    history: CompatibilityHistory[];
}

export default function AppCompatibilityHistory({ history }: IAppCompatibilityHistory) {
    return (
        <div className={
            "relative flex flex-col gap-[12px] [&_dt]:relative [&_dd]:relative " +
            "before:content-[''] before:absolute before:z-[-1] before:top-[calc(1rem/2)] before:left-[calc(1rem/2-1px)] before:w-[2px] before:h-[calc(100%-1rem)] before:bg-gray " +
            "[&>:last-child>:last-child:before]:content-[''] [&>:last-child>:last-child:before]:absolute [&>:last-child>:last-child:before]:z-[-1] [&>:last-child>:last-child:before]:top-[calc(((theme(fontSize.sm)*1.75-1rem)/2)+.5rem)] [&>:last-child>:last-child:before]:left-[calc(1rem/2-2px)] [&>:last-child>:last-child:before]:w-[4px] [&>:last-child>:last-child:before]:h-[calc(100%-1rem)] [&>:last-child>:last-child:before]:bg-default"
        }>
            {
                history.map((h: CompatibilityHistory, i) => (
                    <AppCompatHistoryItem key={i} history={h} />
                ))
            }
        </div>
    );
}