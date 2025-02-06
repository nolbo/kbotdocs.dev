import {HTMLAttributes} from "react";
import Link from "next/link";
import Icon from "@/components/common/Icon";

interface MileStoneProps extends HTMLAttributes<HTMLDivElement> {
    previous?: Doc;
    next?: Doc;
}

export default function MileStone({previous, next}: MileStoneProps) {
    return (
        <div className={"grid grid-rows-2 gap-[16px] md:grid-rows-none md:grid-cols-2"}>
            <div className={`${previous ? "block" : "hidden"} md:block`}>
                {
                    previous && (
                        <Link href={previous.path || "#"}
                              className={"flex items-center gap-[16px] p-[12px_16px] rounded-lg hover:no-underline hover:bg-default-hover hover:bg-gradient-to-r hover:from-[theme(backgroundColor.layer2)] hover:to-[theme(backgroundColor.default)]"}>
                            <Icon icon={"ArrowIcon"} className={"w-[1rem] h-[1rem] stroke-default rotate-[180deg]"}/>
                            <div className={"flex flex-col gap-[4px]"}>
                                <p className={"font-bold text-default"}>이전</p>
                                <p>{previous.label}</p>
                            </div>
                        </Link>
                    )
                }
            </div>
            <div className={`${next ? "block" : "hidden"} md:block`}>
                {
                    next && (
                        <Link href={next.path || "#"}
                              className={"flex flex-row-reverse items-center gap-[16px] p-[12px_16px] rounded-lg hover:no-underline hover:bg-gradient-to-l hover:from-[theme(backgroundColor.layer2)] hover:to-[theme(backgroundColor.default)]"}>
                            <Icon icon={"ArrowIcon"} className={"w-[1rem] h-[1rem] stroke-default"}/>
                            <div className={"flex flex-col items-end gap-[4px]"}>
                                <p className={"font-bold text-default"}>다음</p>
                                <p>{next.label}</p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}