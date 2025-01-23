import Icon from "@/components/common/Icon";

export default function FeatureStatusIcon({featureStatus}: { featureStatus: FeatureStatus }) {
    return (
        <div className={"flex items-center gap-[6px]"}>
            {featureStatus.deprecated && (
                <div title={"지원중단되었습니다."}>
                    <Icon icon={"DeprecatedIcon"} className={"w-[1rem] h-[1rem] stroke-red"}/>
                </div>
            )}
            {featureStatus.experimental && (
                <div title={"실험적입니다."}>
                    <Icon icon={"ExperimentalIcon"} className={"w-[1rem] h-[1rem] stroke-blue"}/>
                </div>
            )}
            {featureStatus.nonStandard && (
                <div title={"비표준입니다."}>
                    <Icon icon={"WarningIcon"} className={"w-[1rem] h-[1rem] stroke-yellow"}/>
                </div>
            )}
        </div>
    );
}