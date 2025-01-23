import {HTMLAttributes} from "react";
import Icon from "@/components/common/Icon";
import {Table, Tbody, Th, Thead, Tr} from "@/components/common/Table";
import AppCompatItem from "@/components/common/AppCompatItem";

interface IAppCompat extends HTMLAttributes<HTMLTableElement> {
    tableTitle?: String;
    compats: Compatibility | Compatibility[];
}

export default function AppCompat({tableTitle, compats, ...props}: IAppCompat) {
    return (
        <Table className="table-fixed" {...props}>
            <Thead>
                {
                    tableTitle &&
                    (
                        <Tr>
                            <Th colSpan={4}>{tableTitle}</Th>
                        </Tr>
                    )
                }
                <Tr className="hidden md:table-row">
                    <Th></Th>
                    <Th className="align-bottom">
                        <div className="flex items-center gap-[8px] w-fit">
                            {/* <div className="text-sm [writing-mode:vertical-rl] [text-orientation:sideways] rotate-[180deg] relative left-0 leading-[1] whitespace-nowrap">메신저봇R</div> */}
                            <Icon icon="MessengerbotRIcon" className={`fill-inherit-text w-[1rem] h-[1rem]`}/>
                            <div className="text-sm">메신저봇R</div>
                        </div>
                    </Th>
                    <Th className="align-bottom">
                        <div className="flex items-center gap-[8px] w-fit">
                            {/* <div className="text-sm [writing-mode:vertical-rl] [text-orientation:sideways] rotate-[180deg] relative left-0 leading-[1] whitespace-nowrap">채팅 자동응답 봇</div> */}
                            <Icon icon="AutoReplyBotIcon" className={`fill-inherit-text w-[1rem] h-[1rem]`}/>
                            <div className="text-sm">채팅 자동응답 봇</div>
                        </div>
                    </Th>
                    <Th className="align-bottom">
                        <div className="flex items-center gap-[8px] w-fit">
                            {/* <div className="text-sm [writing-mode:vertical-rl] [text-orientation:sideways] rotate-[180deg] relative left-0 leading-[1] whitespace-nowrap">StarLight</div> */}
                            <Icon icon="StarLightIcon" className={`fill-inherit-text w-[1rem] h-[1rem]`}/>
                            <div className="text-sm">StarLight</div>
                        </div>
                    </Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                     Array.isArray(compats) ?
                         compats.map((compat, i) => (<AppCompatItem compat={compat} key={i}/>))
                         :
                         <AppCompatItem compat={compats} />
                }
            </Tbody>
        </Table>
    );
}