import { HTMLAttributes } from "react";
import { Compatibility } from "@/constants/compatibility";
import Icon from "@/components/common/Icon";
import { Tr, Td } from "@/components/common/Table";

interface IAppCompatibilityItem extends HTMLAttributes<HTMLTableRowElement> {
    msgBot: Compatibility;
    arBot: Compatibility;
    sl: Compatibility;
    deprecated: boolean;
    experimental: boolean;
    nonStandard: boolean;
}

function getIcon(compatibility: Compatibility) {
    return (
        (compatibility === Compatibility.FULL_SUPPORT) ?
            <Icon icon={"CheckIcon"} className={"stroke-green w-[1rem] h-[1rem]"} />
            :
            (compatibility === Compatibility.PARTIAL_SUPPORT) ?
                <Icon icon={"PartialIcon"} className={"stroke-yellow w-[1rem] h-[1rem]"} />
                :
                <Icon icon={"CancelIcon"} className={"stroke-red w-[1rem] h-[1rem]"} />
    );
}

export default function AppCompatibilityItem({ msgBot, arBot, sl, deprecated, experimental, nonStandard, children, ...props }: IAppCompatibilityItem) {
    return (
        <Tr { ...props }>
            <Td>
                <div className={`flex items-center gap-[8px]`}>
                    {
                        (deprecated || experimental || nonStandard) &&
                        (
                            <div className={"flex flex-col items-center gap-[6px]"}>
                                {
                                    deprecated && (<div title={"지원중단되었습니다."}><Icon icon={"DeprecatedIcon"} className={"w-[1rem] h-[1rem] stroke-red"} /></div>)
                                }
                                {
                                    experimental && (<div title={"실험 중입니다."}><Icon icon={"ExperimentalIcon"} className={"w-[1rem] h-[1rem] stroke-blue"} /></div>)
                                }
                                {
                                    nonStandard && (<div title={"비표준입니다."}><Icon icon={"WarningIcon"} className={"w-[1rem] h-[1rem] stroke-yellow"} /></div>)
                                }
                            </div>
                        )
                    }
                    <div className={"break-all"}>{children}</div>
                </div>
            </Td>
            <Td>
                <div className={`flex items-center gap-[8px]`}>
                    <div>{getIcon(msgBot)}</div>
                    <p className="block md:hidden">메신저봇R</p>
                </div>
            </Td>
            <Td>
                <div className={`flex items-center gap-[8px]`}>
                    <div>{getIcon(arBot)}</div>
                    <p className="block md:hidden">채팅 자동응답 봇</p>
                </div>
            </Td>
            <Td>
                <div className={`flex items-center gap-[8px]`}>
                    <div>{getIcon(sl)}</div>
                    <p className="block md:hidden">StarLight</p>
                </div>
            </Td>
        </Tr>
    );
}