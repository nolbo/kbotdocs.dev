import Icon from "@/components/common/Icon";

export default function DetailedStatusIcon({detailedStatus, seeHistory}: {detailedStatus?: DetailedStatus, seeHistory?: boolean}) {
    return (
        <div className={"flex items-center gap-[6px]"}>
            { detailedStatus?.bug && (<div title={"버그가 존재합니다."}><Icon icon={"BugIcon"} className={"w-[.875rem] h-[.875rem] stroke-emphasis"} /></div>) }
            { detailedStatus?.seeImpl && (<div title={"구현 내역을 확인하세요."}><Icon icon={"SeeIcon"} className={"w-[.875rem] h-[.875rem] stroke-emphasis"} /></div>) }
            { seeHistory && (<div title={"지원 역사를 확인하세요."}><Icon icon={"MoreIcon"} className={"w-[.875rem] h-[.875rem] fill-emphasis"} /></div>) }
        </div>
    );
}