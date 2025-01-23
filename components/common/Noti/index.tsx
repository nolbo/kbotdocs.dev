import {HTMLAttributes} from "react";
import Icon from "@/components/common/Icon";

interface INoti extends HTMLAttributes<HTMLDivElement> {
    type: "warning" | "danger" | "deprecated" | "experimental" | "nonStandard" | "success" | "info";
}

export default function Noti({ children, className, type, title, ...p } : INoti) {
    let header;
    let blockStyle = "";

    switch (type) {
        case "warning":
            header = (
                <>
                    <Icon icon={"WarningFillIcon"} className={"fill-yellow w-[1rem] h-[1rem]"}/>
                    <p className={"font-bold text-yellow-default"}>{ title || "주의" }</p>
                </>
            )
            blockStyle = "text-sm bg-yellow-layer1 text-yellow-default";
            break;
        case "danger":
            header = (
                <>
                    <Icon icon={"DangerFillIcon"} className={"fill-red w-[1rem] h-[1rem]"}/>
                    <p className={"font-bold text-red-default"}>{ title || "경고" }</p>
                </>
            )
            blockStyle = "text-sm bg-red-layer1 text-red-default";
            break;
        case "deprecated":
            header = (
                <>
                    <Icon icon={"DeprecatedIcon"} className={"stroke-red w-[1rem] h-[1rem]"}/>
                    <p className={"font-bold text-red-default"}>{ title || "지원중단됨" }</p>
                </>
            )
            blockStyle = "text-sm bg-red-layer1 text-red-default";
            break;
        case "experimental":
            header = (
                <>
                    <Icon icon={"ExperimentalIcon"} className={"stroke-blue w-[1rem] h-[1rem]"}/>
                    <p className={"font-bold text-blue-default"}>{ title || "실험적" }</p>
                </>
            )
            blockStyle = "text-sm bg-blue-layer1 text-blue-default";
            break;
        case "nonStandard":
            header = (
                <>
                    <Icon icon={"NonStandardIcon"} className={"stroke-yellow w-[1rem] h-[1rem]"}/>
                    <p className={"font-bold text-yellow-default"}>{ title || "비표준" }</p>
                </>
            )
            blockStyle = "text-sm bg-yellow-layer1 text-yellow-default";
            break;
        case "success":
            header = (
                <>
                    <Icon icon={"SuccessFillIcon"} className={"fill-green w-[1rem] h-[1rem]"}/>
                    <p className={"font-bold text-green-default"}>{ title || "성공" }</p>
                </>
            )
            blockStyle = "text-sm bg-green-layer1 text-green-default";
            break;
        case "info":
            header = (
                <>
                    <Icon icon={"InformationFillIcon"} className={"fill-blue w-[1rem] h-[1rem]"}/>
                    <p className={"font-bold text-blue-default"}>{ title || "정보" }</p>
                </>
            )
            blockStyle = "text-sm bg-blue-layer1 text-blue-default";
            break;
        default:
            blockStyle = "text-sm bg-layer1";
    }

    return (
        <div className={`flex flex-col gap-[4px] p-[8px_12px] rounded-[6px] leading-normal md:p-[12px_16px] ${blockStyle} ${className}`} {...p}>
            <div className={"flex items-center gap-[6px]"}>
                { header }
            </div>
            {children && (<div>{children}</div>)}
        </div>
    )
}