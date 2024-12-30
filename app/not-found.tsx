"use client";

import { useTheme } from "next-themes";
import NotFound_Dark from "@/public/illust/NotFound_Dark.svg";
import NotFound_Light from "@/public/illust/NotFound_Light.svg";

export default function NotFound() {
    const { theme } = useTheme();

    return (
        <div className={"flex justify-center px-screen-x-default md:px-screen-x-md"}>
            <div className={"w-full h-full md:max-w-main-md"}>
                <div
                    className={"flex flex-col justify-center items-center h-full"}>
                    <div className={"flex items-center gap-[24px]"}>
                        {
                            (theme == "light") ? 
                                <NotFound_Light className={"w-[128px] h-[128px]"}/> 
                                :
                                <NotFound_Dark className={"w-[128px] h-[128px]"}/>
                        }
                        <div className={"flex flex-col justify-center gap-[8px]"}>
                            <div className={"flex items-center gap-[8px]"}>
                                <h2>404</h2>
                                <div className={"text-lg"}>Not Found</div>
                            </div>
                            <div className={"text-description"}>페이지를 찾을 수 없습니다.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}