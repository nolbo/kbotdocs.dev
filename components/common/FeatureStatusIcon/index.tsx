import {HTMLAttributes} from "react";
import Icon from "@/components/common/Icon";

interface IFeatureStatusIcon extends HTMLAttributes<HTMLDivElement> {
    featureStatus: FeatureStatus;
}

export default function FeatureStatusIcon({featureStatus, className}: IFeatureStatusIcon) {
    return (
        <span className={`inline-flex items-center gap-[6px] ${className || ""}`}>
            {featureStatus.deprecated && (
                <span title={"지원중단되었습니다."}>
                    <Icon icon={"DeprecatedIcon"} className={"w-[1rem] h-[1rem] stroke-red"}/>
                </span>
            )}
            {featureStatus.experimental && (
                <span title={"실험적입니다."}>
                    <Icon icon={"ExperimentalIcon"} className={"w-[1rem] h-[1rem] stroke-blue"}/>
                </span>
            )}
            {featureStatus.nonStandard && (
                <span title={"비표준입니다."}>
                    <Icon icon={"NonStandardIcon"} className={"w-[1rem] h-[1rem] stroke-yellow"}/>
                </span>
            )}
        </span>
    );
}