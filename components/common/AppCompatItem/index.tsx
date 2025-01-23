"use client";

import {HTMLAttributes, useState} from "react";
import DetailedStatusIcon from "@/components/common/DetailedStatusIcon";
import FeatureStatusIcon from "@/components/common/FeatureStatusIcon";
import Icon from "@/components/common/Icon";
import {Td, Tr} from "@/components/common/Table";
import MDXClient from "@/components/common/MDXClient";
import {usePathname} from "next/navigation";
import Link from "next/link";
import AppCompatHistory from "@/components/common/AppCompatHistory";
import {CompatibilityStatus} from "@/constants/compatibility";

function AppCompatStatusIcon({history}: {history: CompatibilityHistory}) {
    switch (history.status) {
        case CompatibilityStatus.FULL_SUPPORT:
            return (
                <div title={"완전 지원"} className={"flex items-center gap-[8px] p-[2px_8px] rounded-[12px] bg-green-default"}>
                    <Icon icon={"CheckIcon"} className={"stroke-green w-[1rem] h-[1rem]"} />
                    <p className={"text-xs text-green-default font-semibold"}>{history.version}</p>
                </div>
            );
        case CompatibilityStatus.PARTIAL_SUPPORT:
            return (
                <div title={"일부 지원"} className={"flex items-center gap-[8px] p-[2px_8px] rounded-[12px] bg-yellow-default"}>
                    <Icon icon={"PartialIcon"} className={"stroke-yellow w-[1rem] h-[1rem]"} />
                    <p className={"text-xs text-yellow-default font-semibold"}>{history.version}</p>
                </div>
            );
        case CompatibilityStatus.NO_SUPPORT:
            return (
                <div title={"미지원"} className={"flex items-center gap-[8px] p-[2px_8px] rounded-[12px] bg-red-default"}>
                    <Icon icon={"CancelIcon"} className={"stroke-red w-[1rem] h-[1rem]"} />
                    <p className={"text-xs text-red-default font-semibold"}>{history.version || "No"}</p>
                </div>
            );
        default:
            return (<></>);
    }
}

interface IAppCompatItem extends HTMLAttributes<HTMLTableRowElement> {
    compat: Compatibility;
}

type AppName = "msgBot" | "autoReplyBot" | "starLight";

export default function AppCompatItem({ compat, ...p }: IAppCompatItem) {
    const pathname = usePathname();
    const [selected, setSelected] = useState<AppName | null>(null);
    const [history, setHistory] = useState<CompatibilityHistory[] | null>(null);

    const trOnClickHandler = (appName: AppName, h: CompatibilityHistory[]) => {
          if (selected === appName) {
              setSelected(null);
              setHistory(null);
          }
          else {
              setSelected(appName);
              setHistory(h);
          }
    };

    return (
        <>
            <Tr {...p}>
                <Td>
                    <div className={`flex items-center gap-[8px]`}>
                        { Object.values(compat.status).includes(true) && (<FeatureStatusIcon featureStatus={compat.status} />) }
                        <div className={"break-all"}>
                            {
                                ((pathname === compat.url) || !compat.url) ?
                                    <MDXClient source={compat.feature} />
                                    :
                                    <Link href={compat.url}><MDXClient source={compat.feature} /></Link>
                            }
                        </div>
                    </div>
                </Td>
                <Td className={`md:hover:bg-default-hover ${(selected === "msgBot") ? "md:border-b-emphasis md:border-b-[2px]" : ""}`} onClick={() => trOnClickHandler("msgBot", compat.support.msgBot)}>
                    <div className={`flex items-center gap-[8px] h-full`}>
                        <div><AppCompatStatusIcon history={compat.support.msgBot[compat.support.msgBot.length - 1]} /></div>
                        <p className="block md:hidden">메신저봇R</p>
                        <div><DetailedStatusIcon detailedStatus={compat.support.msgBot[compat.support.msgBot.length - 1].detailedStatus} seeHistory={(compat.support.msgBot.length > 1)} /></div>
                    </div>
                    {
                        history && (selected === "msgBot") && (
                            <div className={"ml-[8px] md:hidden"}>
                                <AppCompatHistory history={compat.support.msgBot}/>
                            </div>
                        )
                    }
                </Td>
                <Td className={`md:hover:bg-default-hover ${(selected === "autoReplyBot") ? "md:border-b-emphasis md:border-b-[2px]" : ""}`} onClick={() => trOnClickHandler("autoReplyBot", compat.support.autoReplyBot)}>
                    <div className={`flex items-center gap-[8px] h-full`}>
                        <div><AppCompatStatusIcon history={compat.support.autoReplyBot[compat.support.autoReplyBot.length - 1]} /></div>
                        <p className="block md:hidden">채팅 자동응답 봇</p>
                        <div><DetailedStatusIcon detailedStatus={compat.support.autoReplyBot[compat.support.autoReplyBot.length - 1].detailedStatus} seeHistory={(compat.support.autoReplyBot.length > 1)} /></div>
                    </div>
                    {
                        history && (selected === "autoReplyBot") && (
                            <div className={"ml-[8px] md:hidden"}>
                                <AppCompatHistory history={compat.support.autoReplyBot}/>
                            </div>
                        )
                    }
                </Td>
                <Td className={`md:hover:bg-default-hover ${(selected === "starLight") ? "md:border-b-emphasis md:border-b-[2px]" : ""}`} onClick={() => trOnClickHandler("starLight", compat.support.starLight)}>
                    <div className={`flex items-center gap-[8px] h-full`}>
                        <div><AppCompatStatusIcon history={compat.support.starLight[compat.support.starLight.length - 1]} /></div>
                        <p className="block md:hidden">StarLight</p>
                        <div><DetailedStatusIcon detailedStatus={compat.support.starLight[compat.support.starLight.length - 1].detailedStatus} seeHistory={(compat.support.starLight.length > 1)} /></div>
                    </div>
                    {
                        history && (selected === "starLight") && (
                            <div className={"ml-[8px] md:hidden"}>
                                <AppCompatHistory history={compat.support.starLight}/>
                            </div>
                        )
                    }
                </Td>
            </Tr>
            {
                history && (
                    <Tr className={"hidden md:table-row"}>
                        <Td></Td>
                        <Td colSpan={3}>
                            <div>
                                <AppCompatHistory history={history}/>
                            </div>
                        </Td>
                    </Tr>
                )
            }
        </>
    );
}