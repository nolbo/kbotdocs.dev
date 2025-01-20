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
                    <p className={"font-bold"}>{ title || "주의" }</p>
                </>
            )
            blockStyle = "bg-yellow-default border-yellow-default";
            break;
        case "danger":
            header = (
                <>
                    <Icon icon={"DangerFillIcon"} className={"fill-red w-[1rem] h-[1rem]"}/>
                    <p className={"font-bold"}>{ title || "경고" }</p>
                </>
            )
            blockStyle = "bg-red-default border-red-default";
            break;
        case "deprecated":
            header = (
                <>
                    <Icon icon={"DeprecatedIcon"} className={"stroke-red w-[1rem] h-[1rem]"}/>
                    <p className={"font-bold"}>{ title || "지원중단됨" }</p>
                </>
            )
            blockStyle = "bg-red-default border-red-default";
            break;
        case "experimental":
            header = (
                <>
                    <Icon icon={"ExperimentalIcon"} className={"stroke-blue w-[1rem] h-[1rem]"}/>
                    <p className={"font-bold"}>{ title || "실험적" }</p>
                </>
            )
            blockStyle = "bg-blue-default border-blue-default dark:[&_a]:text-green dark:[&_a:visited]:text-purple";
            break;
        case "nonStandard":
            header = (
                <>
                    <Icon icon={"WarningIcon"} className={"stroke-yellow w-[1rem] h-[1rem]"}/>
                    <p className={"font-bold"}>{ title || "비표준" }</p>
                </>
            )
            blockStyle = "bg-yellow-default border-yellow-default";
            break;
        case "success":
            header = (
                <>
                    <Icon icon={"SuccessFillIcon"} className={"fill-green w-[1rem] h-[1rem]"}/>
                    <p className={"font-bold"}>{ title || "성공" }</p>
                </>
            )
            blockStyle = "bg-green-default border-green-default";
            break;
        case "info":
            header = (
                <>
                    <Icon icon={"InformationFillIcon"} className={"fill-blue w-[1rem] h-[1rem]"}/>
                    <p className={"font-bold"}>{ title || "정보" }</p>
                </>
            )
            blockStyle = "bg-blue-default border-blue-default dark:[&_a]:text-green dark:[&_a:visited]:text-purple";
            break;
        default:
            blockStyle = "bg-default-hover border-default-hover";
    }

    return (
        <div className={`flex flex-col gap-[4px] p-[8px_12px] rounded-[6px] border leading-normal md:p-[12px_16px] ${blockStyle} ${className}`} {...p}>
            <div className={"flex items-center gap-[6px]"}>
                { header }
            </div>
            {children && (<div>{children}</div>)}
        </div>
    )
}