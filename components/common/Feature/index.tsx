import {HTMLAttributes} from "react";
import FeatureStatusIcon from "@/components/common/FeatureStatusIcon";

interface IFeature extends HTMLAttributes<HTMLSpanElement> {
    featureStatus?: FeatureStatus;
}

export default function Feature({featureStatus, className, children, ...p}: IFeature) {
    return (
        <span className={`[&>*]:align-middle`} {...p}>
            {Object.values(featureStatus || {}).includes(true) &&
                <FeatureStatusIcon featureStatus={featureStatus || {}} className={"mr-[4px]"}/>}
            <span className={"inline [&>p]:inline"}>{children}</span>
        </span>
    );
}