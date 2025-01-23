import Icon from "@/components/common/Icon";
import MDXClient from "@/components/common/MDXClient";
import DetailedStatusIcon from "@/components/common/DetailedStatusIcon";
import {CompatibilityStatus} from "@/constants/compatibility";

export default function AppCompatHistoryItem({history}: {history: CompatibilityHistory}) {
    const description = (
        Array.isArray(history.description) ?
            history.description.map((d, i) => (
                <dd key={i}>
                    <div className={"flex items-start gap-[12px]"}>
                        <div className={"flex items-center rounded-[1rem] my-[calc((theme(fontSize.sm)*1.75-1rem)/2)] bg-default"}><Icon icon={"MarkerIcon"} className={"w-[1rem] h-[1rem] fill-gray stroke-[theme(backgroundColor.default)]"} /></div>
                        <div className={"text-sm"}><MDXClient source={d} key={i} /></div>
                    </div>
                </dd>
            ))
            :
            <dd>
                <div className={"flex items-start gap-[12px]"}>
                    <div className={"flex items-center rounded-[1rem] my-[calc((theme(fontSize.sm)*1.75-1rem)/2)] bg-default"}><Icon icon={"MarkerIcon"} className={"w-[1rem] h-[1rem] fill-gray stroke-[theme(backgroundColor.default)]"} /></div>
                    <div className={"text-sm"}><MDXClient source={history.description} /></div>
                </div>
            </dd>
    );

    switch (history.status) {
        case CompatibilityStatus.FULL_SUPPORT:
            return (
                <div className={"flex flex-col gap-[12px]"}>
                    <dt>
                        <div className={"flex items-start gap-[12px]"}>
                            <div title={"완전 지원"} className={"flex items-center rounded-[1rem] my-[calc((theme(fontSize.sm)*1.75-1rem)/2)] bg-default"}><Icon icon={"SuccessFillIcon"} className={"w-[1rem] h-[1rem] fill-green"} /></div>
                            <p className={"text-sm text-green-default font-semibold"}>{history.version}</p>
                            <div className={"flex items-center rounded-[1rem] my-[calc((theme(fontSize.sm)*1.75-.875rem)/2)] bg-default"}><DetailedStatusIcon detailedStatus={history.detailedStatus} /></div>
                        </div>
                    </dt>
                    {
                        !history.detailedStatus?.bug && (
                            <dd>
                                <div className={"flex items-start gap-[12px]"}>
                                    <div className={"flex items-center rounded-[1rem] my-[calc((theme(fontSize.sm)*1.75-1rem)/2)] bg-default"}><Icon icon={"MarkerIcon"} className={"w-[1rem] h-[1rem] fill-gray stroke-[theme(backgroundColor.default)]"} /></div>
                                    <p className={"text-sm"}>완전 지원</p>
                                </div>
                            </dd>
                        )
                    }
                    { history.description && description }
                </div>
            );
        case CompatibilityStatus.PARTIAL_SUPPORT:
            return (
                <div className={"flex flex-col gap-[12px] [&_dd,&_dt]:relative"}>
                    <dt>
                        <div className={"flex items-start gap-[12px]"}>
                            <div title={"일부 지원"} className={"flex items-center rounded-[1rem] my-[calc((theme(fontSize.sm)*1.75-1rem)/2)] bg-default"}><Icon icon={"PartialFillIcon"} className={"w-[1rem] h-[1rem] fill-yellow"} /></div>
                            <p className={"text-sm text-yellow-default font-semibold"}>{history.version}</p>
                            <div className={"flex items-center rounded-[1rem] my-[calc((theme(fontSize.sm)*1.75-.875rem)/2)] bg-default"}><DetailedStatusIcon detailedStatus={history.detailedStatus} /></div>
                        </div>
                    </dt>
                    <dd>
                        <div className={"flex items-start gap-[12px]"}>
                            <div className={"flex items-center rounded-[1rem] my-[calc((theme(fontSize.sm)*1.75-1rem)/2)] bg-default"}><Icon icon={"MarkerIcon"} className={"w-[1rem] h-[1rem] fill-gray stroke-[theme(backgroundColor.default)]"} /></div>
                            <p className={"text-sm"}>일부 지원</p>
                        </div>
                    </dd>
                    { history.description && description }
                </div>
            );
        case CompatibilityStatus.NO_SUPPORT:
            return (
                <div className={"flex flex-col gap-[12px] [&_dd,&_dt]:relative"}>
                    <dt>
                        <div className={"flex items-start gap-[12px]"}>
                            <div title={"미지원"} className={"flex items-center rounded-[1rem] my-[calc((theme(fontSize.sm)*1.75-1rem)/2)] bg-default"}><Icon icon={"CancelFillIcon"} className={"w-[1rem] h-[1rem] fill-red"} /></div>
                            <p className={"text-sm text-red-default font-semibold"}>{history.version || "No"}</p>
                            <div className={"flex items-center rounded-[1rem] my-[calc((theme(fontSize.sm)*1.75-.875rem)/2)] bg-default"}><DetailedStatusIcon detailedStatus={history.detailedStatus} /></div>
                        </div>
                    </dt>
                    <dd>
                        <div className={"flex items-start gap-[12px]"}>
                            <div className={"flex items-center rounded-[1rem] my-[calc((theme(fontSize.sm)*1.75-1rem)/2)] bg-default"}><Icon icon={"MarkerIcon"} className={"w-[1rem] h-[1rem] fill-gray stroke-[theme(backgroundColor.default)]"} /></div>
                            <p className={"text-sm"}>미지원</p>
                        </div>
                    </dd>
                    { history.description && description }
                </div>
            );
    }
}