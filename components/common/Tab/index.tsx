import React, { HTMLAttributes, useState } from "react";

type TabItem = {
    label: string,
    content: React.ReactNode
};

interface ITab extends HTMLAttributes<HTMLDivElement> {
    items: TabItem[];
}

export default function Tab({ items, className, ...p }: ITab) {
    const [ selectedIndex, setSelectedIndex ] = useState<number>(0);

    const tabOnClickHandler = (i: number) => {
        setSelectedIndex(i);
    };

    return (
        <div className={`flex flex-col [&>*:nth-child(2)]:flex-1 w-full h-full ${className}`} {...p}>
            <div className={"flex w-full border-b-[1px] border-b-default"}>
                {
                    items.map((e, i) => (
                        <div
                            key={i}
                            onClick={ () => tabOnClickHandler(i) }
                            className={`flex justify-center items-center box-border h-[40px] p-[0px_12px] cursor-pointer text-sm rounded-[4px_4px_0_0] border-b-[2px] select-none hover:bg-emphasis hover:text-default ${(selectedIndex === i) ? 'font-bold border-b-emphasis text-default' : 'font-normal border-b-transparent text-noimportance'}`}
                        >{ e.label }</div>
                    ))
                }
            </div>
            {
                items.map((e, i) => {
                    return (
                        <div key={i} className={`w-full h-full overflow-hidden ${(i === selectedIndex) ? "block" : "hidden"}`}>{ e.content }</div>
                    );
                })
            }
        </div>
    );
}